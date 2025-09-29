# Ephimera Platform Design System

## 🎨 **Design Philosophy**
Ephimera represents security, trust, and cutting-edge technology. Our design language emphasizes:
- **Professional Enterprise Appeal**: Clean, modern, and trustworthy
- **High-Tech Security Focus**: Subtle gradients and sophisticated color palettes
- **Developer-First Experience**: Clear hierarchy and excellent readability
- **Dark/Light Mode Excellence**: Seamless experience across both themes

---

## 🏢 **Brand Identity**

### **Company Name & Positioning**
- **Primary Name**: Ephimera
- **Tagline**: "Secure. Ephemeral. Production Access."
- **Industry**: Cloud Security & DevOps Tooling
- **Target Audience**: Enterprise Engineering Teams, DevOps Engineers, Platform Engineers

### **Brand Personality**
- **Professional**: Enterprise-grade reliability and trust
- **Innovative**: Cutting-edge approach to production access
- **Secure**: Security-first mindset in everything we do
- **Ephemeral**: Temporary, time-limited, and controlled access
- **Developer-Focused**: Built by developers, for developers

### **Brand Voice & Tone**
- **Technical but Accessible**: Complex concepts explained clearly
- **Confident but not Arrogant**: Expert knowledge with humility
- **Direct and Honest**: No marketing fluff, straight technical benefits
- **Helpful and Supportive**: Always focused on solving real problems

---

## 🎯 **Logo Design System**

### **Primary Logo Concept**
The Ephimera logo should embody the concept of "dissolving particles" or "ephemeral matter" - representing temporary, secure access that disappears when no longer needed.

### **Logo Variations**

#### **1. Primary Wordmark + Symbol**
```
[SYMBOL] Ephimera
```
- **Symbol**: Stylized dissolving particles or geometric fragments
- **Wordmark**: Custom typography based on Inter font family
- **Usage**: Primary logo for headers, business cards, official documents

#### **2. Symbol Only (Logomark)**
```
[SYMBOL]
```
- **Usage**: Social media profiles, favicons, app icons, watermarks
- **Minimum Size**: 24px × 24px
- **Style**: Geometric, modern, scalable

#### **3. Horizontal Layout**
```
[SYMBOL] ——— EPHIMERA
```
- **Usage**: Website headers, email signatures, document headers
- **Proportions**: Symbol height = 1x, text height = 0.8x

#### **4. Stacked Layout**
```
  [SYMBOL]
  EPHIMERA
```
- **Usage**: Social media posts, square formats, mobile app icons

### **Logo Symbol Design Concept**
```
Visual Description:
┌─────────────────────────────────────┐
│  ●●●                               │
│    ●●  ←— Dissolving particles      │
│      ●                             │
│                                    │
│  ████                              │
│  ██░░  ←— Fragmenting blocks       │
│  ░░                                │
│                                    │
│  ◆◇◇                               │
│  ◇   ←— Geometric dissolution      │
│                                    │
└─────────────────────────────────────┘

Concept Options:
1. Hexagonal grid pattern dissolving from solid to outline
2. Particle stream flowing and fading
3. Geometric shapes fragmenting
4. Cloud/mist dissolving pattern
```

### **Logo Color Specifications**

#### **Primary Brand Colors**
```css
/* Logo Primary */
--logo-primary: linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)

/* Logo on Light Backgrounds */
--logo-light-bg: #111827 (dark text)
--logo-light-symbol: linear-gradient(135deg, #2563eb, #4f46e5, #7c3aed)

/* Logo on Dark Backgrounds */
--logo-dark-bg: #ffffff (white text)
--logo-dark-symbol: linear-gradient(135deg, #60a5fa, #818cf8, #a78bfa)

/* Monochrome Versions */
--logo-black: #000000
--logo-white: #ffffff
--logo-gray: #6b7280
```

### **Logo Typography**
```css
/* Custom Wordmark Font */
Font Family: Custom modified Inter
- Letter Spacing: -0.02em (tighter)
- Font Weight: 600 (Semi-bold)
- Character Modifications:
  - 'E': Slightly shortened middle bar
  - 'h': Extended ascender for better flow
  - 'r': Rounded terminal for softer feel
  - 'a': Geometric aperture for modern look

/* Fallback Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-weight: 600;
letter-spacing: -0.02em;
```

### **Logo Usage Guidelines**

#### **Clear Space**
- Minimum clear space = Height of the symbol
- No other design elements within this space
- Applies to all sides of the logo

#### **Minimum Sizes**
- **Digital**: 120px width minimum
- **Print**: 1 inch width minimum
- **Favicon**: 32px × 32px (symbol only)
- **App Icon**: 180px × 180px (symbol only)

#### **Do's and Don'ts**
✅ **Do:**
- Use approved color variations
- Maintain proper proportions
- Ensure adequate contrast
- Use on appropriate backgrounds

