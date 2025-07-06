# Madhav Garg Portfolio - React Version

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This project showcases Madhav Garg's skills, projects, and professional experience as a Full Stack Developer.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: Optimized CSS animations and transitions
- **Interactive Components**: Dynamic UI elements with hover effects and smooth scrolling
- **Contact Form**: Functional contact form with notification system
- **Project Showcase**: Beautiful project cards with live links and GitHub repositories
- **Tech Stack Display**: Organized technology skills and tools
- **Performance Optimized**: Fast loading times with optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Custom component library with Radix UI primitives
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── notification.jsx
│   │   └── tech-stack.jsx
│   ├── lib/
│   │   └── utils.js      # Utility functions
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎨 Customization

### Colors and Themes
The project uses CSS custom properties for easy theming. Main colors are defined in `src/index.css`:

```css
:root {
  --primary: 0 0% 98%;
  --secondary: 0 0% 14.9%;
  /* ... other color variables */
}
```

### Components
All UI components are located in `src/components/ui/` and can be easily customized or extended.

### Animations
Custom animations are defined in `src/index.css` and can be modified to match your preferences.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Optimized Images**: WebP format support
- **CSS Optimization**: Purged unused styles with Tailwind
- **Lazy Loading**: Components load as needed
- **Smooth Scrolling**: Optimized scroll behavior

## 📧 Contact

For any questions or suggestions, feel free to reach out:
- Email: madhavgarg3300@gmail.com
- GitHub: [MadhavGarg98](https://github.com/MadhavGarg98)
- LinkedIn: [Madhav Garg](https://www.linkedin.com/in/madhav-garg-b447b5324)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Madhav Garg
