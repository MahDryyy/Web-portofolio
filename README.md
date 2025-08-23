# 🚀 Mahdi Jamaludin - Portfolio Website

Portfolio website modern yang dibangun dengan Next.js dan Tailwind CSS, menampilkan skill, project, dan pengalaman sebagai Full Stack Developer.

[![Portfolio Preview](https://img.shields.io/badge/Next.js-13-black?style=for-the-badge&logo=next.js)](https://github.com/MahDryyy/Web-portofolio)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 🌐 Live Demo

**Portfolio Website**: [https://mahdijamaludin.vercel.app](https://mahdijamaludin.vercel.app)

## 📋 Table of Contents

- [✨ Fitur Utama](#-fitur-utama)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Installation & Setup](#-installation--setup)
- [📁 Project Structure](#-project-structure)
- [🎯 Sections Overview](#-sections-overview)
- [🎨 Customization](#-customization)
- [📱 Responsive Design](#-responsive-design)
- [🚀 Deployment](#-deployment)
- [🔧 Performance Optimization](#-performance-optimization)
- [📊 SEO Features](#-seo-features)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)

## ✨ Fitur Utama

- 🎨 **Modern Design**: Glassmorphism dan gradient effects
- 📱 **Responsive**: Optimized untuk semua device
- 🎭 **Animations**: AOS (Animate On Scroll) dan GSAP
- 🌊 **Interactive Background**: Particles.js dan Vanta.js effects
- 🎯 **Smooth Scrolling**: GSAP ScrollTrigger animations
- 🎪 **Card Stack**: Interactive project showcase dengan 3D effects

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework dengan App Router
- **TypeScript** - Type safety dan better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library yang comprehensive

### Animations & Effects
- **GSAP** - Professional-grade animations
- **AOS** - Animate On Scroll library
- **Vanta.js** - Animated background effects
- **Particles.js** - Interactive particle systems

### Styling & UI
- **Glassmorphism** - Modern glass-like effects
- **Gradient Text** - Beautiful text styling
- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Elegant dark color scheme

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Clone Repository
```bash
git clone https://github.com/MahDryyy/Web-portofolio.git
cd Web-portofolio
```

### Install Dependencies
```bash
npm install
# atau
yarn install
```

### Environment Variables
Buat file `.env.local` di root directory:
```env
NEXT_PUBLIC_SITE_URL=https://mahdijamaludin.vercel.app
```

### Run Development Server
```bash
npm run dev
# atau
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Project Structure

```
Web-portofolio/
├── app/
│   ├── component/
│   │   ├── header.tsx          # Hero section dengan skills
│   │   ├── cardstack.tsx       # Project showcase dengan animations
│   │   └── footer.tsx          # Contact & social media
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout dengan SEO
│   └── page.tsx                # Main page
├── public/                     # Static assets
│   ├── images/                 # Project images
│   └── icons/                  # Favicon & icons
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎯 Sections Overview

### 1. **Header Section**
- Personal branding dengan foto profil
- Skills icons (React, Next.js, Golang, Laravel, TypeScript, Tailwind, GitHub)
- Background image dengan blur effect
- AOS animations

### 2. **Projects Section**
- **3D Portfolio with Three.js**: Website interaktif dengan Three.js
- **Anonymous Chat**: Real-time chat app dengan WebSocket
- **SaveBite**: Food waste management app dengan AI
- GSAP ScrollTrigger animations
- Card stack dengan 3D rotation effects

### 3. **Skills & Education**
- Skills showcase dengan hover effects
- Education details (Binus University Malang)
- Interactive skill cards dengan glassmorphism

### 4. **Footer Section**
- Contact information (Email, WhatsApp, Location)
- Social media links (GitHub, LinkedIn, Instagram)
- Professional contact details

## 🎨 Customization

### Colors & Theme
Update warna di `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a1a2e',
      secondary: '#3b82f6',
      accent: '#00d1b2',
    }
  }
}
```

### Content Updates
- **Header**: Update skills dan personal info di `header.tsx`
- **Projects**: Tambah/edit project di `cardstack.tsx`
- **Skills**: Update skill icons di skills section
- **Contact**: Update contact info di `footer.tsx`

### Images
- Ganti foto profil di `public/mahdi.png`
- Update project images di `public/` folder
- Optimize images untuk web (compress, proper formats)

## 📱 Responsive Design

Website sudah dioptimasi untuk:
- 📱 **Mobile**: 320px - 768px
- 💻 **Tablet**: 768px - 1024px  
- 🖥️ **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist folder ke Netlify
```

### Manual Hosting
```bash
npm run build
npm run start
```

## 🔧 Performance Optimization

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic dengan Next.js
- **Lazy Loading**: Components dan images
- **Bundle Analysis**: `npm run analyze`

## 📊 SEO Features

- **Meta Tags**: Complete Open Graph dan Twitter Cards
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine guidance
- **Performance**: Core Web Vitals optimization

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

**Mahdi Jamaludin** - [mahdi.jamaludin@binus.ac.id](mailto:mahdi.jamaludin@binus.ac.id)

**Portfolio Link**: [https://mahdijamaludin.vercel.app](https://mahdijamaludin.vercel.app)

**LinkedIn**: [Mahdi Jamaludin](https://www.linkedin.com/in/mahdi-jamaludin-755239380/)

**GitHub**: [@MahDryyy](https://github.com/MahDryyy)

---

⭐ **Star repository ini jika bermanfaat!**

Made with ❤️ using Next.js & Tailwind CSS
