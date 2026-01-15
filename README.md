# Twitter Clone – Bird Logo Showcase

A front-end **Twitter clone** inspired by the classic Twitter layout, built to demonstrate different ways of using the **Twitter bird logo** with **SVG, Canvas, and PNG**. This project focuses on **interactive previews, copy-to-clipboard functionality, and download features** for images and graphics.

---

## 🖥️ Website Preview

<img width="1197" height="840" alt="Website Preview" src="https://github.com/user-attachments/assets/7ecf82ea-5c11-42fd-bcd8-339ccd21f3d4" />

🔗 **Live Demo:** [https://bacarnik.github.io/twitter-bird-logo/](https://bacarnik.github.io/twitter-bird-logo/)

---

## ✨ Features

- Classic **Twitter-style layout** with header, navigation, content grid, sidebar, and footer  
- Twitter bird logo available in **multiple formats**:
  - **PNG** (static image)  
  - **SVG** (scalable vector graphic with copy-to-clipboard functionality)  
  - **Canvas** (rendered dynamically via JavaScript)  
- Interactive **topic cards**:
  - Click to preview the logo in a modal (SweetAlert2)  
  - **Download PNG or SVG** directly  
  - **Copy SVG code** or **Canvas drawing commands** to clipboard  
- Fully responsive **grid layout** for topics  
- Clean and organized **HTML, CSS, and JavaScript structure**

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure  
- **CSS3** – Styling, flexbox, grid layouts, responsive design  
- **JavaScript (ES6)** – DOM manipulation, event listeners, Canvas API, clipboard and download functionality  
- **SweetAlert2** – Modal previews for topics  
- **SVG** – Scalable vector graphics for logos  
- **Canvas API** – Dynamic drawing of Twitter bird  
- **GitHub Pages** – Hosting the live demo

---

## 📂 Project Structure 
```
 twitter-bird-logo/
│
├─ index.html
├─ README.md
├─ LICENSE │
├─ css/
│   └─ style.css
│ ├─ scripts/
│   ├─ categories.js
│   ├─ init.js
│   ├─ topic-preview.js
│   └─ twitter-logo-canvas.js
│ └─ images/
    ├─ twitter_bird.png
    ├─ twitter.svg
    ├─ Twitter_bird.xcf
```

---

---

## 💡 How It Works

1. **Topic Cards** – Each card represents a Twitter bird in a different format.  
2. **Click Preview** – Opens a SweetAlert2 modal:
   - PNG: shows the image and allows downloading  
   - SVG: shows the logo as a PNG preview but copy returns full SVG code  
   - Canvas: shows the drawing and copy returns the exact JS canvas commands  
3. **Copy & Download** – Uses `navigator.clipboard` and `Blob` objects for reliable cross-browser support.  

---

## 🎯 Goals / Learning Outcomes

- Understanding differences between **raster (PNG)** and **vector (SVG)** graphics  
- Learning to **render graphics on HTML canvas** dynamically  
- Implementing **copy-to-clipboard and download features** for web graphics  
- Building **interactive UI elements** with modals (SweetAlert2)  
- Structuring a **front-end project** with reusable components  

---

## 🐦 Disclaimer

This project is **for educational purposes only**.  
Twitter name, logo, and branding belong to **Twitter / X Corp**.  

---

## 🔧 Potential Enhancements

- Generate **HD previews** of canvas and SVG images  
- Add **drag & zoom** functionality for topic previews  
- Implement **realistic Twitter feed UI** with posts and interactions  
- Add **animations** to the Twitter bird via Canvas or SVG  

---
