# Portfolio Template

A modern, responsive personal portfolio website built with **Vite**, **React**, and **Tailwind CSS**.

---

## 🚀 Features
- Fast and lightweight (Vite + React)
- Modern, clean UI with Tailwind CSS
- Fully responsive (desktop & mobile)
- Modular, reusable components (Projects, Skills, Education, Experience, etc.)
- **Data-driven:** All your content is managed in a single config file
- Easy to customize colors, fonts, and content
- Google Fonts integration
- Smooth anchor navigation and back-to-top button

---

## 🛠️ Getting Started

### 1. **Clone the repository**
```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Start the development server**
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view your portfolio.

---

## ✏️ How to Use & Customize

### All your content is in `src/portfolio.config.js`!

- **Edit your info:**
  - Change your name, description, social links, avatar, about text, skills, projects, education, and experience in `src/portfolio.config.js`.
- **Add or remove items:**
  - Just add or remove entries in the arrays (e.g., add more projects, skills, etc.). The UI will update automatically.
- **Change images:**
  - Place your images in the `public/images/` folder and update the path in the config file.
- **Change colors/fonts:**
  - Adjust Tailwind config and Google Fonts in `index.html` and `tailwind.config.js`.
- **Update social links:**
  - Edit the `hero.socials` array in the config for your GitHub, LinkedIn, Email, etc.

### Example: Add a new project
```js
// In src/portfolio.config.js
projects: [
  {
    title: "My New Project",
    description: "A cool new project!",
    github: "https://github.com/yourname/new-project",
  },
  // ...other projects
],
```

---

## 🔄 Updating the Template Safely

- **Keep your config file:**
  - All your personal content is in `src/portfolio.config.js`. When you pull template updates, your content will not be overwritten.
- **If the template adds new config fields:**
  - Just add those new fields to your config file as needed (check the template's example or release notes).

---

## 🏗️ Build for Production

```bash
npm run build
```
The output will be in the `dist/` folder.

---

## 📄 License

[MIT](LICENSE)