❌ **Don't:**
- Stretch or distort the logo
- Add drop shadows or effects
- Use on busy backgrounds
- Alter colors outside brand palette
- Place text too close to the logo

---

## 🔤 **Typography System**

### **Primary Brand Fonts**

#### **1. Inter (Primary UI Font)**
```css
/* Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Why Inter? */
- Excellent readability at all sizes
- Modern, professional appearance
- Great for UI/UX applications
- Open source and web-optimized
- Perfect for technical content

/* Usage */
- Primary UI text
- Navigation
- Buttons and interactive elements
- Body text and descriptions
- Form labels and inputs
```

#### **2. JetBrains Mono (Code/Technical Font)**
```css
/* Font Stack */
font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace;

/* Why JetBrains Mono? */
- Designed specifically for developers
- Excellent code readability
- Supports programming ligatures
- Professional appearance
- Great for technical documentation

/* Usage */
- Code snippets and examples
- Terminal/console interfaces
- API documentation
- Configuration files
- Technical specifications
```

#### **3. Poppins (Marketing/Headings)**
```css
/* Font Stack */
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Why Poppins? */
- Friendly yet professional
- Great for larger headings
- Excellent weight variety
- Modern geometric feel
- Perfect for marketing content

/* Usage */
- Landing page headlines
- Marketing materials
- Feature callouts
- Hero sections
- Display text
```

### **Font Loading Strategy**
```html
<!-- Google Fonts Preload -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Critical Fonts (Above the fold) -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style">
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" as="style">

<!-- Non-Critical Fonts (Below the fold) -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" media="print" onload="this.media='all'">
```

### **Typography Hierarchy**

#### **Display Text (Marketing/Headers)**
```css
/* Hero Headlines */
.text-display-1 {
  font-family: 'Poppins', sans-serif;
  font-size: 3.75rem;     /* 60px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.text-display-2 {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;        /* 48px */
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.text-display-3 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.25rem;     /* 36px */
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.015em;
}
```

#### **Heading Text (UI/Interface)**
```css
/* UI Headers */
.text-h1 {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;        /* 32px */
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

.text-h2 {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;      /* 24px */
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.005em;
}

.text-h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;     /* 20px */
  font-weight: 600;
  line-height: 1.35;
}

.text-h4 {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;    /* 18px */
  font-weight: 600;
  line-height: 1.4;
}
```

#### **Body Text**
```css
/* Body Text Variants */
.text-body-large {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;    /* 18px */
  font-weight: 400;
  line-height: 1.6;
}

.text-body {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;        /* 16px */
  font-weight: 400;
  line-height: 1.5;
}

.text-body-small {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;    /* 14px */
  font-weight: 400;
  line-height: 1.5;
}

.text-caption {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;     /* 12px */
  font-weight: 400;
  line-height: 1.4;
  color: var(--text-secondary);
}
```

#### **Code/Technical Text**
```css
/* Code Text Variants */
.text-code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;    /* 14px */
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.025em;
}

.text-code-large {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;        /* 16px */
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.025em;
}

.text-code-small {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;     /* 12px */
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.025em;
}
```

### **Font Weight Guidelines**
```css
/* Inter Font Weights */
--font-weight-normal: 400    /* Body text, descriptions */
--font-weight-medium: 500    /* Emphasized text, labels */
--font-weight-semibold: 600  /* Headings, navigation */
--font-weight-bold: 700      /* Strong emphasis, CTAs */

/* Poppins Font Weights */
--font-weight-normal: 400    /* Light headings */
--font-weight-medium: 500    /* Standard headings */
--font-weight-semibold: 600  /* Emphasized headings */
--font-weight-bold: 700      /* Hero headlines */
--font-weight-extrabold: 800 /* Display text */

/* JetBrains Mono Font Weights */
--font-weight-normal: 400    /* Standard code */
--font-weight-medium: 500    /* Emphasized code */
--font-weight-semibold: 600  /* Headers in code blocks */
```

### **Responsive Typography**
```css
/* Mobile-First Responsive Scaling */
@media (max-width: 640px) {
  .text-display-1 { font-size: 2.5rem; }  /* 40px */
  .text-display-2 { font-size: 2rem; }    /* 32px */
  .text-display-3 { font-size: 1.75rem; } /* 28px */
  .text-h1 { font-size: 1.75rem; }        /* 28px */
  .text-h2 { font-size: 1.5rem; }         /* 24px */
}

@media (min-width: 1024px) {
  .text-display-1 { font-size: 4.5rem; }  /* 72px */
  .text-display-2 { font-size: 3.75rem; } /* 60px */
  .text-display-3 { font-size: 3rem; }    /* 48px */
}
```

---

## 🌈 **Color Palette**

