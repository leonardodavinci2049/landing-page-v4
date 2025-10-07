<div align="center">
  
# 🚀 Corporate Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**A modern, high-performance landing page for web development services**

[Demo](#-demo) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Deployment](#-deployment)

</div>

---

## 📋 Overview

A professional, fully-responsive corporate landing page built with **Next.js 15** and **TypeScript**, designed to showcase web development services, digital solutions, and AI-powered automation offerings. This project emphasizes modern web standards, performance optimization, and exceptional user experience.

### 🎯 Target Audience

- **Web Development Agencies** seeking a modern online presence
- **Tech Startups** showcasing digital services
- **Freelance Developers** building professional portfolios
- **Digital Service Providers** offering custom solutions

### 💡 Project Purpose

Create a conversion-optimized landing page that effectively communicates service offerings, builds trust through testimonials and portfolios, and drives user engagement through clear CTAs and intuitive navigation.

---

## 🎬 Demo

### 🖼️ Preview

> **Note:** Add your deployed application screenshot here
>
> ```markdown
> ![Landing Page Preview](./public/preview.png)
> ```

### 🌐 Live Demo

- **Production:** [Your Deployment URL]
- **Development:** `http://localhost:3000`

---

## ✨ Features

### 🎨 Design & User Experience

- ✅ **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **Dark/Light Theme** - User preference with persistent storage
- ✅ **Modern UI Components** - Built with Radix UI and shadcn/ui
- ✅ **Smooth Animations** - Enhanced with Embla Carousel and custom animations
- ✅ **Accessible Interface** - WCAG 2.1 compliant components

### 📦 Core Sections

- ✅ **Hero Slider** - Dynamic carousel showcasing key offerings
- ✅ **Services Section** - Comprehensive service catalog with AI-powered features
- ✅ **About Section** - Company introduction and value proposition
- ✅ **Process Section** - Step-by-step workflow visualization
- ✅ **Portfolio Section** - Project showcase with case studies
- ✅ **Tech Stack Display** - Technologies and tools overview
- ✅ **Testimonials** - Client feedback and social proof
- ✅ **Pricing Plans** - Transparent pricing structure
- ✅ **FAQ Section** - Common questions with accordion interface
- ✅ **Contact Form** - Lead generation with form validation

### ⚡ Technical Features

- ✅ **Server-Side Rendering (SSR)** - Optimized for SEO and performance
- ✅ **Type Safety** - Full TypeScript implementation
- ✅ **Form Validation** - Zod schema validation
- ✅ **Toast Notifications** - User feedback with Sonner
- ✅ **Path Aliases** - Clean imports with `@/` prefix
- ✅ **Code Quality** - ESLint and Prettier configured
- ✅ **Turbopack** - Next.js Turbopack for faster development

---

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 15.5.4](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - UI library with latest features
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI

- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Form & Validation

- **[Zod 4.1.12](https://zod.dev/)** - TypeScript-first schema validation

### Animations & Interactions

- **[Embla Carousel](https://www.embla-carousel.com/)** - Lightweight carousel library
- **[class-variance-authority](https://cva.style/)** - CVA for component variants
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Additional animations

### Utilities

- **[clsx](https://github.com/lukeed/clsx)** - Conditional class names
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Turbopack](https://turbo.build/pack)** - Fast bundler

---

## 📁 Project Structure

```
landing-page-v4/
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── privacy-policy/   # Privacy policy page
│   │   └── terms-of-service/ # Terms of service page
│   ├── components/
│   │   ├── layout/           # Layout components
│   │   │   ├── header.tsx   # Navigation header
│   │   │   └── footer.tsx   # Footer section
│   │   ├── sections/         # Page sections
│   │   │   ├── hero-slider.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── process-section.tsx
│   │   │   ├── portfolio-section.tsx
│   │   │   ├── tech-stack-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   ├── pricing-section.tsx
│   │   │   ├── faq-section.tsx
│   │   │   └── contact-section.tsx
│   │   ├── theme/            # Theme components
│   │   │   ├── theme-provider.tsx
│   │   │   └── mode-toggle.tsx
│   │   └── ui/               # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── accordion.tsx
│   │       └── ...
│   └── lib/                  # Utility functions
│       ├── utils.ts          # Helper functions
│       └── env.ts            # Environment configuration
├── components.json           # shadcn/ui configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm** 9.x or higher (or **yarn** / **pnpm**)
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/leonardodavinci2049/landing-page-v4.git
cd landing-page-v4
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup** (Optional)

Create a `.env.local` file in the root directory for environment variables:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=https://api.example.com
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/leonardodavinci2049/landing-page-v4)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Configure environment variables (if any)
4. Deploy!

### Deploy to Other Platforms

#### **Netlify**

```bash
npm run build
# Deploy the `.next` folder
```

#### **Docker**

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### **VPS with Nginx**

1. Build the application:

```bash
npm run build
```

2. Configure Nginx as reverse proxy:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

3. Use PM2 for process management:

```bash
npm install -g pm2
pm2 start npm --name "landing-page" -- start
pm2 startup
pm2 save
```

---

## 📝 Best Practices & Code Standards

### Code Style

- ✅ **TypeScript** - Strict mode enabled
- ✅ **ESLint** - Next.js recommended rules
- ✅ **Prettier** - Consistent code formatting with Tailwind plugin
- ✅ **Component Structure** - Modular and reusable components
- ✅ **Path Aliases** - Use `@/` for clean imports

### Performance Optimization

- ✅ **Image Optimization** - Next.js Image component
- ✅ **Code Splitting** - Automatic with Next.js
- ✅ **Font Optimization** - next/font for web fonts
- ✅ **Lazy Loading** - Dynamic imports where applicable
- ✅ **Server Components** - Leveraging React Server Components

### Accessibility

- ✅ **Semantic HTML** - Proper element usage
- ✅ **ARIA Labels** - Screen reader support
- ✅ **Keyboard Navigation** - Full keyboard accessibility
- ✅ **Color Contrast** - WCAG AA compliant

### Git Workflow

```bash
# Feature branch
git checkout -b feature/new-feature

# Commit with conventional commits
git commit -m "feat: add new component"

# Push and create PR
git push origin feature/new-feature
```

### Commit Conventions

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/changes
- `chore:` - Build process or auxiliary tool changes

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

See the [LICENSE](LICENSE) file for more details.

---

## 👤 Author & Contact

**Developer Information**

- 📧 Email: [your.email@example.com](mailto:your.email@example.com)
- 🌐 Portfolio: [yourportfolio.com](https://yourportfolio.com)
- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@leonardodavinci2049](https://github.com/leonardodavinci2049)

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) - Amazing React framework
- [Vercel](https://vercel.com/) - Hosting and deployment platform
- [shadcn](https://twitter.com/shadcn) - Beautiful UI components
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ and ☕

</div>
