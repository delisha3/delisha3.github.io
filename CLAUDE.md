# CLAUDE.md - AI Assistant Guide for delisha3.github.io

## Project Overview

This is a **GitHub Pages website** for an osu! beatmap commission service. The site showcases mapping work, provides pricing information, and offers contact options for potential clients.

**Live URL**: https://delisha3.github.io/
**Tech Stack**: Pure HTML, CSS, and vanilla JavaScript (no frameworks/dependencies)
**Deployment**: Automatic via GitHub Pages (deploys from the repository root)

---

## Repository Structure

```
delisha3.github.io/
├── index.html                    # Main HTML structure
├── style.css                     # All styling and animations
├── script.js                     # Interactive functionality
├── README.md                     # Project description
├── delisha3.github.io.code-workspace  # VS Code workspace settings
├── CLAUDE.md                     # This file - AI assistant guide
└── assets/
    ├── img/                      # Image assets
    │   ├── header.png            # Hero section header image
    │   ├── nonbreath.jpg         # Map preview thumbnail
    │   ├── dorchadas.jpg         # Map preview thumbnail
    │   ├── soiree.jpg            # Map preview thumbnail
    │   ├── hachigatsu.jpg        # Map preview thumbnail
    │   └── hades.jpg             # Map preview thumbnail
    └── vid/                      # Video assets
        ├── nonbreath.mp4         # Map preview video
        ├── dorchadas.mp4         # Map preview video
        ├── soiree.mp4            # Map preview video
        ├── hachigatsu.mp4        # Map preview video
        └── hades.mp4             # Map preview video
```

---

## Code Architecture

### HTML Structure (`index.html`)

The page uses a **card-based layout** with the following main sections:

1. **Hero Section** (`.hero-section`)
   - Full-width header with commission branding
   - Contains header image from `assets/img/header.png`

2. **Profile Section** (`.profile-section`)
   - About the mapper with avatar
   - Avatar sourced from osu! API: `https://a.ppy.sh/1603923`
   - Stats highlights (40+ ranked maps, 6+ years OWC experience)

3. **Showcase Section** (`.showcase-section`)
   - Grid of map preview thumbnails
   - Each item has `data-video` attribute linking to preview video
   - Hover interaction triggers video popup (see JavaScript section)

4. **Products Section** (`.products-section`)
   - Three pricing tiers based on map length:
     - Short length (<1:30): $10+
     - Middle length (1:30-5:00): $15+
     - Marathon length (>5:00): $50+
   - Contact buttons with copy-to-clipboard functionality

### CSS Styling (`style.css`)

**Design Theme**: Light, modern card-based layout with teal accents

**Key Design Patterns**:
- **Color Palette**:
  - Background: `#f8f5f2` (light beige)
  - Card background: `#fffffe` (white)
  - Primary accent: `#078080` (teal)
  - Text: `#232323` (dark gray)

- **Card System**:
  - All sections use `.card` class
  - Floating effect with shadow on hover
  - Border-radius: 20px for soft edges
  - Smooth transitions (0.3s ease)

- **Layout**:
  - CSS Grid for responsive layout
  - `grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))`
  - 20px gap between cards
  - Max-width: 1400px centered container

- **Animations**:
  - `fadeInUp` keyframe animation on cards
  - Staggered animation delays (0.1s increments)
  - Hover transforms: `translateY(-5px)` for lift effect
  - Gradient overlays on product cards

- **Mobile Responsive** (max-width: 768px):
  - Single column layout
  - Reduced padding and gaps
  - Adjusted font sizes

### JavaScript Functionality (`script.js`)

**Core Features**:

1. **Video Popup System** (lines 1-66)
   - Global popup follows cursor on showcase item hover
   - Uses `requestAnimationFrame` for smooth positioning
   - Intelligent viewport boundary detection
   - Auto-plays video on hover, pauses on mouse leave
   - Fixed size: 640x360px with viewport constraints

2. **Copy to Clipboard** (lines 68-145)
   - Copies Discord username "delisha" on button click
   - Uses fallback `document.execCommand('copy')` method
   - Shows success popup notification
   - Popup auto-hides on mouse leave from button
   - Positioned relative to button with fade animation

**Event Listeners**:
- `mouseenter`: Show video popup, play video
- `mousemove`: Update popup position
- `mouseleave`: Hide popup, stop video
- Button `onclick`: Copy username to clipboard

---

## Development Workflow

### Git Conventions

**Commit Style**: Simple, descriptive messages (lowercase, brief)
- Examples from history: "theme update", "sorted files", "added videos", "fixed length"
- Focus on what changed rather than why

**Branch Structure**:
- Development happens on feature branches
- Branch naming: `claude/claude-md-*` for AI-assisted work
- No main/master branch workflow visible (direct commits)

### Deployment

**Automatic Deployment**: Changes pushed to the repository automatically deploy via GitHub Pages

**Testing Locally**:
- Use VS Code Live Server extension (configured in workspace settings)
- Or use any local web server: `python -m http.server 8000`
- No build process required - pure static files

---

## Common Tasks for AI Assistants

### Adding New Map Previews

1. **Add assets**:
   - Place thumbnail in `assets/img/[mapname].jpg`
   - Place video in `assets/vid/[mapname].mp4`

2. **Update HTML** (`index.html` lines 42-62):
   ```html
   <div class="showcase-item gallery-item showcase-3d-item" data-video="assets/vid/[mapname].mp4">
       <img src="assets/img/[mapname].jpg" alt="Map Example" class="showcase-image">
   </div>
   ```