### **Primary Brand Colors**
```css
/* Blue-Indigo-Purple Gradient Spectrum */
--primary-blue-400: #60a5fa      /* Light blue for dark mode accents */
--primary-blue-500: #3b82f6      /* Core blue */
--primary-blue-600: #2563eb      /* Primary blue (main CTA) */
--primary-blue-700: #1d4ed8      /* Darker blue for hover states */

--primary-indigo-400: #818cf8    /* Light indigo for dark mode */
--primary-indigo-500: #6366f1    /* Core indigo */
--primary-indigo-600: #4f46e5    /* Primary indigo */
--primary-indigo-700: #4338ca    /* Darker indigo */

--primary-purple-400: #a78bfa    /* Light purple for dark mode */
--primary-purple-500: #8b5cf6    /* Core purple */
--primary-purple-600: #7c3aed    /* Primary purple */
--primary-purple-700: #6d28d9    /* Darker purple */
```

### **Semantic Colors**
```css
/* Success States */
--success-400: #4ade80          /* Light green */
--success-500: #22c55e          /* Core green */
--success-600: #16a34a          /* Primary green */

/* Warning States */
--warning-400: #facc15          /* Light yellow */
--warning-500: #eab308          /* Core yellow */
--warning-600: #ca8a04          /* Primary yellow */

/* Error States */
--error-400: #f87171            /* Light red */
--error-500: #ef4444            /* Core red */
--error-600: #dc2626            /* Primary red */

/* Info States */
--info-400: #38bdf8             /* Light cyan */
--info-500: #06b6d4             /* Core cyan */
--info-600: #0891b2             /* Primary cyan */
```

### **Neutral Gray Scale**
```css
/* Light Mode Grays */
--gray-50: #f9fafb             /* Lightest background */
--gray-100: #f3f4f6            /* Light background */
--gray-200: #e5e7eb            /* Light borders */
--gray-300: #d1d5db            /* Medium borders */
--gray-400: #9ca3af            /* Disabled text */
--gray-500: #6b7280            /* Secondary text */
--gray-600: #4b5563            /* Primary text (light mode) */
--gray-700: #374151            /* Dark text */
--gray-800: #1f2937            /* Darker text */
--gray-900: #111827            /* Darkest text/bg */

/* Dark Mode Grays */
--dark-gray-50: #1f2937        /* Darkest in dark mode */
--dark-gray-100: #374151       /* Dark background */
--dark-gray-200: #4b5563       /* Dark borders */
--dark-gray-300: #6b7280       /* Medium borders */
--dark-gray-400: #9ca3af       /* Disabled text (dark) */
--dark-gray-500: #d1d5db       /* Secondary text (dark) */
--dark-gray-600: #e5e7eb       /* Primary text (dark) */
--dark-gray-700: #f3f4f6       /* Light text (dark) */
--dark-gray-800: #f9fafb       /* Lighter text (dark) */
--dark-gray-900: #ffffff       /* White text (dark) */
```

---

## 🎯 **Primary Application Areas**

### **1. Authentication & Login**
```css
/* Background */
Light Mode: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)
Dark Mode: linear-gradient(135deg, #111827 0%, #1f2937 100%)

/* Primary CTAs */
Background: linear-gradient(to right, #2563eb, #4f46e5)
Hover: linear-gradient(to right, #1d4ed8, #4338ca)
Text: #ffffff

/* Input Fields */
Light Mode:
  - Background: #ffffff
  - Border: #d1d5db
  - Focus: #2563eb
  - Text: #374151

Dark Mode:
  - Background: #1f2937
  - Border: #4b5563
  - Focus: #60a5fa
  - Text: #e5e7eb
```

### **2. Dashboard Navigation**
```css
/* Sidebar */
Light Mode: #ffffff with border-right: 1px solid #e5e7eb
Dark Mode: #111827 with border-right: 1px solid #374151

/* Active Navigation Item */
Light Mode:
  - Background: linear-gradient(to right, #dbeafe, #e0e7ff)
  - Text: #2563eb
  - Icon: #2563eb

Dark Mode:
  - Background: linear-gradient(to right, #1e3a8a, #312e81)
  - Text: #60a5fa
  - Icon: #60a5fa

/* Inactive Navigation */
Light Mode: #6b7280
Dark Mode: #9ca3af
```

### **3. Data Tables & Lists**
```css
/* Table Headers */
Light Mode:
  - Background: #f9fafb
  - Text: #374151
  - Border: #e5e7eb

Dark Mode:
  - Background: #1f2937
  - Text: #e5e7eb
  - Border: #374151

/* Table Rows */
Light Mode:
  - Background: #ffffff
  - Hover: #f9fafb
  - Border: #f3f4f6

Dark Mode:
  - Background: #111827
  - Hover: #1f2937
  - Border: #374151

/* Status Indicators */
Active/Online: #22c55e
Warning/Pending: #eab308
Error/Offline: #ef4444
Neutral/Inactive: #6b7280
```

