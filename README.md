# Job-Dreams
# Design Job Assistant

A modern, clean job application website built with SvelteKit. This single-page application guides users through a streamlined job application process with an intuitive interface and beautiful design.

## Features

- **Modern Homepage Design**: Clean, modern interface with soft color palette
- **Hero Section**: Prominent call-to-action with "Kostenlos Registrieren" (Register for Free) button
- **User Type Tabs**: Switch between "Arbeitnehmer" (Employee), "Arbeitgeber" (Employer), and "Temporärbüro" (Temporary Agency)
- **Three-Step Process**: Visual guide showing the job application process:
  1. Create your resume
  2. Create your resume (with document management)
  3. Apply with just one click
- **Responsive Design**: Fully responsive layout that works on all devices
- **Beautiful Illustrations**: Uses SVG illustrations from undraw.co

## Tech Stack

- **SvelteKit** - Full-stack framework for Svelte
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **LightningCSS** - Fast CSS processing with modern features
- **ESLint** - Code linting and formatting
- **Vercel Adapter** - Optimized for Vercel deployment

## Prerequisites

- Node.js 18+ and npm (or pnpm/yarn)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Job-Dreams
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run Svelte type checking in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint and fix issues

## Project Structure

```
design-sveltekit-app/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte    # Layout wrapper
│   │   └── +page.svelte      # Homepage
│   └── app.d.ts              # TypeScript definitions
├── static/
│   ├── undraw_agreement_aajr.svg
│   ├── undraw_personal_file_222m.svg
│   ├── undraw_Profile_data_re_v81r.svg
│   └── undraw_task_31wc.svg
├── package.json
├── svelte.config.js
└── tsconfig.json
```

## Deployment

This project is configured for deployment on Vercel. The adapter is already set up in `svelte.config.js`.

### Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Vercel will automatically detect SvelteKit and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Styling

The project uses:
- **LightningCSS** for fast CSS processing
- **CSS Nesting** (draft feature) for cleaner styles
- **Custom Media Queries** for responsive design
- Modern CSS features with automatic vendor prefixing

## Browser Support

The project targets browsers with `>= 1%, not dead` market share, automatically handled by LightningCSS and browserslist.

## License

Private project - All rights reserved

## Contributing

This is a private project. Contributions are not currently accepted.

