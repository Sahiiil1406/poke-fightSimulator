
# Project Setup Guide

This project uses **React** with **Vite** and **Tailwind CSS** for styling. Follow these instructions to contribute effectively, maintain modularity, and adhere to best practices.

## Workflow Guidelines

1. **Create a new branch:**
   - Whenever you start working on a new feature or section, **create a new branch** from the `main` branch. Use appropriate naming conventions for your branch.
     ```bash
     git checkout -b feature/your-feature-name
     ```

2. **Work in the repo:**
   - Make all your changes in the newly created branch. Never push directly to the `main` branch.
   
3. **Push changes:**
   - After your work is done, **push your branch to the repository**:
     ```bash
     git push origin feature/your-feature-name
     ```
     
4. **Create a pull request:**
   - Once you’ve pushed your code, create a **pull request** (PR) on GitHub to merge it into the `main` branch. This will allow for code review and validation before merging.

## Project Structure

To maintain clarity and ease of use, the project is organized as follows:

```
.
├── components/
│   ├── Button.jsx
│   ├── Header.jsx
│   └── Footer.jsx
├── constants/
│   ├── pageData.js
│   └── themeConfig.js
├── pages/
│   ├── HomePage/
│   │   ├── HeroSection.jsx
│   │   └── components
│   │        └── Features.jsx
│   ├── AboutPage/
│       ├── TeamSection.jsx
│       └── components
│            └── Features.jsx
│   
│     
├── App.jsx
├── index.jsx
└── tailwind.config.js
```

### Folder Explanation:

- **components/**: in the src directory Contains **generic and reusable components** that can be used across different pages (e.g., Buttons, Header, Footer).
  
- **constants/**: All static data like texts, theme configurations, and other reusable data should be stored here and imported where needed. This ensures that any changes to static data can be done in a single place.

- **pages/**: Each page has its own folder. Inside each page folder, you should further divide the UI into **sections** and **components** specific to that page.

### Best Practices:

- **Component Modularity**: Break down pages into smaller, **reusable** components that handle specific responsibilities.
  
- **Tailwind CSS**: Use Tailwind CSS as much as possible for styling. The project’s `tailwind.config.js` file contains **custom theme colors** and other configurations. Always refer to the configured colors when styling.
  
- **Code Reusability**: Keep components generic if they’re likely to be reused on multiple pages. Place such components in the root `components/` folder.

- **Code Organization**: Keep your code **well-organized** and **modular**. Each page should have its own directory with subcomponents for different sections of the page.

## Using Tailwind Theme Colors

Refer to the `tailwind.config.js` file for custom theme colors configured for this project. To apply a custom color, use the color class like this:

```html
<div className="bg-primary-blue-500 ">
  This is a custom-themed div.
</div>
```

### Example Tailwind Colors Configuration (in `tailwind.config.js`):

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ff5733',
        secondary: '#333399',
        accent: '#50c878',
      },
    },
  },
}
```

## Steps to Start the Project

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