### **4. Console/Terminal Interface**
```css
/* Console Background */
Light Mode: #1f2937 (always dark for authenticity)
Dark Mode: #0f172a (deeper dark)

/* Console Text */
Default: #e5e7eb
Success: #4ade80
Warning: #facc15
Error: #f87171
Command: #60a5fa
Path: #a78bfa

/* Console Accent */
Cursor: #3b82f6 (blinking)
Selection: #2563eb with 20% opacity
```

### **5. Cards & Containers**
```css
/* Standard Cards */
Light Mode:
  - Background: #ffffff
  - Border: #e5e7eb
  - Shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1)

Dark Mode:
  - Background: #1f2937
  - Border: #374151
  - Shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3)

/* Feature Cards */
Light Mode:
  - Background: #ffffff
  - Border: linear-gradient(135deg, #e5e7eb, #d1d5db)
  - Hover: subtle lift with shadow increase

Dark Mode:
  - Background: #111827
  - Border: linear-gradient(135deg, #374151, #4b5563)
  - Hover: subtle glow effect
```

### **6. Buttons & Interactive Elements**
```css
/* Primary Buttons */
Background: linear-gradient(to right, #2563eb, #4f46e5)
Hover: linear-gradient(to right, #1d4ed8, #4338ca)
Active: linear-gradient(to right, #1e40af, #3730a3)
Text: #ffffff
Shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.25)

/* Secondary Buttons */
Light Mode:
  - Background: transparent
  - Border: #d1d5db
  - Text: #374151
  - Hover: #f9fafb

Dark Mode:
  - Background: transparent
  - Border: #4b5563
  - Text: #e5e7eb
  - Hover: #1f2937

/* Destructive Buttons */
Background: linear-gradient(to right, #dc2626, #b91c1c)
Hover: linear-gradient(to right, #b91c1c, #991b1b)
Text: #ffffff

/* Ghost Buttons */
Background: transparent
Text matches context color
Hover: subtle background color
```

### **7. Form Elements**
```css
/* Input Fields */
Light Mode:
  - Background: #ffffff
  - Border: #d1d5db
  - Focus: 2px solid #2563eb
  - Text: #374151
  - Placeholder: #9ca3af

Dark Mode:
  - Background: #1f2937
  - Border: #4b5563
  - Focus: 2px solid #60a5fa
  - Text: #e5e7eb
  - Placeholder: #6b7280

/* Select Dropdowns */
Same as inputs with dropdown arrow in context color

/* Checkboxes & Radio */
Unchecked: border matches input border
Checked: #2563eb background with white checkmark
Focus: 2px #2563eb outline
```

### **8. Status & Feedback**
```css
/* Alert/Toast Messages */
Success:
  - Background: #dcfce7 (light) / #14532d (dark)
  - Border: #22c55e
  - Text: #166534 (light) / #4ade80 (dark)

Warning:
  - Background: #fef3c7 (light) / #451a03 (dark)
  - Border: #eab308
  - Text: #92400e (light) / #facc15 (dark)

Error:
  - Background: #fee2e2 (light) / #450a0a (dark)
  - Border: #ef4444
  - Text: #dc2626 (light) / #f87171 (dark)

Info:
  - Background: #dbeafe (light) / #0c4a6e (dark)
  - Border: #3b82f6
  - Text: #1e40af (light) / #60a5fa (dark)
```

---

## 🎨 **Gradient Definitions**

### **Primary Brand Gradients**
```css
/* Hero/Landing Gradients */
--gradient-hero-light: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #f3e8ff 100%)
--gradient-hero-dark: linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #581c87 100%)

/* CTA Gradients */
--gradient-cta-primary: linear-gradient(to right, #2563eb, #4f46e5)
--gradient-cta-primary-hover: linear-gradient(to right, #1d4ed8, #4338ca)
--gradient-cta-secondary: linear-gradient(to right, #4f46e5, #7c3aed)

/* Background Gradients */
--gradient-bg-light: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)
--gradient-bg-dark: linear-gradient(135deg, #111827 0%, #1f2937 100%)

/* Card Hover Gradients */
--gradient-card-hover-light: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)
--gradient-card-hover-dark: linear-gradient(135deg, #1f2937 0%, #111827 100%)
```

### **Accent Gradients**
```css
/* Text Gradients */
--gradient-text-primary: linear-gradient(to right, #2563eb, #4f46e5, #7c3aed)
--gradient-text-secondary: linear-gradient(to right, #6b7280, #374151)

/* Border Gradients */
--gradient-border-light: linear-gradient(to right, #e5e7eb, #d1d5db)
--gradient-border-dark: linear-gradient(to right, #374151, #4b5563)
```

---

## 🎭 **Dark/Light Mode Strategy**

