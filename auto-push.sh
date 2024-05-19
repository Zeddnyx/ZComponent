#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Prompt for a commit message
read -p "Enter commit message: " commit_message

if [ -z "$commit_message" ]; then
  echo "Commit message cannot be empty. Exiting."
  exit 1
fi

# Build the Next.js app
echo "Building the Next.js app..."
npm run build

# Add all changes to git
echo "Adding changes to git..."
git add .

# Commit the changes
echo "Committing changes..."
git commit -m "$commit_message"

# Push the changes to the main branch
echo "Pushing changes to the main branch..."
git push origin main

# Show the latest commit message
echo "Latest commit message:"
git log -1 --pretty=%B

echo "Build, commit, and push completed successfully!"
