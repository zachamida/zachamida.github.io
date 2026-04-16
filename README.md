# Portfolio Website

A modern, responsive portfolio website built with Next.js and TypeScript, deployed to GitHub Pages.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Running Locally](#running-locally)
3. [Branch Workflow](#branch-workflow)
4. [Updating Content](#updating-content)
5. [Adding a New Project Card](#adding-a-new-project-card)
6. [Creating a Project Detail Page](#creating-a-project-detail-page)
7. [Generating a Banner Image](#generating-a-banner-image)
8. [Deploying the Site](#deploying-the-site)
9. [Common Gotchas](#common-gotchas)

---

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx                        # Main page (tabs: Projects, Publications, Talks, Blog)
│   │   └── projects/[id]/
│   │       ├── page.tsx                    # Static route generator (generateStaticParams)
│   │       └── ProjectPageClient.tsx       # Maps project IDs → content components
│   ├── components/
│   │   ├── ProjectCard.tsx                 # Card shown in the projects grid
│   │   ├── ProjectsGrid.tsx                # Grid layout + filter logic
│   │   ├── <ProjectName>Content.tsx        # One file per project detail page
│   │   └── ...
│   ├── data/
│   │   ├── projects.ts                     # All project entries (source of truth)
│   │   ├── publications.ts
│   │   ├── talks.ts
│   │   └── blogs.ts
│   └── types/
│       └── project.ts                      # Project type definition
├── public/
│   ├── images/projects/                    # Banner images (1200×630 PNG)
│   ├── pdf/                                # CV PDF
│   └── pdfs/                               # Publication PDFs
├── deploy.sh                               # Build + deploy script
└── next.config.js
```

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site hot-reloads on file changes.

---

## Branch Workflow

The site uses **two branches**:

| Branch | Purpose |
|--------|---------|
| `new_style` | Source code — edit everything here |
| `git-main-page` | Compiled static output — GitHub Pages serves this |

**Never edit `git-main-page` directly.** All changes go into `new_style` and are pushed to `git-main-page` automatically by `deploy.sh`.

---

## Updating Content

### Profile info
Edit `src/data/profile.ts` — name, title, email, links, CV URL.

### CV / Resume PDF
Replace `public/pdf/ZacharyHamidaCV.pdf` with the updated file, then:
```bash
git add public/pdf/ZacharyHamidaCV.pdf
git commit -m "Update CV"
bash deploy.sh
```

### Publications, Talks, Blog posts
Edit the corresponding files in `src/data/` — `publications.ts`, `talks.ts`, `blogs.ts`.

---

## Adding a New Project Card

All project cards are driven by `src/data/projects.ts`. Add an entry to the `projects` array:

```ts
{
  id: 'my-project',                          // unique slug, used in the URL
  title: 'My Project',
  description: 'One or two sentence summary shown on the card.',
  type: 'industry',                          // 'research' | 'industry'
  technologies: ['Python', 'Azure', '...'],
  date: '2025',
  url: '/projects/my-project',              // internal route
  image: '/images/projects/my-project.png', // banner image (1200×630)
  hasDetailPage: true,                       // set true if you build a detail page
  isOpenSource: true,                        // optional — shows green badge + filterable
  githubUrl: 'https://github.com/...',       // optional
  highlights: [                              // optional bullet points on the card
    'Key highlight 1',
    'Key highlight 2',
  ]
}
```

Place it at the **top** of the array to make it appear first. The card will appear automatically on the main page after deploying.

---

## Creating a Project Detail Page

A detail page requires **three changes**:

### 1. Create the content component

Create `src/components/MyProjectContent.tsx`:

```tsx
'use client';

export function MyProjectContent() {
  return (
    <div className="space-y-8">

      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-400">...</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        {/* steps, cards, lists, etc. */}
      </section>

    </div>
  );
}
```

Use existing components (e.g. `AICommitteeContent.tsx`, `RAGProjectsContent.tsx`) as style references.

### 2. Register the component in the router

Open `src/app/projects/[id]/ProjectPageClient.tsx` and add:

**Import** (near the top with other imports):
```tsx
import { MyProjectContent } from '@/components/MyProjectContent';
```

**Render condition** (inside the existing chain of `project.id === '...'` conditions):
```tsx
) : project.id === 'my-project' ? (
  <MyProjectContent />
) : canFetchProjectContent(project.id) && (
```

### 3. Add the project entry to `projects.ts`

Set `hasDetailPage: true` and `url: '/projects/my-project'` as shown in the previous section.

---

## Generating a Banner Image

All banner images are 1200×630 PNG files stored in `public/images/projects/`.

Use the Python script below as a template (requires `Pillow`):

```python
from PIL import Image, ImageDraw, ImageFont
import math

W, H = 1200, 630
img = Image.new('RGB', (W, H))
draw = ImageDraw.Draw(img)

# Dark navy gradient background
for y in range(H):
    t = y / H
    draw.line([(0, y), (W, y)], fill=(int(8+t*10), int(12+t*12), int(28+t*22)))

# Azure blue top accent strip
for y in range(5):
    draw.line([(0, y), (W, y)], fill=(0, 120, 212))

# Fonts
font_title = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 72)
font_sub   = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 28)

# Title
draw.text((80, 220), "My Project", font=font_title, fill=(230, 240, 255))
draw.text((82, 312), "Short subtitle", font=font_sub, fill=(100, 140, 190))

# ... add diagram / icons on the right side

img.save("public/images/projects/my-project.png")
```

> **Important:** Commit the image to `new_style` **before** running `deploy.sh`. Untracked files in `public/` are lost when the script switches branches during the build.

```bash
git add public/images/projects/my-project.png
git commit -m "Add my-project banner image"
```

---

## Deploying the Site

Once all files are **committed** to `new_style`:

```bash
bash deploy.sh
```

The script will:
1. Install dependencies
2. Run `next build` (outputs to `out/`)
3. Switch to `git-main-page`, replace its contents with the new build
4. Commit and push to GitHub
5. Switch back to `new_style`

GitHub Pages picks up the change within a few minutes.

### Full checklist before deploying

- [ ] All new/modified files committed to `new_style`
- [ ] Banner images committed (not just saved to disk)
- [ ] `npm run dev` tested locally with no errors

---

## Common Gotchas

### Commit images before deploying
`deploy.sh` switches branches during the build. Any **untracked** file (e.g. a freshly generated PNG) inside `public/` will disappear when git checks out `git-main-page`. Always commit images first.

### File names are case-sensitive on GitHub Pages
GitHub Pages runs on Linux. A file saved as `seminar 7.pdf` will 404 if the URL references `Seminar 7.pdf`. Keep filenames consistent with the URLs in `talks.ts` / `publications.ts`.

### The `[id]` path in git commands needs quoting
```bash
# Wrong — shell expands [id] as a glob
git add src/app/projects/[id]/ProjectPageClient.tsx

# Correct
git add "src/app/projects/[id]/ProjectPageClient.tsx"
```

### `.nojekyll` must exist on `git-main-page`
Without it, GitHub Pages runs Jekyll and silently ignores the `_next/` directory (all CSS/JS), stripping all styling. `deploy.sh` already handles this with `touch .nojekyll` after copying the build — do not remove that line.
