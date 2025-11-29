# 🎯 BUKA PROJECT DI VS CODE

Panduan untuk membuka dan bekerja dengan AR CPU di Visual Studio Code.

## ⚡ QUICK START (Paling Mudah)

### 1️⃣ Buka VS Code

```bash
# Windows
code "c:\Users\rofiq\Downloads\ar-cpu"

# Mac/Linux
code ~/Downloads/ar-cpu
```

Atau:
1. Buka VS Code
2. File → Open Folder
3. Navigasi ke: `ar-cpu`
4. Klik Open

### 2️⃣ Install Live Server Extension

1. Ctrl+Shift+X (Extensions)
2. Search: "Live Server"
3. Install oleh Ritwick Dey
4. Click Install

### 3️⃣ Start Development Server

1. Right-click `index.html`
2. "Open with Live Server"
3. Browser otomatis membuka

---

## 🔧 RECOMMENDED EXTENSIONS

### Essential Extensions

| Extension | ID | Purpose |
|-----------|----|---------| 
| **Live Server** | ritwickdey.LiveServer | Preview files |
| **Prettier** | esbenp.prettier-vscode | Format code |
| **ESLint** | dbaeumer.vscode-eslint | JavaScript linting |
| **HTML Snippets** | abusaidm.html-snippets | HTML completion |

### Optional Extensions

| Extension | ID | Purpose |
|-----------|----|---------| 
| **CSS Peek** | pranaygp.vscode-css-peek | CSS reference |
| **Thunder Client** | rangav.vscode-thunder-client | API testing |
| **GitLens** | eamodio.gitlens | Git integration |
| **REST Client** | humao.rest-client | REST client |

### Install All Extensions

```bash
# Install via Terminal (PowerShell)
code --install-extension ritwickdey.LiveServer
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension abusaidm.html-snippets
code --install-extension pranaygp.vscode-css-peek
```

---

## 📁 VS CODE PROJECT STRUCTURE

Struktur yang akan Anda lihat di Explorer:

```
ar-cpu/
├── 📄 .gitignore
├── 📄 index.html              ← Start here
├── 📄 ar.html
├── 📄 style.css
├── 📄 script.js
├── 📄 readme.md
├── 📄 QUICKSTART.md           ← Read this
├── 📁 assets/
├── 📁 marker/
├── 📁 libs/
└── 📁 qris/
```

---

## 💻 USEFUL VS CODE COMMANDS

### Navigation
```
Ctrl+P          - Quick file open
Ctrl+F          - Find in file
Ctrl+H          - Find & replace
Ctrl+/          - Toggle comment
Alt+Up/Down     - Move line
```

### Editing
```
Ctrl+Shift+L    - Multi-line select
Ctrl+D          - Select word
Ctrl+Alt+C      - Copy line
Ctrl+Shift+K    - Delete line
Alt+Shift+F     - Format document (Prettier)
```

### Live Server
```
F1              - Command palette
"Go Live"       - Start server
"Stop Live"     - Stop server
```

---

## 🔍 FILE EDITING QUICK REFERENCE

### Edit Homepage (index.html)
```
1. Ctrl+P → index.html
2. Scroll ke section yang ingin diedit
3. Buat perubahan
4. Save: Ctrl+S
5. Browser refresh otomatis (Live Server)
```

### Edit Styling (style.css)
```
1. Ctrl+P → style.css
2. Ctrl+F → search color atau property
3. Edit value
4. Save: Ctrl+S
5. Browser refresh otomatis
```

### Edit Script (script.js)
```
1. Ctrl+P → script.js
2. Find function dengan Ctrl+F
3. Edit logic
4. Save: Ctrl+S
5. Browser refresh & test
```

---

## 🔗 OPEN FILES IN TABS

Cara membuka multiple files:

### Method 1: Quick Open
```
Ctrl+P
Type: filename
Enter
```

### Method 2: From Explorer
```
1. Click folder di Explorer (left panel)
2. Click file yang ingin dibuka
3. Double-click untuk permanent tab
```

### Useful Key Bindings
```
Ctrl+Tab        - Switch antar tabs
Ctrl+Shift+Tab  - Switch backwards
Ctrl+W          - Close tab
Ctrl+K W        - Close all tabs
```

---

## 📝 TERMINAL INTEGRATION

Buka terminal di VS Code:

```
Ctrl+`          - Toggle terminal
```

**Di Terminal, jalankan:**

```bash
# Start dev server (jika Live Server tidak digunakan)
python -m http.server 8000

