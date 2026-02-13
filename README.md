# Parkee Anime App

A modern React anime discovery application powered by the [Kitsu API](https://kitsu.docs.apiary.io/).  
Built with **React 19**, **Vite**, and **Styled Components**, following a clean feature-based architecture.

Live URL: https://parkee-anime-app.vercel.app/

---

## Preview

| Desktop | Mobile |
|---------|--------|
| <img width="1265" height="767" alt="image" src="https://github.com/user-attachments/assets/68127e29-f64b-41c4-8be6-d4c0c3cda75a" />   | <img width="433" height="775" alt="image" src="https://github.com/user-attachments/assets/55a8c718-4eac-4e94-8171-f1f848c033b0" /> |





---

## Features

- Display anime list on initial load (10 items per page)
- Custom pagination logic (no third-party pagination library)
- Navigate to anime detail page
- Show anime image, English & Japanese titles
- View detailed anime information:
  - Image
  - English title
  - Japanese title
  - Synopsis
  - Rating
- Debounced search functionality
- Loading skeleton and error handling
- Responsive mobile-first design
- Clean feature-based architecture
- Reusable components and custom hooks

---

## Tech Stack

- **Frontend:** React 19 (JavaScript)
- **Styling:** Styled Components (CSS-in-JS)
- **Routing:** React Router DOM
- **HTTP Client:** Native Fetch API
- **Build Tool:** Vite
- **Deployment:** Vercel
- **API:** Kitsu REST API

---

## Project Structure
```
src/
├─ components/ # Reusable global UI components
│ ├─ ui/
│ ├─ layout/
│ ├─ icons/
│
├─ features/
│ ├─ anime-list/
│ │ ├─ components/ # Anime list specific components
│ │ ├─ hooks/ # useAnimeList hook
│ │
│ ├─ anime-detail/
│ │ ├─ components/ # Anime detail specific components
│ │ ├─ hooks/ # useAnimeDetail hook
│
│─ router/ # route configuration
├─ services/ # API layer (kitsuApi.js)
├─ styles/ # Global styles and theme setup
├─ App.jsx # Application routes
└─ main.jsx # Entry point
```
---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` or copy `env.sample` file at the root:

```env
VITE_BASE_URL=https://kitsu.io/api/edge
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```
---

## Functional Requirements Coverage

### 1. Anime List Page
- Shows anime list on initial load
- Displays 10 anime per page
- Implements custom pagination logic
- Clicking an item navigates to detail page
- Each item shows:
  - Poster image
  - English title
  - Japanese title
 
### 2. Anime Detail Page
- Displays selected anime detail
- Shows:
  - Image
  - English & Japanese titles
  - Synopsis
  - Rating
- Provides navigation back to anime list

### 3. Architecture & Best Practices
- Feature-based folder structure for scalability
- Custom hooks for data fetching abstraction
- Separation between UI and API logic
- Styled Components with ThemeProvider support
- Reusable and modular UI components
- Loading and error state handling
- Debounce optimization for search
- Clean and maintainable code structure
