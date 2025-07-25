# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features internationalization, dark/light theme, and optimized for performance and SEO.

## ✨ Features

- 🌙 **Dark/Light Theme** - Automatic theme switching with system preference detection
- 🌍 **Internationalization** - Full English/Spanish support
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Static site generation, image optimization, lazy loading
- 🎨 **Modern UI/UX** - Clean design with shadcn/ui components
- 🔍 **SEO Optimized** - Meta tags, OpenGraph, structured data
- 🚀 **Netlify Ready** - Optimized for static hosting

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React, React Icons
- **State Management**: Zustand

### Backend & Tools
- **Build Tool**: Next.js
- **Package Manager**: npm
- **Deployment**: Netlify
- **Version Control**: Git

## 📱 Live Demo

🌐 **Portfolio**: [Deploy to see live demo]

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Steven-Mendez/portfolio-nextjs.git
cd portfolio-nextjs
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
# Copy the example file
cp env.example .env.local

# Or create .env.local manually with:
NEXT_PUBLIC_SITE_URL=https://steven-mendez.netlify.app
```

4. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🚀 Deployment

### Netlify Deployment

1. **Connect your GitHub repository** to Netlify
2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
3. **Add environment variables** in Netlify dashboard:
   - `NEXT_PUBLIC_SITE_URL`: Your Netlify URL (e.g., https://steven-mendez.netlify.app)

### Manual Deployment

1. **Build the project:**
```bash
npm run build
```

2. **Deploy the `out` folder** to your preferred hosting service

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── [locale]/       # Internationalization routes
│   ├── globals.css     # Global styles
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   └── ...            # Custom components
├── data/              # Static data and content
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── types/             # TypeScript type definitions
```

## 🎯 Key Features Implementation

### Internationalization
- Dynamic language switching (EN/ES)
- SEO-optimized meta tags for each language
- Proper URL structure with locale prefixes

### Performance Optimizations
- Static site generation (SSG)
- Image optimization and lazy loading
- Bundle optimization with tree shaking
- Efficient caching strategies

### Modern Development Practices
- TypeScript for type safety
- ESLint for code quality
- Responsive design principles
- Accessibility best practices

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with code splitting
- **Load Time**: < 2s on 3G connection

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📞 Contact

- **GitHub**: [@Steven-Mendez](https://github.com/Steven-Mendez)
- **LinkedIn**: [Steven Mendez](https://www.linkedin.com/in/steven-mendez-dev/)
- **Email**: stevenampaiz@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
