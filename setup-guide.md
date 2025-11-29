# SETUP GUIDE - AR CPU

## Panduan Setup Lengkap untuk Proyek AR CPU

### 📋 Checklist Setup

- [ ] Download semua file
- [ ] Setup web server lokal
- [ ] Download library (A-Frame & AR.js)
- [ ] Siapkan model 3D
- [ ] Generate atau siapkan marker
- [ ] Test di browser
- [ ] Deploy ke hosting

---

## 1️⃣ STEP 1: Download Libraries

### A-Frame Library (A-Frame WebXR Framework)

**Opsi 1: Download File**
```bash
# Download A-Frame
curl -o libs/aframe.min.js https://aframe.io/releases/1.4.0/aframe.min.js
```

**Opsi 2: Gunakan CDN (Recommended)**
Edit `ar.html` dan ganti:
```html
<!-- OLD -->
<script src="libs/aframe.min.js"></script>

<!-- NEW -->
<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
```

### AR.js Library

**Opsi 1: Download File**
```bash
# Download AR.js
curl -o libs/arjs.min.js https://cdn.jsdelivr.net/npm/ar.js@3/aframe/aframe-ar.min.js
```

**Opsi 2: Gunakan CDN (Recommended)**
Edit `ar.html` dan ganti:
```html
<!-- OLD -->
<script src="libs/arjs.min.js"></script>

<!-- NEW -->
<script src="https://cdn.jsdelivr.net/npm/ar.js@3/aframe/aframe-ar.min.js"></script>
```

---

## 2️⃣ STEP 2: Setup Web Server

### Option A: Menggunakan Python 3

**Windows:**
```bash
python -m http.server 8000
```

**macOS/Linux:**
```bash
python3 -m http.server 8000
```

### Option B: Menggunakan Node.js

**Install live-server:**
```bash
npm install -g live-server
```

**Jalankan:**
```bash
live-server
```

### Option C: Menggunakan PHP

**Windows/macOS/Linux:**
```bash
php -S localhost:8000
```

### Option D: Menggunakan VS Code Extension

1. Install extension "Live Server"
2. Klik kanan di `index.html`
3. Pilih "Open with Live Server"

---

## 3️⃣ STEP 3: Siapkan Model 3D

Model 3D harus dalam format `.glb` (GLTF Binary)

### Download Model 3D

