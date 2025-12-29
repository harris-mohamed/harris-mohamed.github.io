# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Harris Mohamed, built with **Astro** and hosted on GitHub Pages. The site showcases academic research, personal projects, industry experience, teaching experience, and relevant coursework.

## Technology Stack

- **Framework**: Astro v5.16.5 (static site generator)
- **UI Framework**: Bootstrap 5 with custom theming
- **Content Management**: Astro Content Collections (TypeScript-based)
- **Styling**: Custom CSS in `public/styles/global.css`
- **Icons**: Font Awesome 6
- **Package Manager**: npm

## File Structure

```
.
├── src/
│   ├── pages/
│   │   └── index.astro           # Main page with all sections
│   ├── components/
│   │   ├── Layout.astro          # Base layout with head/scripts
│   │   ├── ProjectCard.astro     # Card component for projects
│   │   ├── ResearchCard.astro    # Card component for research
│   │   ├── IndustryCard.astro    # Card component for industry experience
│   │   ├── TeachingCard.astro    # Card component for teaching experience
│   │   ├── CourseCard.astro      # Card component for courses
│   │   └── ProjectModal.astro    # Modal component for details
│   └── content/
│       ├── config.ts             # Content collection schemas
│       ├── projects/             # Project markdown files
│       ├── research/             # Research markdown files
│       ├── industry/             # Industry experience markdown files
│       ├── teaching/             # Teaching experience markdown files
│       └── courses/              # Course markdown files
├── public/
│   ├── images/                   # All images (projects, research, headshot, etc.)
│   ├── documents/                # PDF files (resume, etc.)
│   └── styles/
│       └── global.css            # Global CSS styles
├── .claude/
│   └── commands/                 # Custom Claude Code slash commands
├── astro.config.mjs              # Astro configuration
├── package.json                  # Node dependencies
├── tsconfig.json                 # TypeScript configuration
└── CLAUDE.md                     # This file
```

## Architecture

### Content Collections

The site uses Astro's Content Collections API to manage all portfolio content. Each collection is defined in `src/content/config.ts` with TypeScript schemas:

- **projects**: Personal technical projects (priority, status, tags, GitHub/video URLs)
- **research**: Academic research and conference presentations (date, topics, publication links)
- **industry**: Professional work experience (company, title, dates)
- **teaching**: Teaching assistant experiences (course, dates)
- **courses**: Relevant academic coursework (level: Graduate/Undergraduate)

All content is stored as Markdown files with YAML frontmatter.

### Page Sections

The main page (`src/pages/index.astro`) includes:

1. **Navigation**: Fixed top navbar with scroll-to-section links
2. **Masthead**: Hero section with headshot and bio
3. **About**: Personal introduction and social links
4. **Research**: Academic publications and conference presentations
5. **Projects**: Personal technical projects with status badges
6. **Industry**: Professional work experience
7. **Resume**: Embedded PDF viewer with download option
8. **Teaching**: Teaching assistant experiences
9. **Coursework**: Graduate and undergraduate courses (separate sections)
10. **Footer**: Social media links and copyright

### Component System

**Cards**: Each content type has a dedicated card component that displays in a responsive grid
**Modals**: Bootstrap 5 modals display full details when clicking "Click for details"
- Modals render markdown content from content collections
- Support for GitHub links, video links, and publication links
- Centered headers, left-justified paragraphs

### Styling

- Color theme: Mint/teal primary (`#1abc9c`), dark slate secondary (`#2c3e50`)
- Section padding: `3rem` top/bottom
- Responsive grid layout using Bootstrap columns
- Custom badge colors for project status (success, danger, dark)
- Modal text alignment: headers centered, paragraphs left-justified

## Development Workflow

### Local Development

```bash
# Install dependencies (first time only)
npm install

# Start dev server (with hot reload)
npm run dev
# Site runs at http://localhost:4321/

# Build for production
npm run build

# Preview production build
npm run preview
```

### Adding New Content

Use the custom Claude Code slash commands:

- `/add-research` - Create new research publication
- `/add-project` - Create new project
- `/add-industry` - Create new industry experience
- `/add-course` - Create new course

Or manually create markdown files in `src/content/{collection}/` following the schema in `src/content/config.ts`.

**After adding content:**
1. Ensure images exist in `public/images/`
2. Fill in markdown content sections
3. Preview with `npm run dev`
4. Commit and push changes

### Deployment

This site is hosted on **GitHub Pages**:

1. Commit changes to the repository
2. Push to the main branch
3. GitHub Pages will automatically build and deploy

Current git branches:
- Development branch: `dev/astro-claude-attempt`
- Main branch: `master`

## Common Tasks

**Update personal info**: Edit the About section in `src/pages/index.astro` (line 71-78)

**Add new project**: Use `/add-project` command or create file in `src/content/projects/`

**Add new research**: Use `/add-research` command or create file in `src/content/research/`

**Update styling**: Edit `public/styles/global.css`

**Change section spacing**: Modify `.page-section` padding in global.css (currently 3rem)

**Update resume**: Replace `public/documents/resume.pdf`

**Add images**: Place in `public/images/` and reference in markdown frontmatter

**Modify component layout**: Edit components in `src/components/`

## Important Notes

- **TypeScript**: Astro uses TypeScript for type-safe content schemas
- **No runtime JavaScript**: Astro generates static HTML (islands architecture not used here)
- **Content validation**: Frontmatter is validated against schemas in `config.ts`
- **Hot reloading**: Dev server automatically reloads on file changes
- **Image optimization**: Images are served as-is from `public/` (consider optimization)
- **Bootstrap 5**: Modern Bootstrap version with data-bs-* attributes
- **Font Awesome**: Icon library loaded via CDN

## Content Focus

Harris Mohamed's portfolio highlights:
- **Space Domain Awareness (SDA)**: RF data analysis, satellite tracking, EMI detection (Kratos Defense)
- **FPGA Development**: Real-time LIDAR classification (Sentinel/Sentinel Prime projects)
- **Computer Vision & AI/ML**: Research and personal projects
- **Hardware Acceleration**: CUDA, FPGA implementations
- **Embedded Systems**: IoT, vertical farming automation

## Custom Commands

See `.claude/commands/README.md` for detailed documentation on slash commands for content scaffolding.
