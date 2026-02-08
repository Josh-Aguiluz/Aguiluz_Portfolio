# Multi-Page Portfolio Website Guide

## Overview

Your portfolio has been successfully transformed from a single-page scroll layout into a professional multi-page application with React Router. The website maintains your unique "Retro Pop" aesthetic while adding technical elements perfect for a Backend Developer portfolio.

## Key Features

### 🎨 Design Elements

- **Retro Pop Aesthetic**: Cream, Sage, Blush, and Slate colors with chunky serif headings
- **Technical Touch**: Monospace fonts (Fira Code) for code snippets, tags, and technical elements
- **Dark Mode**: Full dark mode support with sophisticated navy color palette
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices

### 🚀 Pages

1. **Home Page** (`/`)
   - Hero section with large "BACKEND DEVELOPER" heading
   - Quick stats (15+ Projects, 6+ Certifications, Top 1%)
   - Animated marquee with monospace code comments
   - Featured project preview
   - CTAs to Projects and Contact

2. **About Page** (`/about`)
   - Professional bio and mission statement
   - Split layout with bio text and photo placeholder
   - Tech stack grid (Node.js, PHP, MySQL, Firebase, Flutter, Angular)
   - Soft skills display with pill tags
   - Graph paper background for engineering feel

3. **Projects Page** (`/projects`)
   - Project cards with monospace tech tags
   - Watermark numbers for visual interest
   - Links to GitHub and live demos
   - Development focus highlights (Backend, Full-Stack, Mobile)

4. **Resume Page** (`/resume`)
   - Timeline of education and work experience
   - 6+ professional certifications
   - Testimonials section
   - Recent blog post previews
   - Diagonal stripes background

5. **Contact Page** (`/contact`)
   - Contact information (email, location, status)
   - Interactive contact form with success state
   - "Available For" checklist
   - Dot matrix background for technical feel

6. **404 Page** (`*`)
   - Custom error page with brand consistency
   - Code snippet showing error message
   - Quick link back to home

### 🛠 Technical Features

- **React Router**: Client-side routing for smooth navigation
- **Page Transitions**: Smooth scroll-to-top on route changes
- **Scroll to Top Button**: Appears after scrolling down
- **Theme Toggle**: Dark/Light mode switcher (sticky button)
- **Sticky Navigation**: Fixed header with active page highlighting
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Monospace Elements**: Technical code tags and snippets throughout

## File Structure

```
/components/
  /pages/
    HomePage.tsx          - Landing page
    AboutPage.tsx         - About & Tech Stack
    ProjectsPage.tsx      - Portfolio showcase
    ResumePage.tsx        - Timeline, certs, testimonials, blog
    ContactPage.tsx       - Contact form & info
    NotFoundPage.tsx      - 404 error page
  RouterNavigation.tsx    - Main navigation with routing
  PageTransition.tsx      - Scroll behavior on route change
  ScrollToTop.tsx         - Scroll to top button
  ThemeToggle.tsx         - Dark/Light mode toggle

App.tsx                   - Main app with router setup
/styles/globals.css       - Global styles with monospace fonts
```

## Navigation System

The navigation automatically highlights the active page and works seamlessly with React Router:

- **Desktop**: Horizontal pill-shaped nav links
- **Mobile**: Hamburger menu with overlay
- **Active State**: Highlighted background on current page
- **Smooth Transitions**: No page reloads, instant navigation

## Customization Tips

### Adding New Pages

1. Create a new component in `/components/pages/`
2. Import and add route in `App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add link to `RouterNavigation.tsx` nav links array

### Changing Colors

All colors are defined in `/styles/globals.css`:
- Light mode: `--cream`, `--sage`, `--blush`, `--slate`, `--charcoal`
- Dark mode: Override values in `.dark` class

### Updating Content

Each page component is self-contained with all content inside. Simply edit the page component file to update text, stats, projects, etc.

### Adding Monospace Elements

Use these CSS classes for technical elements:
- `.mono-tag` - Tech skill tags with monospace font
- `.code-snippet` - Inline code snippets
- `font-mono` - Direct font-family utility class

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Fully responsive from 320px to 4K displays

## Performance

- No external API calls (fast load times)
- Optimized images (use ImageWithFallback component)
- Client-side routing (instant page transitions)
- Minimal JavaScript bundle

## Future Enhancements

Consider adding:
- Blog post individual pages
- Project detail pages with more screenshots
- Interactive tech stack visualization
- Resume download functionality
- Email integration for contact form
- Analytics tracking

## Your Brand Identity

**Josh Andrei Aguiluz**
- BS IT Student at Holy Angel University
- Top 1% Web Development Track
- Academic Scholar
- Focus: Backend & Full-Stack Development
- Location: Magalang, Pampanga
- Status: Seeking Internship Opportunities

## Contact Information

- Email: josh.dizon.aguiluz25@gmail.com
- GitHub: [Add your GitHub link to projects]
- LinkedIn: [Add to contact page]

---

**Built with passion and precision** 🚀

This portfolio combines professional design with technical credibility, making it perfect for internship applications and showcasing your backend development skills.
