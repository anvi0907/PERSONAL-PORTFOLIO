# Web Design Assignment — Project Report

**Project Title:** Anvi's Personal Portfolio Website  
**Student Name:** Anvi  
**Subject:** Interactive Web Design using HTML, CSS, JavaScript & jQuery  

---

## Objective

To design and develop an attractive, responsive, and interactive personal portfolio website using HTML5, CSS3, JavaScript, and jQuery — demonstrating creativity, smooth animations, and rich user interaction.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, animations, responsive layout |
| JavaScript (Vanilla) | Logic, form validation, dynamic features |
| jQuery 3.7.1 | DOM manipulation, effects, event handling |
| AOS Library 2.3.4 | Animate-on-Scroll effects |
| Google Fonts | Playfair Display + DM Sans typography |

---

## Website Theme

**Personal Portfolio** — showcasing skills, real deployed projects, and contact information.

---

## Features Implemented

### ✅ HTML Requirements
- Proper HTML5 structure with semantic tags (`header`, `nav`, `section`, `footer`)
- Navigation Bar with logo and links
- Hero/Banner Section with profile photo and CTA buttons
- 3 Content Sections: About, Skills, Projects
- Contact Form with labels and validation
- Footer with navigation links and credits

### ✅ CSS Requirements
- Fully responsive design (desktop, tablet, mobile)
- Attractive color scheme with CSS variables (light & dark modes)
- Custom animated buttons with hover ripple effects
- Hover effects on all interactive elements
- Professional typography using Playfair Display + DM Sans
- Mobile-friendly layout with hamburger menu

### ✅ JavaScript Features (7 implemented)
1. **Form Validation** — Real-time and submit-time validation with error messages
2. **Dark/Light Mode Toggle** — Persists to localStorage across sessions
3. **Dynamic Greeting Message** — Changes based on current time of day
4. **Scroll-to-Top Button** — Appears after scrolling 400px
5. **Digital Clock** — Live clock displayed in the navbar
6. **Character Counter** — Real-time character count for the message textarea
7. **Typing Text Animation** — Hero section types and deletes role titles

### ✅ jQuery Features (5 implemented)
1. **Fade In / Fade Out Effects** — Popup modal uses jQuery `.fadeIn()` / `.fadeOut()`
2. **Slide Up / Slide Down Effects** — Accordion uses `.slideDown()` and `.slideUp()`
3. **Hide/Show Content** — "Read More" button toggles extra bio content
4. **Accordion Menu** — Skills section with animated open/close accordion
5. **Animated Counters** — Stats count up with jQuery `.animate()`
6. **Smooth Scrolling Navigation** — All nav links use jQuery `.animate()` scroll
7. **Popup Message** — Form submit triggers fade-in popup

### ✅ Animations & Creativity
- CSS keyframe animations: preloader letters bounce, hero photo floats, hero shapes float, scroll wheel, pulse badge
- AOS (Animate on Scroll) library for section reveals (Bonus)
- Animated card hover: `translateY(-8px)` with box shadow
- Animated buttons with pseudo-element sliding effect
- Preloader with animated loading bar
- CSS gradient meshes and floating background shapes

### ✅ Bonus Features
- **AOS (Animate on Scroll)** — Used throughout all sections
- **Typing Text Animation** — Hero section types and deletes role titles
- **Theme Switcher** — Full dark/light mode with localStorage persistence

---

## Real Deployed Projects

### 1. AI-Based Timetable Generator
- **GitHub:** https://github.com/anvi0907/AI-Based-Timetable-Generator
- **Description:** An AI-driven system that automatically generates conflict-free timetables, minimising manual effort and optimising resource allocation.
- **Technologies:** Python, AI/ML Algorithms

### 2. Number Mastermind Game
- **GitHub:** https://github.com/anvi0907/Number-Mastermind-game
- **Live Demo:** https://hilarious-bombolone-df3fd1.netlify.app/
- **Description:** An interactive browser-based number guessing game where players identify a 4-digit secret number within 10 attempts using logic and strategy.
- **Technologies:** HTML5, CSS3, JavaScript, Python (Tkinter)

---

## Project Structure

```
ANVI_WEBASSIGNMENT/
├── index.html         ← Main HTML file
├── css/
│   └── style.css      ← All styles, animations, responsive design
├── js/
│   └── main.js        ← All JavaScript & jQuery logic
├── images/
│   └── profile.jpeg   ← Profile photo
└── report.md          ← This documentation
```

---

## Screenshots

Screenshots can be taken from the live website by opening `index.html` in a modern browser. Key sections include:
- Hero section with profile photo and typing animation
- About section with animated counters
- Skills section with accordion menu
- Projects section with real deployed projects and GitHub/live links
- Contact form with validation
- Dark/light mode toggle

---

## Conclusion

This project successfully demonstrates the integration of HTML5, CSS3, JavaScript, and jQuery to build a modern, interactive, and visually appealing personal portfolio website. The website features a pre-loader, animated hero section with real profile photo, accordion skills menu, animated counters, form validation with real-time feedback, dark/light mode toggle, smooth scrolling, popup modals, scroll-to-top button, digital clock, typing animation, and AOS-based scroll animations. The projects section showcases real deployed work with links to GitHub and live demos. The design is fully responsive and works across desktop, tablet, and mobile devices.

---

*Submitted by: Anvi*