### **Theme Switching Logic**
```typescript
interface ThemeColors {
  // Primary backgrounds
  bg: {
    primary: string
    secondary: string
    tertiary: string
  }

  // Text colors
  text: {
    primary: string
    secondary: string
    tertiary: string
    inverse: string
  }

  // Interactive elements
  interactive: {
    primary: string
    secondary: string
    hover: string
    active: string
    disabled: string
  }

  // Borders and dividers
  border: {
    primary: string
    secondary: string
    focus: string
  }

  // Status colors (consistent across themes)
  status: {
    success: string
    warning: string
    error: string
    info: string
  }
}

const lightTheme: ThemeColors = {
  bg: {
    primary: '#ffffff',
    secondary: '#f9fafb',
    tertiary: '#f3f4f6'
  },
  text: {
    primary: '#111827',
    secondary: '#6b7280',
    tertiary: '#9ca3af',
    inverse: '#ffffff'
  },
  interactive: {
    primary: 'linear-gradient(to right, #2563eb, #4f46e5)',
    secondary: '#f9fafb',
    hover: '#f3f4f6',
    active: '#e5e7eb',
    disabled: '#d1d5db'
  },
  border: {
    primary: '#e5e7eb',
    secondary: '#d1d5db',
    focus: '#2563eb'
  },
  status: {
    success: '#22c55e',
    warning: '#eab308',
    error: '#ef4444',
    info: '#3b82f6'
  }
}

const darkTheme: ThemeColors = {
  bg: {
    primary: '#111827',
    secondary: '#1f2937',
    tertiary: '#374151'
  },
  text: {
    primary: '#f9fafb',
    secondary: '#d1d5db',
    tertiary: '#9ca3af',
    inverse: '#111827'
  },
  interactive: {
    primary: 'linear-gradient(to right, #3b82f6, #6366f1)',
    secondary: '#1f2937',
    hover: '#374151',
    active: '#4b5563',
    disabled: '#6b7280'
  },
  border: {
    primary: '#374151',
    secondary: '#4b5563',
    focus: '#3b82f6'
  },
  status: {
    success: '#4ade80',
    warning: '#facc15',
    error: '#f87171',
    info: '#60a5fa'
  }
}
```

---

## 📏 **Typography Scale**

### **Font Families**
```css
/* Primary Font (Headers, UI) */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

/* Secondary Font (Body, Descriptions) */
--font-secondary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

/* Monospace Font (Code, Console) */
--font-mono: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace
```

### **Type Scale**
```css
/* Display Sizes */
--text-xs: 0.75rem      /* 12px */
--text-sm: 0.875rem     /* 14px */
--text-base: 1rem       /* 16px */
--text-lg: 1.125rem     /* 18px */
--text-xl: 1.25rem      /* 20px */
--text-2xl: 1.5rem      /* 24px */
--text-3xl: 1.875rem    /* 30px */
--text-4xl: 2.25rem     /* 36px */
--text-5xl: 3rem        /* 48px */
--text-6xl: 3.75rem     /* 60px */

/* Line Heights */
--leading-tight: 1.25
--leading-normal: 1.5
--leading-relaxed: 1.625

/* Font Weights */
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
```

---

## 🎛️ **Component Specifications**

### **Buttons**
```css
/* Size Variants */
.btn-sm: padding: 0.5rem 1rem; font-size: 0.875rem
.btn-md: padding: 0.75rem 1.5rem; font-size: 1rem
.btn-lg: padding: 1rem 2rem; font-size: 1.125rem

/* Radius */
--btn-radius: 0.5rem

/* Shadows */
--btn-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--btn-shadow-hover: 0 4px 12px 0 rgba(0, 0, 0, 0.15)
```

### **Cards**
```css
/* Card Variants */
.card-default:
  - padding: 1.5rem
  - border-radius: 0.75rem
  - shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1)

.card-feature:
  - padding: 2rem
  - border-radius: 1rem
  - shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)

.card-console:
  - padding: 1rem
  - border-radius: 0.5rem
  - background: always dark theme colors
  - font-family: monospace
```

### **Navigation**
```css
/* Sidebar Width */
--sidebar-width: 16rem
--sidebar-collapsed-width: 4rem

/* Navigation Item */
.nav-item:
  - padding: 0.75rem 1rem
  - border-radius: 0.5rem
  - transition: all 0.2s ease-in-out

/* Active State */
.nav-item-active:
  - background: gradient based on theme
  - font-weight: 600
```

---

## 🔄 **Animation & Transitions**

### **Standard Transitions**
```css
/* Default Transition */
--transition-default: all 0.2s ease-in-out

/* Hover Transitions */
--transition-hover: all 0.15s ease-out

/* Focus Transitions */
--transition-focus: all 0.1s ease-out

/* Page Transitions */
--transition-page: opacity 0.3s ease-in-out
```

### **Loading States**
```css
/* Skeleton Animation */
@keyframes skeleton-pulse {
  0%, 100% { opacity: 1 }
  50% { opacity: 0.5 }
}

.skeleton {
  animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Spinner Animation */
@keyframes spin {
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
}
```

