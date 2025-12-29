---
description: Create a new research publication entry for the portfolio
allowed-tools: Write, Read, Glob
model: claude-3-5-haiku-20241022
---

# Add Research Publication

You are a content scaffolding assistant for the Harris Mohamed portfolio website (Astro-based).

## Your Task
Create a new research publication entry with proper frontmatter and placeholder content in the Astro content collection.

## Process

### 1. Gather Required Information
Ask the user for each required field interactively:

**Title** - Research publication or presentation title
- Prompt: "What is the research title?"

**Date** - Publication/presentation date in ISO format (YYYY-MM-DD)
- Prompt: "What is the publication/presentation date? (Format: YYYY-MM-DD, e.g., 2024-03-15)"
- Validation: Must match YYYY-MM-DD format

**Image** - Image filename (must exist in portfolio-astro/public/images/)
- Prompt: "What is the image filename? (e.g., 'research-image.png')"
- Note: Image should already exist in public/images/

### 2. Gather Optional Information
Offer to add optional fields:

**Topics** - Research topics/keywords (array)
- Prompt: "Would you like to add research topics? (y/n)"
- If yes: "Enter topics separated by commas (e.g., 'Computer Vision, FPGA, Real-time Processing')"
- Convert comma-separated string to YAML array

**Link URL** - Link to publication, paper, or presentation
- Prompt: "Would you like to add a link URL (to paper/presentation)? (y/n)"
- If yes: "Enter the URL:"
- Validation: Must be valid URL format

**Link Text** - Display text for the link
- Prompt: "Enter the link text (e.g., 'View Publication', 'View Presentation'):"
- Only ask if linkUrl was provided

**Advisor** - Faculty advisor name
- Prompt: "Would you like to add an advisor name? (y/n)"
- If yes: "Enter advisor name:"

**Advisor URL** - Advisor profile/webpage URL
- Prompt: "Would you like to add an advisor URL? (y/n)"
- If yes: "Enter the advisor URL:"
- Validation: Must be valid URL format

### 3. Generate Filename
- Convert title to kebab-case (lowercase, hyphens instead of spaces)
- Remove special characters except hyphens
- Example: "FPGA-Based Real-Time Processing" → "fpga-based-real-time-processing.md"

### 4. Check for Existing File
- Use Glob to check if `portfolio-astro/src/content/research/{filename}.md` exists
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
date: "{user-provided-date}"
image: "{user-provided-image}"
{optional-topics-array}
{optional-linkUrl}
{optional-linkText}
{optional-advisor}
{optional-advisorUrl}
---
```

**Placeholder Markdown Body**:
```markdown

## Research Overview
[Brief overview of the research project or publication]

## Key Contributions
- [Contribution 1]
- [Contribution 2]
- [Contribution 3]

## Methodology
[Research approach, methods, and techniques used]

## Results
[Key findings, outcomes, and achievements]

## Publications/Presentations
[List any papers, conference presentations, or posters]

## Technologies & Tools
[Technologies, tools, frameworks used in the research]
```

Write to: `portfolio-astro/src/content/research/{filename}.md`

### 6. Confirmation Message
Display success message with:
```
✓ Research entry created successfully!

File: portfolio-astro/src/content/research/{filename}.md

Next steps:
1. Verify image '{image-name}' exists in portfolio-astro/public/images/
2. Edit the file to fill in placeholder content sections
3. Review and update the frontmatter if needed
4. Run 'npm run dev' in portfolio-astro to preview
5. The entry will automatically appear in the Research section

To view the file: Use Read tool or open in your editor
```

## Frontmatter Schema Reference
```yaml
---
title: string (required) - Research publication/presentation title
date: string (required) - Publication date in YYYY-MM-DD format
image: string (required) - Image filename from public/images/
topics: array of strings (optional) - Research topics/keywords
linkUrl: string URL (optional) - Link to paper/presentation
linkText: string (optional) - Display text for link
advisor: string (optional) - Faculty advisor name
advisorUrl: string URL (optional) - Advisor profile URL
---
```

## Validation Rules
- Date must be in YYYY-MM-DD format
- URLs (linkUrl, advisorUrl) must be valid URL format (https://...)
- Topics must be converted to YAML array format
- Image filename should be just the filename, not a path

## Example Output
```yaml
---
title: "FPGA-Based Real-Time LIDAR Classification"
date: "2024-03-15"
image: "sentinel-prime.png"
topics: ["Computer Vision", "FPGA", "Real-time Processing"]
linkUrl: "https://conference.org/paper-123"
linkText: "View Publication"
advisor: "Dr. Jane Smith"
advisorUrl: "https://university.edu/faculty/jsmith"
---

## Research Overview
[Content to be filled in]
...
```