3. **No JavaScript changes needed** - event listeners attach automatically

### Modifying Pricing

Update the products section in `index.html` (lines 65-95):
- Edit `<h3>` for tier name
- Edit `<p>` for description
- Edit `.product-price` div for price

### Changing Color Scheme

Primary colors are defined in `style.css`:
- Background: line 11 (`#f8f5f2`)
- Card background: line 26 (`#fffffe`)
- Accent color: Throughout (search for `#078080`)
- Text colors: lines 84, 92, 226, etc.

**Find/replace approach**:
- Use global find/replace for color codes
- Test all sections for contrast/readability

### Adding New Sections

1. Create new section with `.card` class in HTML
2. Use existing section classes as templates
3. Grid column span: `grid-column: 1 / -1` for full width, `span 1` for single, `span 2` for double
4. Follow existing padding/margin patterns (30px padding standard)

---

## Design Conventions

### Class Naming

**Pattern**: BEM-influenced but not strict
- Section classes: `.hero-section`, `.profile-section`, `.showcase-section`, `.products-section`
- Modifier classes: `.hero-card`, `.profile-card`, `.showcase-card`, `.products-card`
- Element classes: `.profile-avatar`, `.showcase-item`, `.product-grid`

### Responsive Design

**Mobile-first approach**: Base styles work on all screens, media queries adjust for desktop
- Breakpoint: 768px
- Mobile: Single column, full-width cards
- Desktop: Multi-column grid layout

### Animation Philosophy

- **Subtle and smooth**: 0.3s ease transitions
- **Performance**: Use `transform` and `opacity` (GPU-accelerated)
- **Progressive enhancement**: Core functionality works without animations

---

## Important Notes for AI Assistants

### What NOT to Change

1. **Asset URLs**: The osu! avatar URL (`https://a.ppy.sh/1603923`) is dynamic and should not be replaced with static images
2. **Video popup implementation**: The global popup system is carefully optimized with `requestAnimationFrame` - avoid refactoring without good reason
3. **Discord username**: "delisha" is hardcoded in the copy function - only change if explicitly requested

### Security Considerations

- No user input handling - static content only
- External image from trusted source (osu! CDN)
- No API calls or form submissions
- Copy-to-clipboard uses legacy `execCommand` (widely supported fallback)

### Performance Considerations

- **Video files**: MP4 format, ensure reasonable file sizes (<10MB each)
- **Images**: JPG format for photos, PNG for graphics with transparency
- **No lazy loading**: All content loads immediately (acceptable for single-page site)
- **CSS animations**: Hardware-accelerated transforms only

### Accessibility Notes

**Current Limitations**:
- No alt text on profile avatar
- Videos autoplay on hover (no user control)
- Button uses `onclick` inline handler instead of event listener
- No ARIA labels on interactive elements

**If improving accessibility**:
- Add proper alt text to all images
- Add ARIA labels to buttons and interactive elements
- Consider keyboard navigation for video showcase
- Add focus states to interactive elements

### Browser Compatibility

**Target**: Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses: CSS Grid, Flexbox, `requestAnimationFrame`, `execCommand`
- No polyfills or fallbacks for older browsers
- Mobile Safari and Chrome tested (responsive design)

---

## Future Enhancement Ideas

If requested by the user, consider:

1. **Contact Form**: Add email integration (requires backend or service like Formspree)
2. **Gallery Modal**: Full-screen video player instead of hover preview
3. **Testimonials Section**: Client reviews/feedback
4. **Portfolio Filter**: Filter maps by style, difficulty, or year
5. **Dark Mode Toggle**: User preference for light/dark theme
6. **Analytics**: Track page views and user interactions
7. **SEO Optimization**: Meta tags, Open Graph, structured data
8. **Loading States**: Skeleton screens or spinners for assets
9. **Internationalization**: Support for multiple languages

---

## Quick Reference

### File Locations
- Main structure: `index.html` (109 lines)
- All styles: `style.css` (389 lines)
- All scripts: `script.js` (145 lines)
- Assets: `assets/img/` and `assets/vid/`

### Key Code Sections
- Video popup logic: `script.js:1-66`
- Copy to clipboard: `script.js:68-145`
- Card hover effects: `style.css:35-38`
- Mobile responsive: `style.css:345-368`
- Color definitions: Throughout `style.css` (search for `#078080`, `#fffffe`, `#f8f5f2`)

### External Dependencies
- None! Pure vanilla HTML/CSS/JS
- Only external resource: osu! avatar image

### Development Environment
- VS Code with Live Server extension recommended
- No build tools or package managers
- No linters or formatters configured

---

## Testing Checklist

When making changes, verify:

- [ ] All cards display correctly on desktop (1400px+)
- [ ] Mobile layout works (768px and below)
- [ ] Video popups appear on hover and follow cursor
- [ ] Video popups hide on mouse leave
- [ ] Copy to clipboard shows success notification
- [ ] Success notification disappears on mouse leave
- [ ] All images load correctly
- [ ] All videos play smoothly
- [ ] No console errors
- [ ] Page loads in under 3 seconds
- [ ] Hover effects are smooth (no jank)
- [ ] Text is readable on all backgrounds

---

*This guide was created to help AI assistants understand and work effectively with this codebase. Keep it updated as the project evolves.*
