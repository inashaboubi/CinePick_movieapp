# Movie App React Project

A React-based movie application built with Vite that allows users to browse and search for movies.

## Tech Stack

- React + Vite
- React Router for navigation
- Modern CSS for styling

## Development

This project was created using Vite. Here are the available plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Copy `.env.example` to `.env.local` and set `VITE_TMDB_API_KEY` to your TMDB API key.
4. Run the development server: `npm run dev`.

Do not commit `.env.local` or share your API key. Vite client-side environment variables are included in the browser bundle, so this key is visible to users when the app is deployed.
