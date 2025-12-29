# Portfolio Content Scaffolding Commands

Quick slash commands to add new content entries to the Harris Mohamed portfolio website (Astro-based).

## Available Commands

### `/add-research` - Add Research Publication
Creates a new research entry with frontmatter and placeholder content.

**When to use**: Adding research publications, conference presentations, or academic papers to your portfolio.

**Usage**:
```
/add-research
```

You'll be prompted for:
- Research title
- Publication/presentation date (YYYY-MM-DD)
- Image filename
- Optional: Topics, link URL, link text, advisor info

**Output**: Creates `portfolio-astro/src/content/research/{title-kebab}.md`

---

### `/add-project` - Add Personal Project
Creates a new project entry with frontmatter and placeholder content.

**When to use**: Adding personal technical projects, class projects, or side projects to your portfolio.

**Usage**:
```
/add-project
```

You'll be prompted for:
- Project title
- Brief description
- Project date (YYYY-MM-DD)
- Priority (number for sorting)
- Image filename
- Optional: Status, video URL, GitHub URL, tags

**Output**: Creates `portfolio-astro/src/content/projects/{title-kebab}.md`

---

### `/add-industry` - Add Industry Experience
Creates a new industry position entry with frontmatter and placeholder content.

**When to use**: Adding internships, full-time positions, or contract work to your portfolio.

**Usage**:
```
/add-industry
```

You'll be prompted for:
- Job title
- Company name
- Employment date range (e.g., "2021 - Present")
- Start date for sorting (YYYY-MM-DD)
- Company logo/image filename

**Output**: Creates `portfolio-astro/src/content/industry/{company}-{role}-{year}.md`

---

### `/add-course` - Add Academic Course
Creates a new coursework entry with frontmatter and placeholder content.

**When to use**: Adding relevant academic courses to showcase your education and technical background.

**Usage**:
```
/add-course
```

You'll be prompted for:
- Course title with code (e.g., "CS 441 - Applied Machine Learning")
- Level (MUST be "Graduate" or "Undergraduate" - case-sensitive)
- Brief description
- Image filename

**Output**: Creates `portfolio-astro/src/content/courses/{course-code}-{short-name}.md`

---

## Workflow After Running a Command

1. **Verify Image Exists**
   - Check that the image file exists in `portfolio-astro/public/images/`
   - If not, add it before building the site

2. **Fill in Placeholder Content**
   - Open the generated markdown file
   - Replace placeholder sections with actual content
   - Remove any sections that don't apply

3. **Review Frontmatter**
   - Double-check all frontmatter values
   - Ensure dates are in correct format (YYYY-MM-DD)
   - Verify URLs are valid

4. **Preview Changes**
   ```bash
   cd portfolio-astro
   npm run dev
   ```
   - Navigate to the appropriate section to see your new entry
   - Check that images load correctly
   - Verify content displays as expected

5. **Commit to Git**
   ```bash
   git add portfolio-astro/src/content/{collection}/{filename}.md
   git commit -m "Add new {type}: {title}"
   git push
   ```

---

## File Locations

Generated content files are created in:

| Content Type | Directory | Example Filename |
|-------------|-----------|------------------|
| Research | `portfolio-astro/src/content/research/` | `fpga-real-time-processing.md` |
| Projects | `portfolio-astro/src/content/projects/` | `vertical-farming-system.md` |
| Industry | `portfolio-astro/src/content/industry/` | `kratos-sde2-2021.md` |
| Courses | `portfolio-astro/src/content/courses/` | `cs441-applied-ml.md` |

All images should be placed in: `portfolio-astro/public/images/`

---

## Validation & Troubleshooting

### Common Issues

**Issue**: "File already exists"
- **Solution**: Choose to overwrite, rename, or abort when prompted

**Issue**: "Invalid date format"
- **Solution**: Dates must be in YYYY-MM-DD format (e.g., 2024-03-15)

**Issue**: "Invalid course level"
- **Solution**: Level must be exactly "Graduate" or "Undergraduate" (case-sensitive)

**Issue**: "Invalid URL"
- **Solution**: URLs must start with https:// or http://

**Issue**: Image doesn't appear on site
- **Solution**: Verify image exists in `portfolio-astro/public/images/` and filename matches exactly

### Astro Build Errors

If you encounter build errors after adding content:

1. Check the Astro dev server output for specific errors
2. Verify YAML frontmatter syntax is correct (proper indentation, no missing colons)
3. Ensure all required fields are present
4. Check that enum values (like course level) match exactly
5. Validate URLs are properly formatted

### Schema Reference

Content schemas are defined in: `portfolio-astro/src/content/config.ts`

If you need to add new fields or modify schemas, update that file and restart the Astro dev server.

---

## Tips & Best Practices

1. **Images**: Use descriptive filenames (e.g., `sentinel-prime-fpga.png` instead of `img1.png`)

2. **Dates**: Use consistent date formats (YYYY-MM-DD) for sorting to work correctly

3. **Priorities** (Projects): Higher numbers appear first. Use range 1-10 for easy reordering.

4. **Tags**: Be consistent with tag naming (e.g., always use "Machine Learning" not "ML" or "machine-learning")

5. **Descriptions**: Keep brief (one sentence) for consistency across cards

6. **Content Sections**: Remove placeholder sections that don't apply rather than leaving them empty

7. **Commit Messages**: Use descriptive commit messages like "Add FPGA research publication" not just "Add research"

---

## Examples

### Example: Adding a Research Publication

```
> /add-research
What is the research title?
> FPGA-Based Real-Time LIDAR Classification

What is the publication/presentation date? (Format: YYYY-MM-DD)
> 2024-03-15

What is the image filename?
> sentinel-prime.png

Would you like to add research topics? (y/n)
> y

Enter topics separated by commas:
> Computer Vision, FPGA, Real-time Processing

Would you like to add a link URL? (y/n)
> y

Enter the URL:
> https://conference.org/paper-123

Enter the link text:
> View Publication

✓ Research entry created successfully!
```

### Example: Adding a Project

```
> /add-project
What is the project title?
> Automated Vertical Farming System

Enter a brief description:
> IoT-based system for monitoring and controlling vertical farm environment

What is the project date? (Format: YYYY-MM-DD)
> 2020-05-15

Enter priority (1-10):
> 8

What is the image filename?
> vertical-farming.png

Would you like to add a status? (y/n)
> y

Enter project status:
> Completed

✓ Project entry created successfully!
```

---

## Questions or Issues?

- Check the Astro documentation: https://docs.astro.build/
- Review existing content files for examples
- Consult `CLAUDE.md` in the repo root for project documentation
- Open an issue or ask for help if commands aren't working as expected

---

## Command Development

These commands are defined in `.claude/commands/*.md` files. Each command:
- Uses interactive prompts to gather information
- Validates input according to content schemas
- Generates properly formatted markdown files
- Includes helpful error messages and confirmation

To modify a command, edit the corresponding `.md` file in this directory.