---

## 🎯 **Usage Guidelines**

### **Do's**
✅ **Always maintain color contrast ratios** (4.5:1 minimum for normal text)
✅ **Use gradients sparingly** - primarily for CTAs and accents
✅ **Implement consistent spacing** using the 8px grid system
✅ **Test both dark and light themes** for every component
✅ **Use semantic color names** instead of specific color values
✅ **Apply hover states** to all interactive elements

### **Don'ts**
❌ **Don't use bright, saturated colors** for large areas
❌ **Don't mix warm and cool grays** in the same interface
❌ **Don't forget focus states** for keyboard navigation
❌ **Don't use more than 3 colors** in a single gradient
❌ **Don't hardcode colors** - always use CSS custom properties
❌ **Don't ignore accessibility** requirements for color-blind users

---

## 🚀 **Implementation Priority**

### **Phase 1: Core System**
1. Implement CSS custom properties for all colors
2. Create theme switching mechanism
3. Build primary component library (buttons, inputs, cards)
4. Establish typography system

### **Phase 2: Advanced Components**
1. Dashboard navigation components
2. Data table components
3. Console/terminal interfaces
4. Form validation states

### **Phase 3: Enhancement**
1. Advanced animations and micro-interactions
2. Loading states and skeleton screens
3. Toast notification system
4. Advanced data visualization components

---

## 📋 **Quality Checklist**

Before shipping any component:

- [ ] Tested in both light and dark themes
- [ ] Meets WCAG AA accessibility standards
- [ ] Responsive design implemented
- [ ] Hover and focus states defined
- [ ] Loading states implemented
- [ ] Error states handled
- [ ] Consistent with design tokens
- [ ] Performance optimized
- [ ] Cross-browser tested
- [ ] Mobile-friendly interactions

---

## 🔗 **Related Resources**

- **Figma Design System**: [Link to Figma workspace]
- **Component Storybook**: [Link to Storybook]
- **Accessibility Guidelines**: [Link to a11y docs]
- **Brand Guidelines**: [Link to brand guide]

---

## 🎨 **Icon System**

### **Icon Style Guidelines**
```css
/* Icon Style */
Style: Outlined icons with 2px stroke weight
Corner Radius: 2px for consistency
Grid: 24px × 24px base grid
Optical Adjustments: Ensure visual balance over mathematical precision
```

### **Icon Categories**

#### **1. Navigation Icons**
- **Home**: House outline
- **Dashboard**: Grid/squares layout
- **Console**: Terminal window
- **Settings**: Gear/cog
- **Profile**: User circle
- **Logout**: Arrow pointing to door

#### **2. Action Icons**
- **Add/Create**: Plus in circle
- **Edit**: Pencil
- **Delete**: Trash can
- **Copy**: Duplicate rectangles
- **Download**: Arrow down to line
- **Upload**: Arrow up from line
- **Search**: Magnifying glass
- **Filter**: Funnel
- **Sort**: Arrows up/down

#### **3. Status Icons**
- **Success**: Checkmark in circle
- **Warning**: Triangle with exclamation
- **Error**: X in circle
- **Info**: i in circle
- **Loading**: Spinning circle
- **Pending**: Clock

#### **4. Security Icons**
- **Lock**: Padlock (closed)
- **Unlock**: Padlock (open)
- **Key**: Traditional key shape
- **Shield**: Protection shield
- **Eye**: Visibility (show)
- **Eye-off**: Visibility (hide)
- **Fingerprint**: Biometric access

#### **5. Technical Icons**
- **Cloud**: Cloud outline
- **Server**: Server rack
- **Database**: Cylinder stack
- **API**: Brackets with dots
- **Code**: Angle brackets
- **Terminal**: Command prompt
- **Git**: Branch symbol
- **Deployment**: Rocket

### **Icon Sizing**
```css
/* Icon Sizes */
--icon-xs: 12px     /* Inline with text */
--icon-sm: 16px     /* Small buttons, forms */
--icon-md: 20px     /* Default UI icons */
--icon-lg: 24px     /* Primary navigation */
--icon-xl: 32px     /* Feature highlights */
--icon-2xl: 48px    /* Hero sections */
```

### **Icon Color Usage**
```css
/* Icon Colors */
Primary: Current text color (inherit)
Secondary: var(--text-secondary)
Interactive: var(--primary-blue-600)
Success: var(--success-500)
Warning: var(--warning-500)
Error: var(--error-500)
Disabled: var(--gray-400)
```

---

## 📱 **Digital Asset Specifications**

