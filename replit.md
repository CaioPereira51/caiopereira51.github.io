# Overview

This is a personal portfolio website for Caio Pereira, a Full Stack Developer. The portfolio showcases professional experience, skills, education, projects, and provides a contact form. It's built as a single-page application using modern web technologies with a focus on clean design and user experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Vue.js 3 with Composition API for reactive component development
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: PrimeVue component library providing pre-built, accessible UI elements
- **Styling**: Custom CSS with CSS variables for theming, PrimeFlex for utility classes, and PrimeIcons for iconography
- **Icon System**: Combination of PrimeIcons and Devicon for technology-specific icons

## Design System
- **Color Scheme**: Dark theme with three-color palette (60% dark blue primary, 30% light gray secondary, 10% vibrant blue accent)
- **Component Structure**: Modular sections including About, Skills, Experience, Education, Projects, and Contact
- **Responsive Design**: Mobile-first approach using PrimeFlex utility classes

## Development Configuration
- **Development Server**: Configured for host `0.0.0.0` on port 5000 for container compatibility
- **Build Output**: Static assets compiled to `dist` directory for easy deployment
- **Module System**: ES modules with Vite's fast HMR (Hot Module Replacement)

## Project Organization
- **Single-page Application**: All content sections rendered within one Vue application
- **Component-based**: Modular architecture allowing for easy maintenance and updates
- **Asset Management**: Static assets and icons loaded via CDN for performance optimization

# External Dependencies

## Core Dependencies
- **Vue.js 3**: Frontend framework for reactive user interfaces
- **PrimeVue**: Comprehensive UI component library with theming support
- **PrimeFlex**: CSS utility framework for responsive layouts
- **PrimeIcons**: Icon library integrated with PrimeVue components

## Development Tools
- **Vite**: Build tool and development server
- **@vitejs/plugin-vue**: Official Vite plugin for Vue.js single file components

## External Services
- **GitHub API**: Used to fetch and display repository information dynamically
- **Devicon CDN**: Provides technology-specific icons for skills section
- **PrimeVue Theme CDN**: Loads UI theme styles externally for performance

## Hosting & Deployment
- **GitHub Pages**: Static site hosting for the compiled application
- **Browser Compatibility**: Modern browsers supporting ES modules and Vue 3 features