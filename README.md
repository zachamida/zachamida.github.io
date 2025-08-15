# Portfolio Website

A modern, responsive portfolio website built with Next.js and TypeScript to showcase research and industry projects.

## Features

- Modular project components
- Filtering by project type (Research/Industry/Open Source)
- Open-source project labeling and filtering
- Individual project detail pages with dynamic routing
- External content fetching and parsing
- Responsive design
- Easy content management through data files
- Built with TypeScript for type safety
- Styled with Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding New Projects

1. Open `src/data/projects.ts`
2. Add your project to the `projects` array following the `Project` type definition
3. Set `isOpenSource: true` for open-source projects to display the green label
4. Your new project will automatically appear on the website

### Creating Project Detail Pages

For projects that need detailed pages with external content:

1. Set `hasDetailPage: true` in the project data
2. Set `url` to the internal route (e.g., `/projects/project-id`)
3. Add the project's original external URL to `src/lib/projectUrls.ts`
4. The system will automatically fetch and parse content from the external URL
5. The project will link to its detail page instead of external URLs

The content parser automatically extracts:

- Project descriptions
- Funding information
- Development methods and tools
- Publications and resources
- Open-source software links

## Project Structure

- `src/app`: App Router pages and layouts
- `src/components`: Reusable React components
- `src/types`: TypeScript type definitions
- `src/data`: Project data and content
- `src/styles`: Custom styles and Tailwind CSS configurations

## Deployment

This website can be easily deployed to GitHub Pages. Follow these steps:

1. Push your changes to GitHub
2. Enable GitHub Pages in your repository settings
3. Configure the deployment source to use the `gh-pages` branch

## Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