### **Favicon & App Icons**
```
Favicon.ico (Multi-size ICO file):
- 16×16px
- 32×32px
- 48×48px

PNG Favicons:
- favicon-16x16.png
- favicon-32x32.png
- favicon-96x96.png

Apple Touch Icons:
- apple-touch-icon-57x57.png
- apple-touch-icon-72x72.png
- apple-touch-icon-114x114.png
- apple-touch-icon-144x144.png
- apple-touch-icon-180x180.png

Android Icons:
- android-chrome-36x36.png
- android-chrome-48x48.png
- android-chrome-72x72.png
- android-chrome-96x96.png
- android-chrome-144x144.png
- android-chrome-192x192.png
- android-chrome-512x512.png

Microsoft Tiles:
- mstile-70x70.png
- mstile-144x144.png
- mstile-150x150.png
- mstile-310x150.png
- mstile-310x310.png
```

### **Social Media Assets**
```
LinkedIn Profile:
- Profile Image: 400×400px
- Cover Image: 1584×396px

Twitter/X:
- Profile Image: 400×400px
- Header Image: 1500×500px

Facebook:
- Profile Image: 180×180px
- Cover Image: 820×312px

Open Graph Images:
- og-image.png: 1200×630px
- og-image-square.png: 1200×1200px

Social Media Posts:
- Instagram Square: 1080×1080px
- Instagram Story: 1080×1920px
- LinkedIn Post: 1200×627px
- Twitter Post: 1200×675px
```

### **Website Graphics**
```
Hero Images:
- Desktop: 1920×1080px
- Tablet: 1024×768px
- Mobile: 375×667px

Feature Graphics:
- Large: 800×600px
- Medium: 600×400px
- Small: 400×300px
- Icon: 120×120px

Blog Graphics:
- Featured Image: 1200×675px
- Thumbnail: 400×225px
- In-line Image: 800×450px
```

---

## 📖 **Brand Applications**

### **Email Signatures**
```html
<!-- Executive Email Signature -->
<div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #374151;">
  <div style="margin-bottom: 8px;">
    <strong style="color: #111827; font-weight: 600;">[Name]</strong><br>
    <span style="color: #6b7280;">[Title]</span>
  </div>

  <div style="margin-bottom: 12px;">
    <img src="logo-horizontal.png" alt="Ephimera" width="120" height="auto">
  </div>

  <div style="font-size: 12px; color: #9ca3af;">
    <div>[email] • [phone]</div>
    <div style="margin-top: 4px;">
      <span style="color: #2563eb; font-weight: 500;">ephimera.cloud</span>
    </div>
    <div style="margin-top: 8px; font-style: italic;">
      Secure. Ephemeral. Production Access.
    </div>
  </div>
</div>
```

### **Business Card Specifications**
```
Standard Business Card: 3.5" × 2" (89mm × 51mm)

Front:
- Logo: Top left, 1" width
- Name: Bold, 16pt
- Title: Regular, 12pt
- Contact: Regular, 10pt

Back:
- Tagline: Centered, 14pt
- Website: Centered, 12pt
- Background: Subtle gradient or pattern

Colors: Primary brand colors only
Paper: Premium matte finish
```

### **Letterhead Design**
```
Paper Size: 8.5" × 11" (Letter)

Header:
- Logo: Top left, 1.5" width
- Company info: Top right, aligned
- Margin: 1" from top

Footer:
- Address and contact info
- Website and social links
- Margin: 0.75" from bottom

Colors: Primarily grayscale with blue accents
```

### **Presentation Templates**

#### **Title Slide**
```
Layout:
- Ephimera logo: Top left
- Presentation title: Large, Poppins Bold
- Subtitle: Medium, Inter Regular
- Presenter info: Bottom right
- Background: Subtle gradient
```

#### **Content Slides**
```
Layout:
- Header: Company logo + slide title
- Body: Clean layout with adequate whitespace
- Footer: Slide number + confidentiality notice

Typography:
- Headings: Poppins, 28pt
- Body: Inter, 20pt
- Captions: Inter, 16pt

Colors: Primary brand palette
```

---

## 🎯 **Platform-Specific Guidelines**

### **Web Application**
```css
/* Layout Specifications */
Max Content Width: 1440px
Sidebar Width: 280px (expanded), 64px (collapsed)
Header Height: 64px
Footer Height: 48px

/* Responsive Breakpoints */
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1439px
Large Desktop: 1440px+

/* Grid System */
Columns: 12-column grid
Gutters: 24px
Margins: 24px (mobile), 48px (tablet), 64px (desktop)
```

### **Mobile App Design**
```css
/* iOS Specifications */
Status Bar: Respect safe areas
Navigation: Bottom tab bar or top navigation
Touch Targets: Minimum 44px × 44px
Typography: SF Pro Display/Text (system font)

/* Android Specifications */
Status Bar: Material Design guidelines
Navigation: Bottom navigation or navigation drawer
Touch Targets: Minimum 48dp × 48dp
Typography: Roboto (system font)

/* Cross-Platform */
Primary Colors: Use brand colors
Interactive Elements: Platform-appropriate styling
Animations: 300ms standard duration
```

