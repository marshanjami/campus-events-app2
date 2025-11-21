# Campus Life Web App

A modern single-page application for managing campus events, built with vanilla JavaScript, HTML5, and CSS3.

**Course:** IST4035 Advanced Web Development  
**Upload:** 2 - Modules & State Management

---

## Features

* Single Page Application with hash-based routing
* Event listing with dynamic rendering
* Event submission form with validation
* Reactive state management
* Fully accessible (WCAG 2.1 AA compliant)
* Responsive design (mobile-first)
* Unit tested with Jest

---

## Tech Stack

* HTML5 (Semantic markup with ARIA)
* CSS3 (Grid, Flexbox, CSS Variables)
* JavaScript ES6+ (Modules, Classes)
* Jest (Testing)
* HTMLHint & Stylelint (Linting)

---

## Setup Instructions

### Prerequisites

* Node.js v18 or higher
* npm (comes with Node.js)

### Installation
```bash
# Navigate to project folder
cd campus-events-hub-project

# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev
```

Then open browser to: **http://localhost:3000**

---

## Available Scripts

* `npm run dev` - Start development server
* `npm test` - Run unit tests
* `npm run lint` - Run HTML and CSS linters

---

## Project Structure
```
campus-events-hub-project/
├── .github/
│   └── workflows/
│       └── lint.yml          # CI/CD configuration
├── public/
│   ├── css/
│   │   ├── tokens.css        # Design tokens
│   │   └── base.css          # Base styles
│   ├── js/
│   │   ├── main.js           # Entry point
│   │   ├── router.js         # Routing logic
│   │   ├── state.js          # State management
│   │   ├── ui.js             # UI rendering
│   │   ├── utils.js          # Utility functions
│   │   ├── api.js            # API layer
│   │   └── a11y.js           # Accessibility
│   └── index.html            # Main HTML
├── tests/
│   ├── utils.test.js         # Utils tests
│   └── state.test.js         # State tests
├── jest.config.js            # Jest config
├── package.json              # Dependencies
└── README.md                
```

---

## Architecture

### Module Structure
```
main.js (entry point)
  ├─→ router.js
  │     ├─→ state.js
  │     └─→ ui.js ─→ utils.js
  └─→ a11y.js
```

### Design Patterns

* **Observer Pattern** - State management with subscribers
* **Module Pattern** - ES6 imports/exports
* **Pure Functions** - Testable utilities

---

## Accessibility

* Semantic HTML with proper heading hierarchy
* Keyboard navigation with skip link
* ARIA labels and live regions
* Color contrast meets WCAG AA standards
* Screen reader tested

---

## Security

* XSS prevention with HTML escaping
* Input validation on all forms
* No use of `eval()` or unsafe methods
* Controlled state mutations

---

## Performance

* ES6 module-based code splitting
* Deferred script loading
* Efficient rendering with event delegation
* CSS loaded in `<head>` for progressive rendering

---

## Browser Support

* Chrome 90+
* Firefox 88+
* Safari 14+
* Edge 90+

---

## Testing

### Run Tests
```bash
npm test
```

### Test Coverage

* **utils.js**: 100% (5 tests)
* **state.js**: 100% (6 tests)
* **Overall**: ~85%


---

## Known Issues

* Events reset on page reload (persistence coming in Upload 3)
* Mock API only (real API in Upload 3)
* Limited filtering options (enhancement planned)

---

## Future Roadmap

### Upload 3
* External API integration
* LocalStorage/IndexedDB persistence
* Advanced filtering and search
* Loading states and error handling

### Upload 4
* Enhanced security measures
* Performance optimizations
* Code splitting
* Full CI/CD pipeline



