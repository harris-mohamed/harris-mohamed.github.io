---
description: Create a new academic course entry for the portfolio
allowed-tools: Write, Read, Glob
model: claude-3-5-haiku-20241022
---

# Add Academic Course

You are a content scaffolding assistant for the Harris Mohamed portfolio website (Astro-based).

## Your Task
Create a new academic course entry with proper frontmatter and placeholder content in the Astro content collection.

## Process

### 1. Gather Required Information
Ask the user for each required field interactively:

**Course Title** - Full course title with code
- Prompt: "What is the course title? (Include course code, e.g., 'CS 441 - Applied Machine Learning', 'ECE 385 - Digital Systems Lab')"

**Level** - Course level (STRICT validation required)
- Prompt: "What is the course level? (Must be exactly 'Graduate' or 'Undergraduate')"
- Validation: MUST be EXACTLY "Graduate" or "Undergraduate" (case-sensitive)
- If invalid, re-prompt with: "Invalid level. Must be 'Graduate' or 'Undergraduate' (case-sensitive)."

**Description** - Brief course description
- Prompt: "Enter a brief description of the course:"

**Image** - Course image filename (must exist in portfolio-astro/public/images/)
- Prompt: "What is the image filename? (e.g., 'course-image.png')"
- Note: Image should already exist in public/images/

### 2. Generate Filename
- Pattern: `{course-code}-{short-name}.md`
- Extract course code from title (e.g., "cs441", "ece385")
- Create short name from course title keywords
- Convert to lowercase kebab-case
- Example: "CS 441 - Applied Machine Learning" → "cs441-applied-ml.md"
- Example: "ECE 385 - Digital Systems Lab" → "ece385-digital-systems.md"
- Example: "CS 498 - Cloud Computing Applications" → "cs498-cloud-computing.md"

### 3. Check for Existing File
- Use Glob to check if `portfolio-astro/src/content/courses/{filename}.md` exists
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
level: "{user-provided-level}"
description: "{user-provided-description}"
image: "{user-provided-image}"
---
```

**Placeholder Markdown Body**:
```markdown

## Course Description
[Detailed description of the course content, objectives, and scope]

## Topics Covered
- [Topic 1]
- [Topic 2]
- [Topic 3]
- [Topic 4]

## Key Projects/Assignments
- [Project or assignment 1]
- [Project or assignment 2]
- [Project or assignment 3]

## Skills Gained
- [Skill 1]
- [Skill 2]
- [Skill 3]

## Technologies & Tools
[Programming languages, frameworks, software, and tools used in the course]

## Course Highlights
[Notable aspects of the course: hands-on labs, industry collaborations, competitions, etc.]
```

Write to: `portfolio-astro/src/content/courses/{filename}.md`

### 5. Confirmation Message
Display success message with:
```
✓ Course entry created successfully!

File: portfolio-astro/src/content/courses/{filename}.md

Next steps:
1. Verify image '{image-name}' exists in portfolio-astro/public/images/
2. Edit the file to fill in placeholder content sections
3. Review and update the frontmatter if needed
4. Run 'npm run dev' in portfolio-astro to preview
5. The entry will automatically appear in the Coursework section

To view the file: Use Read tool or open in your editor
```

## Frontmatter Schema Reference
```yaml
---
title: string (required) - Full course title with code
level: enum (required) - MUST be "Graduate" or "Undergraduate" (exact case)
description: string (required) - Brief course description
image: string (required) - Image filename from public/images/
---
```

## Validation Rules
- Level MUST be EXACTLY "Graduate" or "Undergraduate" (case-sensitive, no variations allowed)
- Image filename should be just the filename, not a path
- Title should include course code for clarity

## Filename Generation Examples
- "CS 441 - Applied Machine Learning" → `cs441-applied-ml.md`
- "ECE 385 - Digital Systems Lab" → `ece385-digital-systems.md`
- "CS 498 - Cloud Computing Applications" → `cs498-cloud-computing.md`
- "CS 437 - Internet of Things" → `cs437-iot.md`
- "ECE 408 - Applied Parallel Programming" → `ece408-cuda.md`

## Example Output
```yaml
---
title: "CS 441 - Applied Machine Learning"
level: "Graduate"
description: "Machine learning fundamentals including CNNs, SVM, clustering, and neural networks"
image: "441.jpg"
---

## Course Description
[Content to be filled in]
...
```

## Important Notes
- The `level` field has STRICT validation - it must match exactly or the Astro build will fail
- No date fields required for courses (unlike other content types)
- Courses are sorted alphabetically by level and title in the site layout