### **Documentation Site**
```css
/* Layout */
Sidebar Navigation: Fixed, collapsible
Content Width: Max 800px for readability
Code Blocks: Full-width when needed
Search: Prominent placement

/* Typography */
Headers: Poppins font family
Body: Inter font family
Code: JetBrains Mono font family

/* Syntax Highlighting */
Theme: Custom theme matching brand colors
Background: Dark theme for code blocks
Accent: Primary blue for keywords
```

---

## 🔍 **Accessibility Standards**

### **Color Contrast Requirements**
```
WCAG AA Compliance:
- Normal Text: 4.5:1 minimum ratio
- Large Text: 3:1 minimum ratio
- Interactive Elements: 3:1 minimum ratio
- Focus Indicators: 3:1 minimum ratio

Brand Color Compliance:
✅ Blue-600 on White: 6.2:1 (AA)
✅ Gray-700 on White: 10.5:1 (AAA)
✅ White on Blue-600: 6.2:1 (AA)
⚠️ Blue-400 on White: 3.8:1 (Below AA for normal text)
```

### **Focus Management**
```css
/* Focus Indicators */
--focus-ring: 2px solid #2563eb
--focus-ring-offset: 2px
--focus-ring-opacity: 0.5

/* Focus Styles */
.focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
  border-radius: inherit;
}
```

### **Screen Reader Considerations**
```html
<!-- Semantic HTML Structure -->
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main">
<aside role="complementary">
<footer role="contentinfo">

<!-- Accessible Form Labels -->
<label for="email">Email Address</label>
<input type="email" id="email" aria-describedby="email-help">
<div id="email-help">We'll never share your email</div>

<!-- Skip Links -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

---

## 📊 **Design Tokens Implementation**

### **CSS Custom Properties**
```css
:root {
  /* Colors */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;

  /* Typography */
  --font-family-primary: 'Inter', sans-serif;
  --font-family-display: 'Poppins', sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;

  /* Spacing (8px base) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */

  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.125rem;    /* 2px */
  --radius-base: 0.25rem;   /* 4px */
  --radius-md: 0.375rem;    /* 6px */
  --radius-lg: 0.5rem;      /* 8px */
  --radius-xl: 0.75rem;     /* 12px */
  --radius-2xl: 1rem;       /* 16px */
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-base: 200ms ease-out;
  --transition-slow: 300ms ease-out;
}
```

### **JavaScript Design Tokens**
```javascript
// design-tokens.js
export const tokens = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    }
  },

  typography: {
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
      display: ['Poppins', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    }
  },

  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  }
}
```

---

## 🔗 **External Resources & Tools**

### **Design Tools**
- **Figma**: Primary design tool for UI/UX design
- **Adobe Illustrator**: Logo creation and vector graphics
- **Adobe Photoshop**: Image editing and optimization
- **Sketch**: Alternative design tool (if needed)

### **Development Tools**
- **Tailwind CSS**: Utility-first CSS framework
- **Styled Components**: CSS-in-JS for React
- **Sass/SCSS**: CSS preprocessing
- **PostCSS**: CSS transformations

### **Font Resources**
- **Google Fonts**: Inter, Poppins font families
- **JetBrains**: JetBrains Mono font
- **Font Squirrel**: Web font optimization
- **Google Webfonts Helper**: Self-hosted font files

### **Icon Libraries**
- **Heroicons**: Primary icon set (outlined style)
- **Lucide React**: Alternative icon set
- **Feather Icons**: Backup icon set
- **Custom Icons**: Brand-specific security icons

### **Color Tools**
- **Coolors.co**: Color palette generation
- **Contrast Ratio**: Accessibility testing
- **Adobe Color**: Color harmony tools
- **Figma Color Plugins**: Design integration

### **Accessibility Tools**
- **WAVE**: Web accessibility evaluation
- **axe DevTools**: Automated accessibility testing
- **Color Oracle**: Color blindness simulation
- **Screen Reader**: NVDA, JAWS, VoiceOver testing

---

## 📈 **Design System Maintenance**

### **Version Control**
```
Design System Versioning:
- Major: Breaking changes (v2.0.0)
- Minor: New components/features (v1.1.0)
- Patch: Bug fixes/improvements (v1.0.1)

Documentation Updates:
- Update this document for any changes
- Maintain changelog of updates
- Notify team of significant changes
```

### **Regular Reviews**
- **Monthly**: Component usage audit
- **Quarterly**: Accessibility compliance check
- **Bi-annually**: Complete design system review
- **Annually**: Brand guidelines assessment

### **Feedback Channels**
- **Design Team**: Weekly design critiques
- **Development Team**: Integration feedback
- **Product Team**: User experience insights
- **Support Team**: Customer feedback relay

---

*This design system is a living document. Update it as the platform evolves and new patterns emerge. For questions or suggestions, contact the design team.*