# Git commands
git status
git add .
git commit -m "message"

# NPM commands (jika diperlukan)
npm install
npm start
```

---

## 🐛 DEBUGGING

### JavaScript Debugging

1. F5 untuk launch debugger
2. Set breakpoint (click line number)
3. Step through code (F10/F11)
4. View variables di Debug panel

### Console Debugging

1. Open browser DevTools: F12
2. Check Console tab untuk errors
3. Use console.log() di script.js

---

## 🎨 WORKSPACE SETTINGS

### Customize VS Code untuk project:

**Create `.vscode/settings.json`:**

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

## 🚀 DEVELOPMENT WORKFLOW

### Typical Workflow:

```
1. Open project di VS Code
2. Live Server: Right-click index.html → "Open with Live Server"
3. Browser opens automatically
4. Edit files di VS Code
5. Save (Ctrl+S) → Browser refresh otomatis
6. Test di browser → Adjust if needed
7. Repeat steps 4-6 until done
8. Save final version
9. Git push jika perlu
```

---

## 📋 PROJECT STRUCTURE BREAKDOWN

### Key Files to Know:

```
index.html
  ↓ Homepage dengan navigation
  └─ Contains: hero, components, features, footer

ar.html
  ↓ AR viewer page
  └─ Contains: A-Frame scene, markers, controls

style.css
  ↓ All styling & animations
  └─ Organized by sections (navbar, hero, etc)

script.js
  ↓ Interactivity & AR functions
  └─ Functions: initARPage(), handleMarker(), etc

Documentation/
  ↓ 9 .md files dengan berbagai panduan
  └─ readme.md → main reference
```

---

## ✅ VERIFICATION CHECKLIST

After opening in VS Code:

- [ ] All files visible di Explorer
- [ ] No red errors di file
- [ ] Extensions installed
- [ ] Live Server works
- [ ] Browser opens automatically
- [ ] Changes reflect on save
- [ ] Can navigate all sections

---

## 🆘 COMMON ISSUES

### Issue: "Extension not found"
**Solution**: Install extension di Marketplace

### Issue: "Port 5500 already in use"
**Solution**: Stop other servers atau change port

### Issue: "File not found in browser"
**Solution**: Check file path, ensure file exists

### Issue: Changes not reflecting
**Solution**: Hard refresh (Ctrl+Shift+R)

---

## 💡 TIPS & TRICKS

### Speed up Development:

1. **Use Emmet Abbrev** di HTML
   ```
   div.container > div.item*3
   ```

2. **IntelliSense** - Auto-complete
   ```
   Ctrl+Space untuk suggestions
   ```

3. **Multi-cursor** editing
   ```
   Ctrl+D untuk multi-select
   Ctrl+Alt+Down untuk banyak cursor
   ```

4. **Minimap** - Visual code navigation
   ```
   Right panel: minimap viewer
   ```

---

## 🎓 VS CODE SHORTCUTS CHEATSHEET

| Command | Shortcut |
|---------|----------|
| Quick Open | Ctrl+P |
| Find | Ctrl+F |
| Find Replace | Ctrl+H |
| Terminal | Ctrl+` |
| New Terminal | Ctrl+Shift+` |
| Format Document | Alt+Shift+F |
| Go to Line | Ctrl+G |
| Toggle Sidebar | Ctrl+B |
| Command Palette | Ctrl+Shift+P |
| Toggle Comment | Ctrl+/ |
| Expand Selection | Shift+Alt+Right |
| Shrink Selection | Shift+Alt+Left |

---

## 🔄 VERSION CONTROL (GIT)

### Basic Git Integration:

1. **Initialize Git**
   ```
   Ctrl+Shift+P → "Git: Initialize"
   ```

2. **Commit Changes**
   ```
   Ctrl+Shift+G → Staged changes → Commit message
   ```

3. **View Changes**
   ```
   Click file di Source Control → see diff
   ```

---

## 📱 TEST ON DIFFERENT SCREEN SIZES

Gunakan responsive design mode:

```
F12 → Click device toggle icon
```

Test pada:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

---

## 🎉 YOU'RE ALL SET!

Sekarang Anda siap untuk:
- ✅ Edit semua files
- ✅ Live preview perubahan
- ✅ Debug dengan mudah
- ✅ Manage dengan Git
- ✅ Deploy ke production

---

**Happy Coding! 🚀**

Lanjut? Baca: QUICKSTART.md atau GETTING_STARTED.md
