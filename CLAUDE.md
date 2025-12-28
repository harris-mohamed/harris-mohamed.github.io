# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Harris Mohamed, hosted on GitHub Pages. The site showcases academic research, personal projects, industry experience, teaching experience, and relevant coursework. It is built using HTML, CSS (Bootstrap-based), and JavaScript (jQuery-based).

## Technology Stack

- **Frontend Framework**: Bootstrap 4.5.3 with Start Bootstrap Freelancer theme v6.0.5
- **JavaScript Libraries**:
  - jQuery 3.5.1
  - jQuery Easing 1.4.1
  - Bootstrap validation (jqBootstrapValidation.js)
- **CSS**: Custom styles in `css/styles.css` built on Bootstrap
- **Icons**: Font Awesome 5.15.1
- **Analytics**: Google Analytics (UA-140232502-1)

## File Structure

```
.
├── index.html              # Main single-page application (2986 lines)
├── css/
│   └── styles.css          # Bootstrap-based custom styling
├── js/
│   └── scripts.js          # jQuery interactions and smooth scrolling
├── images/                 # Portfolio images, project screenshots, headshots
├── assets/
│   ├── img/               # Additional image assets
│   └── mail/              # Contact form JavaScript and PHP
│       ├── contact_me.js
│       ├── contact_me.php
│       └── jqBootstrapValidation.js
└── .git/
```

## Architecture

### Single-Page Application Structure

The website is a single-page application (`index.html`) with the following main sections:

1. **Navigation** (`#mainNav`): Fixed top navbar with smooth scroll triggers
2. **Masthead/Header**: Hero section with profile image and bio
3. **About Section** (`#about`): Personal introduction and social links
4. **Research Section** (`#research`): Academic publications and conference presentations
5. **Projects Section** (`#projects`): Personal technical projects
6. **Industry Section** (`#industry`): Professional work experience
7. **Teaching Section** (`#teaching`): Teaching assistant and course-related experience
8. **Coursework Section** (`#coursework`): Relevant academic courses
9. **Footer**: Social media links and copyright

### Modal System

The site uses **Bootstrap modals extensively** (48 modals total) to display detailed information about:
- Research papers and conference presentations
- Personal projects (e.g., vertical farming, CUDA implementations, FPGA designs)
- Industry positions (Kratos, NVIDIA, Continental, Weber Grills)
- Teaching experiences
- Individual courses

Each modal follows the pattern:
```html
<div class="portfolio-modal modal fade" id="[name]Modal">
  <!-- Modal content with project/research details -->
</div>
```

### JavaScript Functionality

**`js/scripts.js`** handles:
- Smooth scrolling to anchor sections using jQuery easing
- Navbar collapse on mobile
- Navbar shrink effect on scroll
- Scrollspy for active navigation highlighting
- Modal hash routing: Opens specific modals based on URL hash (e.g., `#sentinelModal`)
  - Array of 30+ modal IDs checked on page load
  - If URL contains modal hash, automatically opens that modal

**Navigation behavior**:
- All internal links use `.js-scroll-trigger` class for smooth scrolling
- Offset of 71px/80px to account for fixed navbar height

## Development Workflow

### Local Development

This is a static site with no build process. To develop:

1. **Open the site**: Simply open `index.html` in a browser or use a local web server:
   ```bash
   python -m http.server 8000
   # or
   python3 -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`

2. **Live reload** (optional): Use any static file server with live reload:
   ```bash
   # If you have Node.js installed:
   npx http-server -p 8000
   # or with live-server:
   npx live-server
   ```

### Deployment

This site is hosted on **GitHub Pages**. To deploy:

1. Commit changes to the repository
2. Push to the appropriate branch (likely `master` or `main`)
3. GitHub Pages will automatically serve the updated site

Current git branches:
- Working branch: `release/redesign`
- Main branch: `master`

### Making Changes

When editing content:

1. **Adding new projects/research**:
   - Add portfolio item in the appropriate section (research/projects/industry)
   - Create corresponding modal with unique ID at the bottom of `index.html`
   - Add modal ID to the `modals` array in `js/scripts.js` if you want hash routing support

2. **Updating styling**: Edit `css/styles.css`

3. **Modifying behavior**: Edit `js/scripts.js` (jQuery-based)

4. **Adding images**: Place in `images/` directory and reference in HTML

## Important Notes

- **No build step required** - this is a static HTML site
- **jQuery dependency** - all JavaScript uses jQuery; maintain jQuery patterns when adding features
- **Bootstrap modals** - the primary interaction pattern; familiarize yourself with Bootstrap 4 modal API
- **Long HTML file** - `index.html` is 2986 lines; use search/grep to find specific sections
- **Contact form** - Currently commented out in HTML; uses PHP backend (`assets/mail/contact_me.php`)
- **Google Analytics** - Integrated tracking code at bottom of HTML
- **External CDNs** - Site depends on external CDN resources (jQuery, Bootstrap, Font Awesome)
- **Resume link** - External Google Drive link in navigation (line 36)

## Content Sections

The website highlights Harris Mohamed's work in:
- **Space Domain Awareness (SDA)**: RF data analysis, satellite tracking, pattern-of-life analysis (Kratos Defense)
- **FPGA Development**: Real-time LIDAR classification (Sentinel/Sentinel Prime projects)
- **Computer Vision & AI/ML**: Various research and personal projects
- **Hardware Acceleration**: CUDA, FPGA implementations
- **Embedded Systems**: IoT, vertical farming automation

## Common Tasks

**Update personal information**: Edit the About section starting at line 62

**Add new research publication**: Add portfolio item in Research section (line 107+) and create modal

**Modify navigation**: Edit navbar section (line 21-40)

**Update social links**: Edit footer social icons (line 86-89)

**Change color scheme**: Modify Bootstrap variables in `css/styles.css`

## Content Scaffolding Commands (Astro Site)

The repository includes custom Claude Code slash commands to quickly scaffold new content entries for the **Astro-based portfolio** (`portfolio-astro/`):

### Available Commands

- **`/add-research`** - Create new research publication entry
  - Prompts for: title, date, image, topics, links, advisor info
  - Creates: `portfolio-astro/src/content/research/{title-kebab}.md`

- **`/add-project`** - Create new personal project entry
  - Prompts for: title, description, date, priority, image, status, URLs, tags
  - Creates: `portfolio-astro/src/content/projects/{title-kebab}.md`

- **`/add-industry`** - Create new industry experience entry
  - Prompts for: job title, company, dates, image
  - Creates: `portfolio-astro/src/content/industry/{company}-{role}-{year}.md`

- **`/add-course`** - Create new academic course entry
  - Prompts for: course title, level (Graduate/Undergraduate), description, image
  - Creates: `portfolio-astro/src/content/courses/{course-code}-{short-name}.md`

### Command Usage

All commands use **interactive prompts** to gather required information and generate properly formatted markdown files with:
- Valid YAML frontmatter matching content schemas
- Placeholder content sections to fill in
- Helpful confirmation messages and next steps

For detailed documentation, see: `.claude/commands/README.md`

### Workflow After Adding Content

1. Verify image exists in `portfolio-astro/public/images/`
2. Edit generated markdown file to fill in placeholder sections
3. Run `npm run dev` in `portfolio-astro/` to preview changes
4. Commit and push the new content file to git

These commands work with the **Astro site only** (`portfolio-astro/`), not the legacy HTML site (`index.html`).
