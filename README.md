# Retro Kanban Board

A Vue.js Kanban board application with a retro/synthwave design aesthetic. This is a demonstration-only project that resets to its default state on page refresh (no data persistence).

## Features

- Three default columns: 'To Do', 'In Progress', and 'Done'
- Pre-populated with sample tasks in each column
- Add new tasks with a title and optional description
- Drag-and-drop tasks between columns
- Edit and delete existing tasks
- Retro/synthwave design with neon colors and effects

## Technologies Used

- Vue 3 with Composition API
- Vuedraggable for drag-and-drop functionality
- Pinia for state management
- Tailwind CSS for styling
- Vite as the build tool

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/retro-kanban.git
   cd retro-kanban
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the application for production:

```
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```
   vercel
   ```

3. For production deployment:
   ```
   vercel --prod
   ```

## Project Structure

- `src/components/` - Vue components
- `src/stores/` - Pinia stores
- `src/style.css` - Global styles and Tailwind configuration
- `public/` - Static assets

## License

MIT

## Acknowledgements

- Inspired by synthwave/vaporwave aesthetics
- Built with Vue.js and Tailwind CSS