**Sumber Model Gratis:**
- [Sketchfab](https://sketchfab.com/)
- [TurboSquid](https://www.turbosquid.com/)
- [CGTrader](https://www.cgtrader.com/)
- [Free3D](https://free3d.com/)

**Contoh Model CPU:**
1. Kunjungi [Sketchfab](https://sketchfab.com)
2. Cari "Computer Processor 3D Model"
3. Download versi GLB
4. Simpan ke folder `assets/processor.glb`

### Konversi Model Ke GLB

Jika model dalam format lain (FBX, OBJ, DAE):

**Menggunakan Online Tools:**
- [Babylon.js Sandbox](https://www.babylonjs-playground.com/)
- [Sketchfab Converter](https://sketchfab.com/)
- [Convertio](https://convertio.co/)

**Langkah Konversi:**
1. Upload file 3D model
2. Pilih format output: GLB
3. Download hasil konversi
4. Rename sesuai nama komponen
5. Simpan ke `assets/`

---

## 4️⃣ STEP 4: Setup Marker

### Opsi 1: Generate Custom Marker

**Menggunakan AR.js Marker Generator:**

1. Buka: https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html
2. Upload gambar (PNG/JPG) dengan:
   - Resolusi: minimum 512x512
   - Format: Square (1:1 aspect ratio)
   - Contrast: Tinggi
   - Tidak ada background yang compleks
3. Generate marker
4. Download 3 file:
   - `.patt` file → simpan ke `marker/marker.patt`
   - PNG preview → simpan ke `marker/marker.png`
5. Update path di `ar.html`:
```html
<a-marker 
    preset="custom" 
    type="pattern" 
    url="marker/marker.patt"
```

### Opsi 2: Download Marker Siap Pakai

**Marker dari Repository:**
1. Clone repository dengan marker siap pakai
2. Copy file `.patt` ke `marker/`
3. Copy preview PNG ke `marker/`

### Opsi 3: Gunakan Preset Marker

Edit `ar.html`:
```html
<!-- Ganti dari CUSTOM ke HIRO -->
<a-marker preset="hiro">
    <!-- Components inside -->
</a-marker>
```

**Preset Available:**
- `hiro` - Marker bawaan AR.js
- `kanji` - Marker kanji
- `custom` - Custom marker (patt file)

---

## 5️⃣ STEP 5: Print Marker

### Ukuran Marker
- **Minimum**: 10cm x 10cm
- **Optimal**: 15cm x 15cm
- **Maximum**: 30cm x 30cm

### Kualitas Print
- **DPI**: Minimum 300 DPI
- **Color**: Full color atau B&W
- **Paper**: Glossy atau Matte non-reflective
- **Lamination**: Recommended untuk durability

### Cara Print
1. Buka file `marker/marker.png`
2. Cetak dalam ukuran square
3. Pas-kan tepi dengan rapi
4. Laminate untuk durability
5. Mount pada rigid backing

### Test Marker
1. Arahkan kamera ke marker
2. Marker harus terdeteksi dalam 2-3 detik
3. Model 3D akan muncul di atas marker

---

## 6️⃣ STEP 6: Testing

### Test di Desktop
```bash
# 1. Jalankan web server
python -m http.server 8000

# 2. Buka browser
# http://localhost:8000

# 3. Navigasi ke halaman utama
# Verifikasi semua link berfungsi

# 4. Buka halaman AR
# http://localhost:8000/ar.html

# 5. Test dengan kamera web
```

### Test di Mobile
1. Pastikan mobile dan desktop di network sama
2. Find IP address komputer Anda:
   - Windows: `ipconfig` (cari IPv4 Address)
   - macOS/Linux: `ifconfig` (cari inet)
3. Di mobile, buka: `http://[IP-ADDRESS]:8000`
4. Izinkan akses kamera
5. Arahkan ke marker

### Debugging
- Buka Console: `F12` atau `Ctrl+Shift+I`
- Lihat error messages
- Check Network tab untuk failed requests
- Monitor performance di Performance tab

---

## 7️⃣ STEP 7: Troubleshooting

### ❌ Marker tidak terdeteksi
**Solusi:**
- Pastikan marker tercetak dengan jelas
- Lighting harus cukup terang
- Kamera harus dalam focus
- Marker tidak boleh reflective
- Coba dari jarak 20-50cm

### ❌ Model 3D tidak muncul
**Solusi:**
- Check browser console untuk error
- Verifikasi file GLB ada di `assets/`
- Path file harus benar
- Try refresh halaman
- Clear browser cache

### ❌ Camera tidak bekerja
**Solusi:**
- Izinkan akses kamera di settings browser
- Close aplikasi lain yang pakai kamera
- Restart browser
- Try browser lain
- Check hardware camera

### ❌ Web server tidak jalan
**Solusi:**
- Check port 8000 tidak digunakan
- Run dengan administrator privileges
- Try port berbeda: `python -m http.server 9000`
- Firewall mungkin block koneksi

### ❌ Performance lambat
**Solusi:**
- Close tab lain
- Use browser terbaru
- Kurangi jumlah model 3D
- Optimize model GLB size
- Disable browser extensions

---

## 8️⃣ STEP 8: Deploy ke Hosting

### Opsi 1: Deploy ke Netlify (FREE)

1. Push code ke GitHub
2. Connect Netlify ke GitHub repo
3. Set build command: (kosongkan)
4. Set publish directory: `./`
5. Deploy
6. Share link publik

### Opsi 2: Deploy ke Vercel

1. Connect Vercel ke GitHub
2. Import project
3. Vercel auto-detect Next.js
4. Deploy
5. Get production URL

### Opsi 3: Deploy ke GitHub Pages

1. Push code ke GitHub
2. Settings → Pages
3. Select: `main` branch, `root` folder
4. Save
5. Access via: `https://username.github.io/ar-cpu/`

### Opsi 4: Deploy ke Own Server

```bash
# 1. SSH ke server
ssh user@your-server.com

# 2. Clone repository
git clone https://github.com/yourname/ar-cpu.git

# 3. Install web server (Nginx/Apache)
# Setup dengan SSL certificate

# 4. Configure server untuk serve static files

# 5. Access via domain
https://yourdomain.com
```

---

## 📊 File Structure Checklist

```
project-ar-cpu/
├── ✅ index.html
├── ✅ ar.html
├── ✅ style.css
├── ✅ script.js
├── ✅ readme.md
├── ✅ setup-guide.md (file ini)
│
├── assets/
│   ├── ⏳ motherboard.glb (perlu download)
│   ├── ⏳ processor.glb (perlu download)
│   ├── ⏳ ram.glb (perlu download)
│   ├── ... (18 model lainnya)
│
├── marker/
│   ├── ⏳ marker.patt (perlu generate)
│   ├── ⏳ marker.png (perlu generate)
│
├── qris/
│   └── qris.png
│
└── libs/
    ├── ✅ aframe.min.js (atau CDN)
    └── ✅ arjs.min.js (atau CDN)
```

---

## ⭐ Tips & Tricks

### Performance Optimization
- Use CDN untuk libraries
- Compress model 3D dengan TinyGLTF
- Enable browser caching
- Minimize CSS/JS files
- Use image compression

### Better User Experience
- Add loading indicator
- Show helpful tooltips
- Responsive design
- Fast response time
- Smooth animations

### Advanced Features
- Multiple markers
- Physics simulation
- Particle effects
- Sound effects
- Analytics tracking

---

## 📚 Useful Resources

### Official Docs
- [A-Frame Documentation](https://aframe.io/docs/)
- [AR.js Official Docs](https://ar-js-org.github.io/AR.js-Docs/)
- [Three.js Docs](https://threejs.org/docs/)

### Tutorials
- [A-Frame School](https://aframe.io/school/)
- [AR.js Getting Started](https://ar-js-org.github.io/AR.js-Docs/en/Getting-started/)
- [WebGL Fundamentals](https://webglfundamentals.org/)

### Tools & Resources
- [Marker Generator](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)
- [GLB Viewer](https://www.babylonjs-playground.com/)
- [Model Free Resources](https://sketchfab.com/)

### Community
- [AR.js GitHub](https://github.com/AR-js-org/AR.js)
- [A-Frame Community](https://aframe.io/community/)
- [WebXR Discord](https://discord.gg/Jt5pfvx)

---

## 🎓 Learning Path

### Beginner (1-2 weeks)
- [ ] Setup environment
- [ ] Understand marker-based AR
- [ ] Learn A-Frame basics
- [ ] Setup first scene

### Intermediate (2-4 weeks)
- [ ] Add multiple models
- [ ] Setup interactions
- [ ] Optimize performance
- [ ] Deploy to web

### Advanced (4+ weeks)
- [ ] Custom marker generation
- [ ] Physics simulation
- [ ] Advanced animations
- [ ] Mobile optimization
- [ ] Analytics integration

---

## 🆘 Getting Help

Jika mengalami masalah:

1. **Check Console Error** (F12)
2. **Google Error Message**
3. **Check Documentation**
4. **Ask Community**
5. **Report Bug** (GitHub Issues)

---

**Happy Coding! 🚀**
