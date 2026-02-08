# 🎮 TACTICAL PORTFOLIO - SETUP INSTRUCTIONS

## 📥 HOW TO DOWNLOAD THE CODE

### Method 1: Using Figma Make Export (Recommended)
1. In Figma Make, click the **Download** button (usually in the top-right corner)
2. Select **Download as ZIP file**
3. Save the ZIP file to your computer
4. Extract/Unzip the file to a folder of your choice

### Method 2: Copy Files Manually
If there's no download button, you can copy each file:
1. Create a new folder on your computer (e.g., `tactical-portfolio`)
2. Copy each file from Figma Make and save it with the same path structure

---

## 💻 HOW TO RUN ON YOUR PC

### Prerequisites
Before you start, you need to have **Node.js** installed on your computer.

**Check if you have Node.js:**
```bash
node --version
```

**If you don't have Node.js:**
1. Go to https://nodejs.org/
2. Download the **LTS version** (Long Term Support)
3. Install it following the setup wizard

---

### Step-by-Step Setup

#### 1. Open Terminal/Command Prompt
- **Windows**: Press `Win + R`, type `cmd`, press Enter
- **Mac**: Press `Cmd + Space`, type `terminal`, press Enter
- **Linux**: Press `Ctrl + Alt + T`

#### 2. Navigate to Your Project Folder
```bash
cd path/to/your/tactical-portfolio
```
*Replace `path/to/your/tactical-portfolio` with the actual path where you extracted the files*

**Example:**
- Windows: `cd C:\Users\YourName\Desktop\tactical-portfolio`
- Mac/Linux: `cd ~/Desktop/tactical-portfolio`

#### 3. Install Dependencies
```bash
npm install
```
*This will download all the required packages. It may take 2-5 minutes.*

#### 4. Start the Development Server
```bash
npm run dev
```

#### 5. Open in Browser
After running the command, you'll see a message like:
```
  Local:   http://localhost:5173/
```

Open your browser and go to: **http://localhost:5173/**

---

## 🎨 CUSTOMIZING YOUR PORTFOLIO

### 1. Update Personal Information

**Hero Section** (`/components/TacticalHero.tsx`):
- Line 92: Change "Your tagline here" to your actual tagline
- Line 95: Change "Your Name" to your actual name

**Contact Section** (`/components/TacticalContact.tsx`):
- Lines 32-34: Update email, phone, and location
- Lines 38-40: Update social media links

### 2. Add Your Projects

**Projects Section** (`/components/TacticalProjects.tsx`):
- Replace "SAMPLE PROJECT #1, #2, etc." with your actual project names
- Add project descriptions, technologies used, and links

### 3. Update Resume/Work Experience

**Resume Section** (`/components/TacticalResume.tsx`):
- Lines 13-30: Update education information
- Lines 32-59: Update work experience
- Lines 61-83: Update certifications

### 4. Add Blog Posts/Testimonials

**Blog Section** (`/components/TacticalBlog.tsx`):
- Lines 11-44: Update blog posts
- Lines 46-62: Update client testimonials

---

## 🚀 BUILDING FOR PRODUCTION

When you're ready to deploy your portfolio:

```bash
npm run build
```

This creates an optimized production build in the `/dist` folder.

---

## 🎯 THEME SWITCHER

Your portfolio has TWO themes:
- **STEALTH MODE**: Black background, white text (dark theme)
- **LIGHT MODE**: White background, black text (light theme)

The theme switcher is in the top-right corner of the navigation bar.

---

## 🛠️ COMMON ISSUES & FIXES

### Issue: "npm: command not found"
**Fix**: You need to install Node.js first (see Prerequisites above)

### Issue: Port 5173 is already in use
**Fix**: Either:
1. Close the other app using that port, OR
2. The dev server will automatically use a different port (like 5174)

### Issue: Changes not showing up
**Fix**: 
1. Save your file (Ctrl+S / Cmd+S)
2. Refresh your browser (F5)
3. If still not working, stop the server (Ctrl+C) and run `npm run dev` again

---

## 📁 PROJECT STRUCTURE

```
tactical-portfolio/
├── components/          # All React components
│   ├── TacticalHero.tsx
│   ├── TacticalAbout.tsx
│   ├── TacticalProjects.tsx
│   ├── TacticalBlog.tsx
│   ├── TacticalResume.tsx
│   └── TacticalContact.tsx
├── styles/
│   └── globals.css      # Global styles and theme
├── App.tsx              # Main app component
├── package.json         # Project dependencies
└── README.md            # This file
```

---

## 🎓 TIPS FOR YOUR TEACHER PRESENTATION

1. **Show Both Themes**: Toggle between Stealth and Light mode
2. **Demonstrate Responsiveness**: Resize the browser window
3. **Hover Effects**: Show the interactive elements
4. **Easy to Customize**: Explain that all content is in simple text format
5. **Wireframe Approach**: Emphasize that it's a template ready for content

---

## 📞 NEED HELP?

If you encounter any issues:
1. Make sure Node.js is installed correctly
2. Delete `node_modules` folder and `package-lock.json`, then run `npm install` again
3. Check that all files were downloaded properly
4. Make sure you're in the correct folder when running commands

---

## ✅ SUCCESS CHECKLIST

- [ ] Node.js installed
- [ ] Project folder created
- [ ] Files extracted/copied
- [ ] Terminal/Command Prompt opened
- [ ] Navigated to project folder (`cd` command)
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Portfolio opens in browser (http://localhost:5173)

---

**MISSION STATUS: READY FOR DEPLOYMENT** 🎯

Good luck with your presentation! 🚀
