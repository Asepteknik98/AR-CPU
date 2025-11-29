# 🎮 GETTING STARTED - AR CPU

## Selamat Datang! 👋

Terima kasih telah memilih **AR CPU**! Aplikasi pembelajaran interaktif untuk visualisasi komponen komputer menggunakan teknologi Augmented Reality.

---

## ⚡ MULAI DALAM 5 MENIT

### Langkah 1: Jalankan Server (1 menit)

**Windows:**
```bash
# Double-click file: start.bat
# Atau buka PowerShell dan jalankan:
python -m http.server 8000
```

**macOS/Linux:**
```bash
# Terminal:
bash start.sh
# Atau:
python3 -m http.server 8000
```

**VS Code:**
1. Install extension "Live Server"
2. Right-click `index.html`
3. Pilih "Open with Live Server"

### Langkah 2: Buka Browser (30 detik)

Ketik di address bar:
```
http://localhost:8000
```

### Langkah 3: Explore! (2+ menit)

- ✅ Lihat halaman utama dengan animasi
- ✅ Scroll baca tentang komponen komputer
- ✅ Lihat informasi teknis
- ✅ Klik "Buka AR" untuk AR viewer

---

## 📚 DOKUMENTASI GUIDE

Pilih sesuai kebutuhan:

| Dokumentasi | Untuk | Waktu |
|-------------|-------|-------|
| **QUICKSTART.md** | Mulai cepat | 5 min |
| **setup-guide.md** | Setup lengkap | 30 min |
| **readme.md** | Dokumentasi lengkap | 20 min |
| **TECHNICAL.md** | Developer | 30 min |
| **MARKER_GUIDE.md** | AR marker setup | 15 min |

---

## 🎯 NEXT STEPS

### Untuk Testing AR (PENTING!)

Anda memerlukan 3 hal sebelum bisa test AR:

#### 1️⃣ Libraries (Automatic via CDN)
✅ Already included in HTML (CDN links)

#### 2️⃣ 3D Models (Placeholder)
⏳ Download dari Sketchfab:
- Visit: https://sketchfab.com
- Search: "Motherboard 3D GLB"
- Download model dalam format GLB
- Save ke folder: `assets/`

Lihat: `assets/README_ASSETS.md` untuk detail

#### 3️⃣ Marker (Placeholder)
⏳ Generate custom marker atau gunakan preset:
- **Quick**: Use HIRO preset (edit ar.html)
- **Custom**: Generate di https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html
- **Print**: 10cm x 10cm minimum

Lihat: `MARKER_GUIDE.md` untuk detail

---

## 🚀 QUICK COMMANDS

### Start Development Server
```bash
# Python
python -m http.server 8000

# Node.js
npx live-server

# PHP
php -S localhost:8000
```

### Access URLs
```
Home Page:     http://localhost:8000/
AR Page:       http://localhost:8000/ar.html
Docs:          http://localhost:8000/readme.md
```

---

## 🔍 FILE STRUCTURE

```
ar-cpu/
├── index.html              ← Halaman utama
├── ar.html                 ← AR viewer
├── style.css               ← Styling
├── script.js               ← JavaScript
│
├── 📖 Documentation
│   ├── readme.md
│   ├── QUICKSTART.md
│   ├── setup-guide.md
│   ├── TECHNICAL.md
│   ├── MARKER_GUIDE.md
│   └── ...
│
├── 📁 assets/              ← Model 3D (placeholder)
│   ├── motherboard.glb
│   ├── processor.glb
│   └── ... (17 models lagi)
│
├── 📁 marker/              ← AR marker
│   ├── marker.patt
│   └── marker.png
│
├── 📁 libs/                ← Libraries (CDN)
│   ├── aframe.min.js
│   └── arjs.min.js
│
└── 📁 qris/                ← QR/QRIS
    └── qris.png
```

---

## ⚠️ COMMON ISSUES

### Problem: Blank Screen
**Solution**: Check browser console (F12), see error message

### Problem: Camera not working
**Solution**: Allow camera access in browser settings

### Problem: Models not showing
**Solution**: Download real GLB files from Sketchfab, place in assets/

### Problem: Marker not detected
**Solution**: Generate custom marker, print at least 10cm x 10cm

Lihat **troubleshooting section** di readme.md untuk masalah lainnya.

---

## 💡 TIPS & TRICKS

### Performance
- Close other browser tabs
- Use latest browser version
- Enable hardware acceleration

### AR Testing
- Use adequate lighting
- Keep marker 20-50cm from camera
- Print marker with high quality
- Test in different lighting conditions

### Development
- Use browser DevTools (F12)
- Check console for errors
- Test on mobile device
- Use VS Code for better coding

---

## 🎓 Learning Path

### Beginner (Week 1)
- [ ] Setup development server
- [ ] Explore home page
- [ ] Read documentation
- [ ] Try AR viewer (with models)

### Intermediate (Week 2)
- [ ] Download 3D models
- [ ] Generate custom marker
- [ ] Setup AR properly
- [ ] Test all features

### Advanced (Week 3+)
- [ ] Customize HTML/CSS
- [ ] Modify JavaScript
- [ ] Add new components
- [ ] Deploy to production

---

## 🌐 DEPLOYMENT OPTIONS

When ready to go live:

1. **Netlify** (Easiest)
   - Connect GitHub repo
   - Auto-deploy
   - Free HTTPS

2. **Vercel** (Fast)
   - Drag & drop deploy
   - Automatic CDN
   - Analytics included

3. **GitHub Pages** (Free)
   - Push to GitHub
   - Enable Pages in settings
   - Access via github.io

4. **Custom Server** (Full Control)
   - Rent VPS
   - Setup Nginx/Apache
   - Configure domain

---

## 📞 NEED HELP?

### Resources
- 📖 Documentation: Read .md files
- 🎯 Official A-Frame: https://aframe.io/
- 🎯 Official AR.js: https://ar-js-org.github.io/AR.js-Docs/
- 💬 Communities: Discord, GitHub, Twitter

### Quick Fixes
1. Check browser console (F12)
2. Read error message
3. Google the error
4. Check documentation
5. Ask on community forums

---

## 🎉 READY?

Choose your path:

1. **👶 I want quick demo**
   → Read: QUICKSTART.md

2. **👨‍💼 I want full setup**
   → Read: setup-guide.md

3. **👨‍💻 I want to customize**
   → Read: TECHNICAL.md

4. **🎯 I have specific question**
   → Check: readme.md or MARKER_GUIDE.md

---

## 📋 COMPLETE CHECKLIST

- [ ] Start development server
- [ ] Open http://localhost:8000
- [ ] Explore home page
- [ ] Read QUICKSTART.md
- [ ] Download 3D models (assets folder)
- [ ] Setup marker (marker folder)
- [ ] Test AR functionality
- [ ] Customize if needed
- [ ] Deploy when ready

---

## 🎯 SUCCESS CRITERIA

✅ You're successful when:
- Web server running
- Home page displays correctly
- All links work
- AR page loads
- Camera permission works
- Marker can be detected (with models)
- Model 3D displays properly

---

**🚀 Let's get started! See you in the documentation!**

---

### File Shortcuts
- **QUICKSTART.md** - Quick setup guide
- **setup-guide.md** - Detailed setup
- **readme.md** - Full documentation
- **MARKER_GUIDE.md** - Marker instructions
- **TECHNICAL.md** - Technical details
