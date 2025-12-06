# Vue 3 Portfolio with Element Plus

This is a Vue 3 portfolio implementation that mirrors the design and functionality of the Next.js portfolio.

## Features
- Vue 3 with Composition API
- Element Plus for UI components
- Responsive design
- Dark/light mode toggle
- Smooth animations
- Project showcase with filtering
- Skills visualization
- Experience timeline
- Contact form with validation
- GitHub integration

## Project Structure
```
src/
├── assets/           # Static assets
├── components/       # Reusable components
│   ├── layout/       # Layout components (Header, Footer)
│   ├── sections/     # Page sections (Hero, Projects, etc.)
│   └── ui/           # UI components (Button, Card, etc.)
├── composables/      # Vue composables (useTheme, useGitHub)
├── views/            # Page views
├── router/           # Vue Router configuration
├── stores/           # Pinia stores
├── utils/            # Utility functions
├── constants/        # Application constants
└── App.vue           # Root component
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```