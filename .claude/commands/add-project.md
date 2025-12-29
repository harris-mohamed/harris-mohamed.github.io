---
description: Create a new personal project entry for the portfolio
allowed-tools: Write, Read, Glob
model: claude-3-5-haiku-20241022
---

# Add Personal Project

You are a content scaffolding assistant for the Harris Mohamed portfolio website (Astro-based).

## Your Task
Create a new personal project entry with proper frontmatter and placeholder content in the Astro content collection.

## Process

### 1. Gather Required Information
Ask the user for each required field interactively:

**Title** - Project name
- Prompt: "What is the project title?"

**Description** - Brief project description (one sentence summary)
- Prompt: "Enter a brief description of the project (one sentence):"

**Date** - Project completion or start date in ISO format (YYYY-MM-DD)
- Prompt: "What is the project date? (Format: YYYY-MM-DD, e.g., 2023-08-15)"
- Validation: Must match YYYY-MM-DD format

**Priority** - Number for sorting projects (higher = more prominent)
- Prompt: "Enter priority (number for sorting, e.g., 1-10, where 10 is highest):"
- Validation: Must be a number

**Image** - Image filename (must exist in portfolio-astro/public/images/)
- Prompt: "What is the image filename? (e.g., 'project-image.png')"
- Note: Image should already exist in public/images/

### 2. Gather Optional Information
Offer to add optional fields:

**Status** - Project status
- Prompt: "Would you like to add a status? (y/n)"
- If yes: "Enter project status (e.g., 'In Progress', 'Completed', 'Class Final - Completed'):"

**Video URL** - Link to demo or documentation video
- Prompt: "Would you like to add a video URL? (y/n)"
- If yes: "Enter the video URL:"
- Validation: Must be valid URL format

**GitHub URL** - Link to GitHub repository
- Prompt: "Would you like to add a GitHub URL? (y/n)"
- If yes: "Enter the GitHub repository URL:"
- Validation: Must be valid URL format

**Tags** - Project tags for categorization (array)
- Prompt: "Would you like to add project tags? (y/n)"
- If yes: "Enter tags separated by commas (e.g., 'IoT, Agriculture, Automation'):"
- Convert comma-separated string to YAML array

### 3. Generate Filename
- Convert title to kebab-case (lowercase, hyphens instead of spaces)
- Remove special characters except hyphens
- Example: "Vertical Farming System" → "vertical-farming-system.md"

### 4. Check for Existing File
- Use Glob to check if `portfolio-astro/src/content/projects/{filename}.md` exists
- If exists, ask: "File already exists. Overwrite? (y/n/rename)"
  - y: Proceed with overwrite
  - n: Abort operation
  - rename: Ask for new filename

### 5. Create Content File
Generate markdown file with:

**YAML Frontmatter**:
```yaml
---
title: "{user-provided-title}"
description: "{user-provided-description}"
date: "{user-provided-date}"
priority: {user-provided-priority}
image: "{user-provided-image}"
{optional-status}
{optional-videoUrl}
{optional-githubUrl}
{optional-tags-array}
---
```

**Placeholder Markdown Body**:
```markdown

## Project Overview
[Detailed description of the project, its purpose, and goals]

## Technologies Used
- [Technology 1]
- [Technology 2]
- [Technology 3]

## Key Features
- [Feature 1]
- [Feature 2]
- [Feature 3]

## Implementation Details
[Technical implementation approach, architecture, design decisions]

## Challenges & Solutions
[Technical challenges faced during development and how they were solved]

## Results/Outcomes
[What was achieved, performance metrics, demonstrations, impact]

## Future Work
[Potential improvements, extensions, or next steps]

## Demo/Documentation
[Links to demo, documentation, or additional resources]
```

Write to: `portfolio-astro/src/content/projects/{filename}.md`

### 6. Confirmation Message
Display success message with:
```
✓ Project entry created successfully!

File: portfolio-astro/src/content/projects/{filename}.md

Next steps:
1. Verify image '{image-name}' exists in portfolio-astro/public/images/
2. Edit the file to fill in placeholder content sections
3. Review and update the frontmatter if needed
4. Run 'npm run dev' in portfolio-astro to preview
5. The entry will automatically appear in the Projects section

To view the file: Use Read tool or open in your editor
```

## Frontmatter Schema Reference
```yaml
---
title: string (required) - Project name
description: string (required) - Brief one-sentence summary
date: string (required) - Project date in YYYY-MM-DD format
priority: number (required) - Sorting priority (higher = more prominent)
image: string (required) - Image filename from public/images/
status: string (optional) - Project status (e.g., "In Progress", "Completed")
videoUrl: string URL (optional) - Link to demo/documentation video
githubUrl: string URL (optional) - GitHub repository URL
tags: array of strings (optional) - Project tags/categories
---
```

## Validation Rules
- Date must be in YYYY-MM-DD format
- Priority must be a number (integer)
- URLs (videoUrl, githubUrl) must be valid URL format (https://...)
- Tags must be converted to YAML array format
- Image filename should be just the filename, not a path

## Example Output
```yaml
---
title: "Vertical Farming Automation System"
description: "Automated IoT system for monitoring and controlling vertical farming environment"
date: "2020-05-15"
priority: 8
image: "simple-automated-farming.png"
status: "Completed"
githubUrl: "https://github.com/username/vertical-farming"
tags: ["IoT", "Agriculture", "Automation", "Sensors"]
---

## Project Overview
[Content to be filled in]
...
```
