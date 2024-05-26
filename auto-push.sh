#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo ""
read -p "Enter commit message: " commit_message
read -p "Which branch?: " branch
echo ""

if [ -z "$commit_message" ]; then
  echo "Commit message cannot be empty. Exiting."
  exit 1
fi

npm run build
git add .
git commit -m "$commit_message"
git push origin $branch

echo ""
echo " Build and push completed successfully!"
echo ""
