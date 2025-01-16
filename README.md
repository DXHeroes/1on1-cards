# 1:1 Meeting Questions App

A web application to help facilitate meaningful 1:1 meetings with structured questions and topics.

## Features

- Multiple topics for discussion:
  - Feedback & Skill Development
  - Wellbeing & Burnout Prevention
  - Self-Reflection & Personal Growth
  - Goals Setting & Prioritization
  - Company Culture & Values
  - Motivation & Purpose
  - Leadership Feedback
  - Communication & Conflict Resolution
- Three difficulty levels:
  - Surface Level Questions
  - Medium Depth Questions
  - Deep Questions (Call to Action)
- Mobile-first responsive design
- Clean and modern UI with Tailwind CSS
- Static site generation for fast loading
- DX Heroes branding with SVG logo integration

## Development

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create a production build:

```bash
pnpm build
```

This will create a static export in the `out` directory, ready for deployment to GitHub Pages or any other static hosting.

## Deployment

The app is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process:
1. Builds the app as static files
2. Creates a `.nojekyll` file to bypass GitHub Pages processing
3. Sets correct asset paths for GitHub Pages hosting
4. Deploys to the gh-pages branch

To deploy manually:

1. Build the project:
```bash
pnpm build
```

2. The static files will be in the `out` directory
3. These files can be served from any static hosting service

## Technologies Used

- Next.js 15.1
- React 19
- Tailwind CSS 3.4
- TypeScript 5
- Fonts:
  - Staatliches for headings
  - Inter for body text
- SVG Components for vector graphics
