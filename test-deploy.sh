#!/bin/bash
# test-deploy.sh - Test deployment process without pushing

set -e  # Exit on any error

echo "🧪 Testing deployment process..."

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

# Build on development branch
echo "🔄 Ensuring we're on new_style branch..."
git checkout new_style

echo "📦 Installing dependencies..."
npm install

echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Error: Build failed - 'out' directory not found"
    git checkout "$CURRENT_BRANCH"
    exit 1
fi

echo "✅ Build completed successfully"
echo "📁 Contents of out directory:"
ls -la out/

echo "🔄 Switching to git-main-page branch..."
git checkout git-main-page

echo "📝 Current files in git-main-page branch:"
ls -la

echo "🧹 Would clean up old files (simulation)..."
echo "📁 Would copy new build files (simulation)..."
echo "💾 Would commit changes (simulation)..."
echo "🚀 Would push to GitHub Pages (simulation)..."

# Return to original branch
echo "🔄 Returning to original branch: $CURRENT_BRANCH"
git checkout "$CURRENT_BRANCH"

echo "✅ Test deployment simulation complete!"
echo "🌐 Ready to deploy to: https://zachamida.github.io"
