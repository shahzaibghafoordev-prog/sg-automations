import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SECTION 04: Exact Color System (60-30-10 Rule)
        // Primary bg (60%) - Deep Navy
        'primary-navy': '#0d1b3e',
        'primary-navy-dark': '#1a1a2e',
        
        // Secondary bg (30%) - Off-White
        'secondary-offwhite': '#f4f6f7',
        
        // Accent / CTA (10%) - Electric Purple
        'accent-purple': '#7b68ee',
        
        // Success states - Green (confirmation only)
        'success-green': '#27ae60',
        
        // Warning callouts - Amber (callout boxes only)
        'warning-amber': '#f5c518',
        
        // FORBIDDEN COLOR (documented for reference)
        // 'danger-red': '#e74c3c', // NEVER USE - signals danger/stop to B2B buyers
      },
      fontFamily: {
        // SECTION 05: Typography System
        // Headings: Plus Jakarta Sans
        'heading': ['Plus Jakarta Sans', 'sans-serif'],
        // Body: Inter
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        // SECTION 05: Exact font sizes
        'h1': ['56px', { lineHeight: '1.5', fontWeight: '700' }],
        'h1-mobile': ['48px', { lineHeight: '1.5', fontWeight: '700' }],
        'h2': ['38px', { lineHeight: '1.5', fontWeight: '700' }],
        'h2-mobile': ['32px', { lineHeight: '1.5', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.5', fontWeight: '600' }],
        'h3-mobile': ['20px', { lineHeight: '1.5', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-mobile': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        'caption-small': ['12px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      maxWidth: {
        // SECTION 05: Max line length 75 characters
        'readable': '75ch',
      },
      spacing: {
        // SECTION 05: Paragraph spacing 1.5-2x line height
        'paragraph': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
