# Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations and a clean design.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multiple Sections**: Home, About, Skills, Projects, and Contact
- **Interactive Elements**: Hover effects, smooth scrolling, and transitions
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery
- **Skills Display**: Animated skill bars and categories

## Sections

1. **Home**: Hero section with introduction and call-to-action
2. **About**: Personal information, stats, and interests
3. **Skills**: Technical skills with progress bars and categories
4. **Projects**: Portfolio showcase with filtering options
5. **Contact**: Contact information and message form

## Technologies Used

- React 18
- React Router DOM
- Framer Motion (animations)
- React Icons
- CSS3 (styling)
- HTML5

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Home Section** (`src/components/Home.jsx`):
   - Change name, title, and description
   - Update social media links
   - Add your photo

2. **About Section** (`src/components/About.jsx`):
   - Update personal description
   - Modify stats and interests
   - Add your about photo

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update skill categories and levels
   - Add or remove technologies

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your actual projects
   - Update project descriptions and links
   - Add project images

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Modify social media links

### Styling

- Main styles: `src/App.css`
- Component-specific styles: `src/components/[Component].css`
- Global styles: `src/index.css`

### Colors and Theme

The website uses a consistent color scheme:
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Text: `#1a202c` (Dark)
- Background: `#f8fafc` (Light Gray)

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure redirects for React Router

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push to main branch

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Deploy: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, feel free to reach out!

---

**Happy Coding! 🚀**
