# Nest Nepal - Google Workspace Solutions

This is an internship project for Nest Nepal, a Google Workspace solutions provider offering consultation and implementation services for businesses in Nepal.

## Project Overview

Nest Nepal is a modern web application built with Next.js that showcases Google Workspace solutions tailored for businesses of all sizes. The platform provides information about productivity tools, pricing, and direct contact options for sales inquiries.

## Features

### 1. **Landing Page Sections**

- **First Section**: Hero section introducing the platform
- **Second Section**: Features and benefits overview
- **Third Section**: Tiered solutions (Enterprise, Small Business, New Business) with color-coded text
- **Fourth Section**: Interactive feature showcase with rotating circular image and clickable feature descriptions
- **FAQ Section**: Expandable accordion with common questions and answers
- **Image/CTA Section**: Sales contact section with WhatsApp integration
- **Footer**: Responsive footer with gradient background and navigation

### 2. **Interactive Elements**

- Animated circular image rotation (18s infinite loop)
- Expandable FAQ accordion with smooth transitions
- Dynamic feature selection with border highlighting
- Blue line indicator that moves with selected items
- Responsive navigation and layouts

### 3. **Design Features**

- Radial gradient backgrounds with custom color stops
- White gradient overlays for visual depth
- Responsive design for mobile and desktop
- Brand-consistent color scheme (#146DE1 blue accent)
- Iconify icons for enhanced UI

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4
- **Icons**: Iconify (@iconify/react)
- **Image Carousel**: Embla Carousel
- **Language**: TypeScript

## Project Structure

```
nestnepal/
├── app/
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── Marquee.tsx
│   ├── PricingAndFeatures.tsx
│   ├── QuotationButton.tsx
│   ├── WhatsappButton.tsx
│   ├── allsection/
│   │   ├── FirstSection.tsx
│   │   ├── SecondSection.tsx
│   │   ├── ThirdSection.tsx
│   │   ├── FourthSection.tsx
│   │   ├── FAQsection.tsx
│   │   └── ImageSection.tsx
│   └── layouts/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── public/
│   ├── icons/
│   ├── layouts/
│   ├── marquee/
│   ├── others/
│   └── Footers/
│       ├── Logo.png
│       ├── logo2.png (gradient text)
│       ├── gradient.png
│       ├── color.png
│       ├── dd.png (woman image)
│       └── icon.png (workspace icons)
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Component Details

### ThirdSection Component

Displays tiered solutions with color-coded highlighted text using inline styles.

### FourthSection Component

- Rotating circular image (18 second animation)
- Clickable feature items with state management
- Active state changes border color and displays corresponding description
- Features:
  - Your files, all in one place
  - Annotate PDFs
  - AI-powered search
  - Activity view

### FAQsection Component

- Expandable accordion layout
- Smooth toggle animations
- Supported questions:
  - Email client compatibility
  - Account transfer options
  - Domain transfer fees
  - Hidden charges
  - G Suite package contents

### Footer Component

- **Desktop View**: Logo left, contact info right, navigation at bottom with gradient background
- **Mobile View**: Vertical layout with stacked navigation and support sections
- Radial gradient background: `radial-gradient(90.1% 111.19% at 50% 50%, #0234F8 0%, #011F92 100%)`
- logo2.png watermark with 50% opacity
- White gradient overlay for depth

### WhatsappButton Component

- Direct WhatsApp integration (send message to +977 9864333517)
- Customizable button text
- Green themed styling with hover effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nestnepal
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

# Reference

Nest Nepal Figma File - https://www.figma.com/design/TVW7jMhL3SAmhwMrSMBGRl/Frontend-Intern?node-id=0-1&p=f&t=xZ3qj5VJlezwBcf3-0
