# How to View Your Todo List Website Locally 🖥️

## Problem
When you click `index.html` directly, Windows may redirect you or show the wrong content.

## Solution: Use a Local Web Server

### Option 1: Python HTTP Server (Currently Running! ✅)
```powershell
cd c:\Users\Samri\Downloads\Todo-list\todo-list-website\build
python -m http.server 8000
```

Then open in your browser:
- **Main Page**: http://localhost:8000/index.html
- **Accomplishments**: http://localhost:8000/accomplishments.html

**A server is currently running for you!** Check VS Code's Simple Browser or open the URLs above in Chrome/Edge.

### Option 2: VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Node.js Server
```powershell
npx http-server ./build -p 8000
```

### Option 4: Direct File Access
If you must open the file directly:
1. Open Chrome/Edge
2. Press `Ctrl + O`
3. Navigate to: `c:\Users\Samri\Downloads\Todo-list\todo-list-website\build\index.html`

---

## Deploy to GitHub Pages (Recommended!)

To view it online permanently:

```powershell
cd c:\Users\Samri\Downloads\Todo-list\todo-list-website
npm run deploy
```

After 1-2 minutes, visit:
**https://Shiroe28.github.io/personaltodolist**

---

## Current Status ✅

- ✅ Website fully functional
- ✅ All features working (localStorage, calculator, notepad, etc.)
- ✅ Build folder ready for deployment
- ✅ HTTP server running on port 8000

---

## What's Working:

1. **Todo List** - Add, complete, delete, move tasks
2. **LocalStorage** - Tasks persist after refresh
3. **Accomplishments** - Separate page for completed goals
4. **Calculator** - Fully functional
5. **Notepad** - Auto-saves notes
6. **Live Clock** - Real-time date & time
7. **Responsive Design** - Works on all devices

---

## To Stop the Server:
Press `Ctrl + C` in the terminal running the Python server.
