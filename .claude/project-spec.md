# MangersNest School Website

> Static informational website for MangersNest Nursery & Montessori School

---

## 1. Project Overview

### Description
A static school website where parents and visitors can learn about MangersNest School - its programs, facilities, admissions process, and contact information. Similar to a .edu school website.

### Purpose
- Showcase the school to prospective parents
- Provide information about programs and curriculum
- Display school facilities and environment
- Share admissions information
- Enable visitors to contact the school

### Target Visitors
- Prospective parents researching schools
- Current parents seeking information
- Community members

---

## 2. Pages & Structure

| Page | Route | Description | Status |
|------|-------|-------------|--------|
| Home | `/` | Hero, overview, highlights | ✅ Done |
| About | `/about` | School history, mission, values, team | ✅ Done |
| Programs | `/programs` | Age groups, curriculum, schedule | ✅ Done |
| Admissions | `/admissions` | Process, requirements, fees, apply | ✅ Done |
| Gallery | `/gallery` | Photos of facilities, activities | ✅ Done |
| Contact | `/contact` | Form, location, hours, map | ✅ Done |

---

## 3. Content Sections

### Home Page
- Hero with tagline and CTA
- Welcome message
- Program highlights (age groups)
- Why choose us (features)
- Testimonials from parents
- Call to action (schedule visit)

### About Page
- School history/story
- Mission & vision
- Core values
- Montessori philosophy
- Leadership/staff profiles

### Programs Page
- Infant program (0-18 months)
- Toddler program (18 months - 3 years)
- Primary/Casa (3-6 years)
- Daily schedule
- Curriculum approach

### Admissions Page
- Enrollment process steps
- Age requirements
- Required documents
- Tuition & fees
- School calendar
- Apply/inquire CTA

### Gallery Page
- Classroom photos
- Outdoor/playground
- Activities & events
- Facilities

### Contact Page
- Contact form
- Phone, email, address
- Office hours
- Google Maps embed
- Social media links

---

## 4. Design

### Style
- Clean, warm, welcoming
- Child-friendly but professional
- Lots of whitespace
- Soft colors

### Colors
```
Primary: #4F7942 (Forest green - nature, growth)
Secondary: #F5E6D3 (Warm cream - warmth)
Accent: #E9967A (Soft coral - playful)
Text: #2D3748
Background: #FFFFFF
```

### Typography
- Headings: Rounded, friendly font
- Body: Clean, readable

---

## 5. Tech Stack

- Next.js (Static Export)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- No database
- No authentication

---

## 6. Build Progress

### Completed
- [x] Next.js project initialized
- [x] Tailwind + shadcn/ui setup
- [x] Header & Footer components
- [x] Home page (hero, programs, features, testimonials, CTA)
- [x] About page (story, mission, values, team)
- [x] Programs page (infant, toddler, primary, schedule)
- [x] Admissions page (process, requirements, tuition, dates)
- [x] Gallery page (placeholder images by category)
- [x] Contact page (form, info, map placeholder)

### Current Status
All pages complete! Static school website ready.

---

## 7. Session Notes

### Session 1 (2026-02-02)
- Initial setup
- Misunderstood scope - built management system
- Corrected: This is a static school website, NOT a management platform
- Rebuilt as static informational website
- All 6 pages completed
- Revised: Made less wordy, more playful, added animations
  - Added CSS animations (float, wiggle, bounce, wave)
  - Added emojis throughout
  - Shortened all text
  - Warmer, friendlier tone
  - Colorful gradients & playful cards

### Session 2 (2026-02-02 continued)
- Propagated Home page floating icons design across ALL pages
  - Every hero section now has 4 floating icons (Sun, Star, Heart + contextual icon)
  - Icons have subtle animations: float, bounce-slow, wiggle
  - Positioned at corners with absolute positioning
  - Hidden on smaller screens for responsiveness
- Added consistent CTA sections at bottom of ALL pages
  - Green (#4F7942) background with floating white icons at 20% opacity
  - Two buttons: primary (secondary variant) + white button with green text
  - Fixed white-on-white button issue (now uses `bg-white text-[#4F7942]`)
- Converted "What We Believe" on About page to match Home page feature card style
  - Dashed border cards with shadow icons
- Added floating icons to Footer (subtle, 10% opacity)
- Shortened footer description text

### Design Consistency Pattern
Every page now follows this structure:
1. **Hero** - Gradient bg, 4 floating icons with animations, title + subtitle
2. **Content sections** - Page-specific content
3. **CTA Footer** - Green bg, floating white icons, 2 buttons (no white-on-white!)

### Next Steps
1. Add real school images to Gallery
2. Add Google Maps embed to Contact
3. Add actual school photos/branding
4. Deploy to Vercel

---

*Last updated: 2026-02-02*
