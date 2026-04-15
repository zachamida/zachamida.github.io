#!/bin/bash
# deploy.sh - Deploy Next.js site to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if new_style branch exists
if ! git show-ref --verify --quiet refs/heads/new_style; then
    echo "❌ Error: new_style branch does not exist"
    exit 1
fi

# Check if git-main-page branch exists
if ! git show-ref --verify --quiet refs/heads/git-main-page; then
    echo "❌ Error: git-main-page branch does not exist"
    exit 1
fi

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📝 Current branch: $CURRENT_BRANCH"

# Stash any uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "💾 Stashing uncommitted changes..."
    git stash push -m "Auto-stash before deployment $(date)"
    STASHED=true
else
    STASHED=false
fi

# Build on development branch
echo "🔄 Switching to new_style branch..."
git checkout new_style

echo "📦 Installing dependencies..."
npm install

echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Error: Build failed - 'out' directory not found"
    git checkout "$CURRENT_BRANCH"
    if [ "$STASHED" = true ]; then
        git stash pop
    fi
    exit 1
fi

echo "✅ Build completed successfully"

# Create a temporary directory to store the build output
TEMP_BUILD_DIR=$(mktemp -d)
echo "📦 Copying build to temporary directory: $TEMP_BUILD_DIR"
cp -r out/* "$TEMP_BUILD_DIR/"

# Deploy to GitHub Pages branch
echo "🔄 Switching to git-main-page branch..."
git checkout git-main-page

echo "🧹 Cleaning up old files..."
# Remove old files but keep .git and other hidden files
find . -maxdepth 1 -not -name '.' -not -name '..' -not -name '.git*' -not -name 'deploy.sh' -exec rm -rf {} +

echo "📁 Copying new build files..."
cp -r "$TEMP_BUILD_DIR"/* .

# Clean up temporary directory
rm -rf "$TEMP_BUILD_DIR"

# Ensure .nojekyll exists so GitHub Pages skips Jekyll processing
# (required to serve _next/ static assets correctly)
touch .nojekyll

# Add all changes
echo "📝 Adding changes to git..."
git add .

# Check if there are any changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to deploy"
    git checkout "$CURRENT_BRANCH"
    if [ "$STASHED" = true ]; then
        git stash pop
    fi
    exit 0
fi

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy updated content - $(date)"

# Push to remote
echo "🚀 Pushing to GitHub Pages..."
git push origin git-main-page

# Return to original branch
echo "🔄 Returning to original branch: $CURRENT_BRANCH"
git checkout "$CURRENT_BRANCH"

# Restore stashed changes if any
if [ "$STASHED" = true ]; then
    echo "📦 Restoring stashed changes..."
    git stash pop
fi

echo "✅ Deployment complete! Site will update in a few minutes."
echo "🌐 Your site should be available at: https://zachamida.github.io"
