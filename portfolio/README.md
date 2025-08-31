# Luxury Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring a sophisticated design with luxury white, black, and gold color scheme.

## 🎨 Design Features

- **Luxury Color Palette**: White, black, and gold accents
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Optimized for all devices
- **Modern UI**: Clean, professional layout
- **Custom Styling**: Tailwind CSS with luxury design system

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization Guide

### Personal Information

Update the following files with your personal information:

#### 1. Layout Metadata (`src/app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your custom description here",
  keywords: ["your", "keywords", "here"],
  authors: [{ name: "Your Name" }],
  // ... other metadata
};
```

#### 2. Navigation (`src/components/Navigation.tsx`)
```typescript
<div className="text-2xl font-bold text-black">
  Your Name
</div>
```

#### 3. Hero Section (`src/components/HeroSection.tsx`)
```typescript
<h1 className="text-6xl md:text-7xl font-bold text-black mb-6">
  Hi, I'm <span className="luxury-accent">Your Name</span>
</h1>
```

#### 4. Main Page Content (`src/app/page.tsx`)
- Update skills array with your expertise
- Replace project examples with your actual projects
- Update contact information
- Modify statistics in the About section

### Skills Section

Edit the `skills` array in `src/app/page.tsx`:

```typescript
const skills = [
  { 
    name: 'Your Skill', 
    icon: Code, // Import from lucide-react
    description: 'Your skill description' 
  },
  // Add more skills...
];
```

### Projects Section

Update the `projects` array in `src/app/page.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['Technology 1', 'Technology 2'],
    image: '/path-to-your-image.jpg',
    link: 'https://your-project-url.com'
  },
  // Add more projects...
];
```

### Contact Information

Update contact details in the Contact section:

```typescript
// In the contact section
<div className="flex items-center space-x-4">
  <Mail className="h-6 w-6 luxury-accent" />
  <span>your.email@example.com</span>
</div>
```

### Social Links

Update social media links in the contact section:

```typescript
<a href="https://github.com/yourusername" className="...">
  <Github className="h-6 w-6" />
</a>
<a href="https://linkedin.com/in/yourusername" className="...">
  <Linkedin className="h-6 w-6" />
</a>
```

## 🎨 Styling Customization

### Color Scheme

The luxury color scheme is defined in `src/app/globals.css`:

```css
:root {
  --luxury-white: #ffffff;
  --luxury-black: #0a0a0a;
  --luxury-gold: #d4af37;
  --luxury-gold-light: #f4e4a6;
  --luxury-gray: #f8f8f8;
  --luxury-dark-gray: #1a1a1a;
}
```

### Custom CSS Classes

The portfolio includes custom CSS classes for consistent styling:

- `.luxury-btn` - Button base styles
- `.luxury-btn-primary` - Primary button (black)
- `.luxury-btn-secondary` - Secondary button (outlined)
- `.luxury-btn-gold` - Gold accent button
- `.luxury-card` - Card component styles
- `.luxury-accent` - Gold accent color
- `.luxury-gradient` - Gradient backgrounds

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The built files will be in the `.next` directory.

## 📦 Dependencies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🎯 Features

- ✅ Responsive design
- ✅ Smooth scroll navigation
- ✅ Animated sections
- ✅ Contact form ready
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Accessibility friendly
- ✅ Modern animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using Next.js and luxury design principles**
