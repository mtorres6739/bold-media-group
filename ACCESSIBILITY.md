# Accessibility Compliance Statement

## Compliance Target
**WCAG 2.1 Level AA** (Web Content Accessibility Guidelines)

This is the de facto legal standard for ADA web accessibility in the United States.

## Last Audit Date
January 7, 2026

## Audit Methodology
- **Automated Testing**: Code pattern analysis, eslint-plugin-jsx-a11y patterns
- **Manual Testing**: Keyboard navigation, screen reader compatibility
- **Code Review**: WCAG 2.1 AA success criteria verification
- **Browser Testing**: Chrome, Firefox, Safari, Edge
- **Device Testing**: Desktop, tablet, mobile responsive

## Conformance Status
**Partially Conformant** - The site substantially meets WCAG 2.1 Level AA requirements with documented remediation completed.

## Accessible Features

### Navigation & Structure
- **Skip Link**: Allows keyboard users to skip directly to main content
- **Landmark Regions**: Proper use of `<header>`, `<nav>`, `<main>`, `<footer>`
- **Logical Heading Hierarchy**: H1-H6 used in proper sequence
- **Consistent Navigation**: Same navigation pattern across all pages

### Keyboard Accessibility
- **Full Keyboard Navigation**: All interactive elements accessible via Tab key
- **Visible Focus Indicators**: 2px gold outline with 4px spread on focus
- **No Keyboard Traps**: Users can navigate away from all elements
- **Mobile Menu**: Properly announces open/closed state

### Forms
- **Associated Labels**: All form inputs have properly associated `<label>` elements
- **Required Field Indicators**: Visual and programmatic indication of required fields
- **Error Identification**: Form errors are clearly identified
- **Autocomplete Support**: Appropriate autocomplete attributes on form fields

### Images & Media
- **Alt Text**: All informational images have descriptive alt text
- **Decorative Images**: Decorative images use `alt=""` or `aria-hidden="true"`
- **Icon Accessibility**: Icon buttons have `aria-label` attributes

### Interactive Components
- **Accordion (FAQ)**: Proper `aria-expanded`, `aria-controls`, and `role="region"`
- **Mobile Menu**: `aria-expanded` state, `aria-controls` reference
- **Testimonial Carousel**: Navigation buttons with `aria-label`, tab roles for dots
- **Cookie Banner**: All buttons have `type="button"` and proper focus management

### Visual Design
- **Color Contrast**: Text meets 4.5:1 contrast ratio requirement
- **Focus Visible**: Focus indicators have 3:1 contrast ratio
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference
- **Responsive Design**: Works at 200% zoom without horizontal scrolling

## Remediation Completed (January 2026)

| Issue | WCAG Criterion | Fix Applied |
|-------|---------------|-------------|
| Missing skip link | 2.4.1 Bypass Blocks | Added skip link to layout |
| Form labels not associated | 1.3.1 Info and Relationships | Added `htmlFor`/`id` associations |
| FAQ missing ARIA | 4.1.2 Name, Role, Value | Added accordion ARIA attributes |
| Focus indicators removed | 2.4.7 Focus Visible | Improved focus ring visibility |
| Social links no labels | 4.1.2 Name, Role, Value | Added `aria-label` to icon links |
| Mobile menu no state | 4.1.2 Name, Role, Value | Added `aria-expanded` |
| Buttons missing type | Best Practice | Added `type="button"` |
| No reduced motion support | 2.3.3 Animation from Interactions | Added `prefers-reduced-motion` |

## Technical Implementation

### Focus States (globals.css)
```css
/* Global focus-visible styles for keyboard navigation */
a:focus-visible,
button:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid var(--gold-primary);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.25);
}
```

### Reduced Motion Support (globals.css)
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Known Limitations

### Third-Party Content
- External video embeds may have accessibility limitations
- Third-party scripts (analytics, chat widgets) are outside our direct control

### PDF Documents
- If PDFs are added, they should be created with accessibility in mind or have HTML alternatives

## Testing Checklist

### Keyboard Testing
- [x] Can reach all interactive elements with Tab
- [x] Tab order is logical (left-to-right, top-to-bottom)
- [x] No keyboard traps
- [x] Focus indicator always visible
- [x] Enter/Space activates buttons and links
- [x] ESC closes mobile menu
- [x] Arrow keys work in carousels

### Screen Reader Testing
- [x] Page title announced on load
- [x] Headings navigable (H key)
- [x] Landmarks navigable
- [x] Links/buttons have clear names
- [x] Images have appropriate alt text
- [x] Form fields announce labels
- [x] Dynamic content changes announced

### Visual Testing
- [x] Works at 200% zoom
- [x] No horizontal scrolling at 320px width
- [x] Focus visible on all elements
- [x] Information not conveyed by color alone
- [x] Animations respect reduced-motion

## Feedback & Contact

If you encounter accessibility barriers on this website, please contact us:

**Email**: contact@boldmediagroup.com

We take accessibility feedback seriously and will work to resolve any issues promptly.

## Commitment to Accessibility

Bold Media Group is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.

---

*This document is updated regularly to reflect ongoing accessibility improvements.*
