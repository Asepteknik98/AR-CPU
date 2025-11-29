# 🚀 QUICK START GUIDE

Mulai menggunakan AR CPU dalam 5 menit!

## 1️⃣ Persiapan Awal (2 menit)

### Download Proyek
```bash
# Clone atau download ZIP
git clone <your-repo-url>
cd ar-cpu
```

### Setup Web Server
```bash
# Opsi 1: Python
python -m http.server 8000

# Opsi 2: Live Server di VS Code
# - Install extension "Live Server"
# - Right-click index.html → "Open with Live Server"

# Opsi 3: Node.js
npx live-server
```

## 2️⃣ Akses Aplikasi (30 detik)

Buka browser ke:
```
http://localhost:8000
```

## 3️⃣ Jelajahi Halaman Utama (2 menit)

- ✅ Lihat hero section dengan animasi 3D cube
- ✅ Scroll ke bawah melihat komponen-komponen
- ✅ Baca informasi teknis setiap komponen
- ✅ Cek fitur aplikasi dan tentang aplikasi

## 4️⃣ Test AR (perlu marker)

### A. Siapkan Marker
```bash
1. Buka: marker/marker.png
2. Cetak ukuran 10cm x 10cm
3. (ATAU gunakan marker HIRO bawaan)
```

### B. Buka Halaman AR
- Klik tombol "Buka AR" atau navigasi ke `/ar.html`
- Izinkan akses kamera
- Arahkan ke marker

### C. Kontrol Model
- 🔄 **Reset**: Kembalikan ke posisi awal
- ➕ **Zoom In**: Perbesar model
- ➖ **Zoom Out**: Perkecil model
- 🏷️ **Labels**: Tampilkan label
- 🏠 **Home**: Kembali ke halaman utama

## 📱 Test di Mobile

1. Dapatkan IP komputer: `ipconfig`
2. Di mobile (same network):
```
http://192.168.x.x:8000
```
3. Izinkan kamera
4. Arahkan ke marker

## 🎯 Next Steps

### Untuk Customization
1. Baca `setup-guide.md`
2. Download model 3D untuk `assets/`
3. Generate marker custom
4. Edit HTML/CSS sesuai kebutuhan

### Untuk Deployment
1. Setup hosting (Netlify, Vercel, atau VPS)
2. Upload files
3. Configure domain
4. Test di production

### Untuk Development
1. Understand A-Frame & AR.js
2. Modifikasi `ar.html` untuk add komponen
3. Update `style.css` untuk styling
4. Enhance `script.js` untuk interaksi

## ⚠️ Common Issues

### Marker tidak terdeteksi
- Pastikan pencahayaan terang
- Marker harus tercetak jelas
- Posisi marker tidak di-tilt/miring

### Camera tidak bekerja
- Izinkan akses kamera di browser
- Gunakan HTTPS (tidak HTTP)
- Restart browser

### Model tidak muncul
- Check browser console (F12)
- Pastikan file GLB ada di `assets/`
- Refresh halaman

## 📚 Resources

- 📖 **README**: Dokumentasi lengkap
- 📋 **SETUP GUIDE**: Panduan setup detail
- 🎓 **Quick Start**: File ini
- 💻 **CODE**: Lihat source code

## 🎓 Learning Resources

- [A-Frame Getting Started](https://aframe.io/docs/master/introduction/)
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- [WebGL Fundamentals](https://webglfundamentals.org/)

---

**Enjoy exploring AR CPU! 🎉**
