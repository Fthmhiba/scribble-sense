# ScribbleSense - Modular Website Structure

## 🏗️ Project Overview

This is a modular React website built with Vite, designed to easily add and manage different sections/components.

## 📁 Current Structure

```
scribble-sense/
├── src/
│   ├── components/
│   │   ├── CardNav.jsx          # Fixed navigation bar
│   │   ├── CardNav.css
│   │   ├── Threads.jsx          # WebGL animated background
│   │   ├── Threads.css
│   │   └── Header/
│   │       ├── Header.jsx       # Main header section with Threads
│   │       └── Header.css
│   ├── App.jsx                  # Main app component
│   ├── App.css
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/
│   └── logo.svg
└── package.json
```

## 🎨 Current Components

### 1. CardNav (Fixed Navigation)
- **Location**: `src/components/CardNav.jsx`
- **Position**: Fixed at the top of the page
- **Features**: 
  - Animated hamburger menu
  - Expandable card-based navigation
  - GSAP animations
  - Responsive design

### 2. Header (Main Hero Section)
- **Location**: `src/components/Header/Header.jsx`
- **Features**:
  - Full viewport height
  - Threads WebGL animation background
  - Call-to-action buttons
  - Responsive design

### 3. Threads (WebGL Animation)
- **Location**: `src/components/Threads.jsx`
- **Features**:
  - Interactive WebGL animation
  - Mouse interaction support
  - Customizable colors and parameters

## 📦 Dependencies

- **React** - UI framework
- **Vite** - Build tool
- **GSAP** - Animation library
- **React Icons** - Icon library
- **OGL** - WebGL library

## 🚀 Adding New Sections

To add a new modular section (e.g., Testimonials, Footer, etc.):

### Step 1: Create Component Folder
```bash
src/components/YourSection/
├── YourSection.jsx
└── YourSection.css
```

### Step 2: Create Component File
```jsx
// src/components/YourSection/YourSection.jsx
import './YourSection.css';

const YourSection = () => {
  return (
    <section className="your-section">
      {/* Your content here */}
    </section>
  );
};

export default YourSection;
```

### Step 3: Import in App.jsx
```jsx
import YourSection from './components/YourSection/YourSection';

// Add to JSX
<YourSection />
```

## 🎯 Recommended Section Structure

For consistency, follow this pattern for new sections:

```
src/components/
├── Navbar/           # Navigation (✅ Done - CardNav)
├── Header/           # Hero section (✅ Done)
├── Features/         # Features showcase
├── About/            # About section
├── Services/         # Services offered
├── Portfolio/        # Work showcase
├── Testimonials/     # Customer reviews
├── Pricing/          # Pricing tables
├── Contact/          # Contact form
└── Footer/           # Footer section
```

## 🔌 Backend Integration (Future)

When ready to connect to a backend:

1. **API Calls**: Use `fetch` or `axios`
2. **State Management**: Consider Redux, Zustand, or Context API
3. **Database**: Supabase is recommended for quick setup
4. **Authentication**: Implement with Supabase Auth or similar

### Example API Integration
```jsx
// In your component
useEffect(() => {
  fetch('https://your-api.com/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

## 🎨 Styling Guidelines

- Each component has its own CSS file
- Global styles in `src/index.css`
- App-level styles in `src/App.css`
- Use CSS variables for consistent theming

## 📱 Responsive Design

All components should be responsive:
- Desktop: Full features
- Tablet: Adjusted layouts
- Mobile: Simplified, touch-friendly

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Current Features

✅ Fixed navigation bar with animations
✅ Hero section with WebGL background
✅ Responsive design
✅ Hot module replacement
✅ Modular component structure

## 📝 Next Steps

1. Add more sections as needed (provide the code)
2. Customize content and styling
3. Add backend integration
4. Implement routing (React Router)
5. Add forms and validation
6. Connect to database
7. Deploy to production

## 🎉 Ready to Go!

Your dev server is running at: **http://localhost:5173/**

The website features:
- Fixed navigation at the top
- Beautiful animated header with Threads
- Modular structure ready for expansion
- Hot reload for instant updates

