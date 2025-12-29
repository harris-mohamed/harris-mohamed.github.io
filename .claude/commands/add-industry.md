---
description: Create a new industry experience entry for the portfolio
allowed-tools: Write, Read, Glob
model: claude-3-5-haiku-20241022
---

# Add Industry Experience

You are a content scaffolding assistant for the Harris Mohamed portfolio website (Astro-based).

## Your Task
Create a new industry experience entry with proper frontmatter and placeholder content in the Astro content collection.

## Process

### 1. Gather Required Information
Ask the user for each required field interactively:

**Job Title** - Position/role title
- Prompt: "What is the job title? (e.g., 'Software Development Engineer II', 'Software Engineering Intern')"

**Company** - Company name
- Prompt: "What is the company name?"

**Dates** - Employment date range (display format)
- Prompt: "What is the employment date range? (e.g., '2021 - Present', 'Summer 2020', 'May 2018 - Aug 2018')"
- Note: This is free-form text for display

**Start Date** - Employment start date in ISO format for sorting
- Prompt: "What is the start date? (Format: YYYY-MM-DD, e.g., 2021-08-01)"
- Validation: Must match YYYY-MM-DD format
- Note: This is used for chronological sorting

**Image** - Company logo/image filename (must exist in portfolio-astro/public/images/)
- Prompt: "What is the company logo/image filename? (e.g., 'company-logo.png')"
- Note: Image should already exist in public/images/

### 2. Generate Filename
- Pattern: `{company-kebab}-{simplified-role}-{year}.md`
- Convert company to kebab-case
- Simplify role to key term (e.g., "Software Development Engineer II" → "sde2", "Intern" → "intern")
- Extract year from start date
- Example: "Kratos", "Software Development Engineer II", "2021-08-01" → "kratos-sde2-2021.md"
- Example: "NVIDIA", "Software Engineering Intern", "2021-05-17" → "nvidia-intern-2021.md"

### 3. Check for Existing File
- Use Glob to check if `portfolio-astro/src/content/industry/{filename}.md` exists
- If exists, ask: "File already exists. Overwrite? (y/n/rename)"
  - y: Proceed with overwrite
  - n: Abort operation
  - rename: Ask for new filename

### 4. Create Content File
Generate markdown file with:

**YAML Frontmatter**:
```yaml
---
title: "{user-provided-title}"
company: "{user-provided-company}"
dates: "{user-provided-dates}"
date: "{user-provided-start-date}"
image: "{user-provided-image}"
---
```

**Placeholder Markdown Body**:
```markdown

## Role Overview
[Brief description of the position and your responsibilities]

## Key Responsibilities
- [Responsibility 1]
- [Responsibility 2]
- [Responsibility 3]

## Projects & Achievements
- [Project or achievement 1]
- [Project or achievement 2]
- [Project or achievement 3]

## Technologies & Tools
- [Technology/tool 1]
- [Technology/tool 2]
- [Technology/tool 3]

## Skills Developed
[Technical and professional skills gained or improved during this role]

## Impact/Results
[Quantifiable impact, results, or outcomes from your work]

## Team/Collaboration
[Information about team size, collaboration, mentorship]
```

Write to: `portfolio-astro/src/content/industry/{filename}.md`

### 5. Confirmation Message
Display success message with:
```
✓ Industry experience entry created successfully!

File: portfolio-astro/src/content/industry/{filename}.md

Next steps:
1. Verify image '{image-name}' exists in portfolio-astro/public/images/
2. Edit the file to fill in placeholder content sections
3. Review and update the frontmatter if needed
4. Run 'npm run dev' in portfolio-astro to preview
5. The entry will automatically appear in the Industry Experience section

To view the file: Use Read tool or open in your editor
```

## Frontmatter Schema Reference
```yaml
---
title: string (required) - Job title/position
company: string (required) - Company name
dates: string (required) - Employment date range (display format, e.g., "2021 - Present")
date: string (required) - Start date in YYYY-MM-DD format (for sorting)
image: string (required) - Company logo filename from public/images/
---
```

## Validation Rules
- Start date (date field) must be in YYYY-MM-DD format
- Dates field is free-form text for display
- Image filename should be just the filename, not a path
- Company and title are used to generate filename

## Filename Generation Examples
- Kratos, SDE II, 2021-08-01 → `kratos-sde2-2021.md`
- NVIDIA, Intern, 2021-05-17 → `nvidia-intern-2021.md`
- Continental, Intern, 2018-05-21 → `continental-intern-2018.md`
- Weber Grills, Intern, 2017-06-01 → `weber-grills-intern-2017.md`

## Example Output
```yaml
---
title: "Software Development Engineer II"
company: "Kratos Defense & Security Solutions"
dates: "2021 - Present"
date: "2021-08-01"
image: "kratos.png"
---

## Role Overview
[Content to be filled in]
...
```
