# Priyanka Singh Sengar - Portfolio Website

A modern, responsive portfolio website built with **Next.js 14** showcasing the work and skills of Priyanka Singh Sengar, a Computer Science student at Maharana Pratap Engineering College.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript/React
- **Styling:** CSS (Custom styles with CSS Variables)
- **Animations:** AOS (Animate On Scroll), Typed.js
- **Icons:** Font Awesome
- **Fonts:** Google Fonts (Poppins)
- **Image Optimization:** Next.js Image component

## ✨ Features

- ⚡ Fast and optimized with Next.js 14
- 📱 Fully responsive design for all devices
- 🎨 Modern UI with smooth animations
- 🌙 Dark theme with cyan accent colors
- 📊 Interactive skill bars with animation
- 💼 Project showcase with detailed cards
- 📧 Contact form with email integration
- ♿ Accessible (ARIA labels, semantic HTML)
- 🔝 Smooth scroll and scroll-to-top button

## 📂 Project Structure

```
priyanka-portfolio/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Header.js          # Navigation bar
│   ├── Hero.js            # Hero section with profile
│   ├── About.js           # About section
│   ├── Skills.js          # Skills showcase
│   ├── Projects.js        # Projects grid
│   ├── Education.js       # Education timeline
│   ├── Contact.js         # Contact form
│   ├── Footer.js          # Footer
│   └── ScrollToTop.js     # Scroll to top button
├── public/
│   └── [images]           # All static images
├── package.json
├── next.config.js
└── README.md
```

## 🛠️ Installation

1. **Clone the repository:**
```bash
git clone https://github.com/priyanka8-sys/Priyanka-portfolio.git
cd Priyanka-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Sections

1. **Hero Section** - Introduction with animated typing effect
2. **About** - Brief introduction and statistics
3. **Skills** - Technology stack with visual progress bars
4. **Projects** - Portfolio of completed projects
5. **Education** - Academic background and achievements
6. **Contact** - Get in touch form and contact information

## 🔧 Configuration

### Metadata (SEO)
Edit the metadata in `app/layout.js`:
```javascript
export const metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... other metadata
}
```

### Styling
- Global styles: `app/globals.css`
- CSS Variables are defined in `:root` for easy theme customization

### Images
Place all images in the `public/` directory. They can be referenced as `/image-name.jpg` in components.

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy on Netlify

1. Push your code to GitHub
2. Import project on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Priyanka Singh Sengar**

- GitHub: [@priyanka8-sys](https://github.com/priyanka8-sys)
- LinkedIn: [priyanka-singh-sengar](https://www.linkedin.com/in/priyanka-singh-sengar)
- Email: priyankasingh03122004@gmail.com

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for Poppins font
- AOS for scroll animations
- Typed.js for typing animations

---

Made with ❤️ by Priyanka Singh Sengar
