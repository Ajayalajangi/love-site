# 💖 Love Dedication Website

A beautiful, colorful, joyful React website dedicated to your love — because she wrote you a book, and you're building her a world.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Install & Run
```bash
npm install
npm start
```
Opens at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
Outputs to `/build` folder — ready to deploy to GitHub Pages, Netlify, Vercel, etc.

---

## 🎨 Customization Guide

### 1. Replace Placeholders
Search for these placeholders in `src/App.js` and replace them:

| Placeholder     | Replace With          |
|-----------------|-----------------------|
| `[Her Name]`    | Her actual name       |
| `[Your Name]`   | Your name             |
| `[Book Title]`  | Title of her book     |
| `[Your Date]`   | Your anniversary date |
| `[Your Song]`   | Your song together    |
| `[Special Place]` | Your special place  |

### 2. Add Real Photos
Replace `.photo-placeholder` divs with actual `<img>` tags:

```jsx
// Before
<div className="photo-placeholder">
  <span>📸</span>
  <p>Your Photo Here</p>
</div>

// After
<img src="/photos/our-photo.jpg" alt="Us together" className="hero__photo" />
```

Put your photos in the `public/photos/` folder.

### 3. Edit the Love Letter
In `src/App.js`, find the `Letters` component and rewrite the paragraphs in your own words.

### 4. Edit the Timeline
Find the `milestones` array in the `Story` component and update the dates and descriptions.

### 5. Edit the Reasons
Find the `reasons` array in the `Memories` component and add your own personal reasons.

---

## 📁 File Structure
```
love-site/
├── public/
│   ├── index.html
│   └── photos/          ← Put your photos here
├── src/
│   ├── App.js           ← All components
│   ├── App.css          ← All styles
│   └── index.js         ← Entry point
├── package.json
└── README.md
```

---

## 🌐 Deploy Free
- **Netlify**: Drag & drop the `build/` folder at netlify.com
- **Vercel**: `npx vercel` in the project folder
- **GitHub Pages**: Push to GitHub, enable Pages in settings

---

Made with 💖 for the person who wrote you a book.
