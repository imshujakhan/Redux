# Counter App with Redux

A counter application demonstrating Redux Toolkit state management with multiple features and privacy toggle.

## Features

- Increment/Decrement counter
- Add/Subtract custom values
- Privacy toggle (hide/show counter)
- Multiple Redux slices
- Bootstrap UI

## Tech Stack

- React 19 + Vite
- Redux Toolkit (state management)
- Bootstrap 5 (styling)

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── DisplayCounter.jsx  # Counter display
│   ├── Controls.jsx        # Action buttons
│   ├── Privacy.jsx         # Privacy toggle
│   ├── Header.jsx          # App header
│   └── Container.jsx       # Layout wrapper
└── store/
    ├── counter.js          # Counter slice
    ├── privacy.js          # Privacy slice
    └── Index.js            # Store configuration
```

## Redux Store

**Counter Slice**:
- `increment`: +1
- `decrement`: -1
- `add`: Add custom value
- `subtract`: Subtract custom value

**Privacy Slice**:
- `toggle`: Show/hide counter

## Learning Focus

Perfect for understanding:
- Redux Toolkit setup
- Multiple slices
- Action dispatching
- State subscription
