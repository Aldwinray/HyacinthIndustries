# Responsive Design System

## Breakpoint Standards

This project uses a comprehensive responsive design system with the following breakpoints:

### Primary Breakpoints

| Breakpoint | Width   | Target Devices                                |
| ---------- | ------- | --------------------------------------------- |
| **xs**     | 320px   | Extra small mobile (iPhone SE, small Android) |
| **sm**     | 480px   | Small mobile (large phones in portrait)       |
| **md**     | 640px   | Mobile (standard phones landscape)            |
| **lg**     | 768px   | Tablets (iPad portrait, small tablets)        |
| **xl**     | 1024px  | Large tablets (iPad landscape), small laptops |
| **2xl**    | 1280px  | Desktops, laptops                             |
| **3xl**    | 1440px+ | Ultra-wide screens, large monitors            |

### Usage Patterns

```css
/* Extra small mobile - 320px */
@media (max-width: 320px) {
  /* Compact spacing, smaller typography */
}

/* Small mobile - 480px */
@media (max-width: 480px) {
  /* Single column layouts, stacked buttons */
}

/* Mobile - 640px */
@media (max-width: 640px) {
  /* Full-width cards, reduced padding */
}

/* Tablet - 768px */
@media (max-width: 768px) {
  /* Adjusted grids (2 cols → 1 col) */
}

/* Small desktop/Tablet landscape - 960px-1024px */
@media (max-width: 1024px) {
  /* Sidebar navigation, adjusted padding */
}

/* Ultra-wide screens - 1440px+ */
@media (min-width: 1440px) {
  /* Expanded containers (1400px max-width) */
  /* Increased spacing */
}
```

## Container Standards

| Breakpoint | Max Width | Padding  |
| ---------- | --------- | -------- |
| 320px      | 100%      | 1rem     |
| 640px      | 100%      | 1.5rem   |
| 768px      | 100%      | 1.5-2rem |
| 1024px     | 100%      | 2rem     |
| 1280px+    | 1320px    | 2-4rem   |
| 1440px+    | 1400px    | 2-5rem   |

## Typography Responsive Scale

| Element | 320px    | 640px   | 768px    | 1024px+                    |
| ------- | -------- | ------- | -------- | -------------------------- |
| H1      | 2.25rem  | 2.5rem  | 3-4rem   | clamp(4rem, 6vw, 6.5rem)   |
| H2      | 1.5rem   | 1.75rem | 2rem     | clamp(2rem, 3.5vw, 2.5rem) |
| H3      | 1.125rem | 1.25rem | 1.25rem  | 1.25rem                    |
| Body    | 0.875rem | 0.95rem | 1rem     | 1rem                       |
| Small   | 0.75rem  | 0.8rem  | 0.875rem | 0.875rem                   |

## Grid Responsive Patterns

### 3-Column Grid (Services, Benefits)

- **1440px+**: 3 columns, wider gaps (2-2.5rem)
- **1024px-1100px**: 3 columns
- **768px-1024px**: 2 columns
- **640px**: 1 column
- **320px**: 1 column, reduced gaps

### 2-Column Grid (Contact, Executive)

- **960px+**: 2 columns
- **768px**: 2 columns (adjusted ratio)
- **640px**: 1 column

## Components Responsive Behavior

### Hero Sections

- **320px**: Stacked layout, reduced typography
- **768px**: Centered text, background position adjustments
- **1440px+**: Expanded max-width (1400px)

### Cards

- **320px**: Full-width, compact padding
- **768px**: 2-column grid
- **1024px+**: 3-column grid, hover effects

### Navigation

- **1024px**: Switches to hamburger menu
- **768px**: Full-width sidebar
- **320px**: Compact sidebar padding

### Forms

- **640px**: Single column, full-width inputs
- **768px+**: Multi-column where appropriate

## Pages Status

- [x] HomeHeader.jsx - Fully responsive
- [x] Home.jsx - Fully responsive
- [x] HomeBusinessActions.jsx - Fully responsive
- [x] HomeFeatureContent.jsx - Fully responsive
- [x] HomeIndustriesExpertise.jsx - Fully responsive
- [x] HomeReforestationFeature.jsx - Fully responsive
- [x] HomeTestimonials.jsx - Fully responsive
- [x] About.jsx - Fully responsive
- [x] Contact.jsx - Fully responsive
- [x] Services.jsx - Fully responsive
- [x] FAQ.jsx - Fully responsive
- [x] LogisticsOverview.jsx - Fully responsive (1440px+ & 320px added)
- [x] Reforestation.jsx - Fully responsive
- [x] TopNavBar.jsx - Fully responsive
- [x] Sidebar.jsx - Fully responsive
- [x] Footer.jsx - Fully responsive (1440px+ & 320px added)

## Testing Checklist

### Device Testing

- [ ] iPhone SE (320px)
- [ ] iPhone 12/13/14 (390px)
- [ ] iPhone 14 Pro Max (430px)
- [ ] Samsung Galaxy S21 (360px)
- [ ] iPad Mini (768px)
- [ ] iPad Air (820px)
- [ ] iPad Pro 11" (834px)
- [ ] iPad Pro 12.9" (1024px)
- [ ] MacBook Air (1280px)
- [ ] Desktop (1440px+)
- [ ] Ultra-wide (1920px+)

### Functional Testing

- [ ] Navigation collapses correctly at 1024px
- [ ] Sidebar works on mobile
- [ ] Touch targets are 44px minimum
- [ ] No horizontal scroll on any device
- [ ] Text is readable at all sizes
- [ ] Images scale correctly
- [ ] Grids reflow correctly
- [ ] Buttons are tappable on mobile
