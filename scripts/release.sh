#!/bin/bash

set -e

TYPE=${1:-manual}

latest=$(git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0")
echo "Latest tag: $latest"

version=$(echo "$latest" | sed 's/v//')
IFS='.' read -r major minor patch <<< "$version"

case "$TYPE" in
    bump|patch)
        patch=$((patch + 1))
        new_tag="v$major.$minor.$patch"
        ;;
    minor)
        minor=$((minor + 1))
        new_tag="v$major.$minor.0"
        ;;
    major)
        major=$((major + 1))
        new_tag="v$major.0.0"
        ;;
    manual)
        read -p "Enter new tag: " new_tag
        if [ -z "$new_tag" ]; then
            echo "No tag provided, aborting."
            exit 1
        fi
        ;;
    *)
        echo "Invalid type: $TYPE"
        echo "Usage: $0 [bump|minor|major|manual]"
        exit 1
        ;;
esac

read -p "Creating tag [$new_tag] Continue? [y/N] " confirm
if [ "$confirm" = "y" ] || [ "$confirm" = "Y" ]; then
    git tag "$new_tag"
    git push origin "$new_tag"
    echo "Tag $new_tag created and pushed successfully."
else
    echo "Tag creation cancelled."
    exit 1
fi