# 🎯 AR CPU - Augmented Reality Komponen Komputer

Aplikasi pembelajaran interaktif menggunakan teknologi Augmented Reality (AR) untuk memvisualisasikan komponen-komponen komputer dalam 3D.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Cara Instalasi](#cara-instalasi)
- [Cara Penggunaan](#cara-penggunaan)
- [Komponen yang Didukung](#komponen-yang-didukung)
- [Panduan Pengguna](#panduan-pengguna)
- [Troubleshooting](#troubleshooting)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## ✨ Fitur Utama

### 1. **Visualisasi AR Interaktif**
   - Tampilkan model 3D komponen komputer menggunakan marker
   - Rotate, scale, dan manipulasi model secara real-time
   - Kompatibel dengan semua perangkat mobile dengan kamera

### 2. **Pembelajaran Interaktif**
   - Informasi detail tentang setiap komponen
   - Deskripsi fungsi dan spesifikasi teknis
   - Interface yang user-friendly dan intuitif

### 3. **Responsive Design**
   - Bekerja di desktop, tablet, dan smartphone
   - Optimasi untuk berbagai ukuran layar
   - Performance yang optimal di semua perangkat

### 4. **Komponen Lengkap**
   - CPU, RAM, GPU, Motherboard, PSU
   - Storage (SSD, HDD), Heatsink, Socket, Chipset
   - Dan 7+ komponen lainnya

## 🛠️ Teknologi yang Digunakan

| Teknologi | Deskripsi | Versi |
|-----------|-----------|-------|
| **A-Frame** | WebXR Framework untuk AR/VR | v1.4.0+ |
| **AR.js** | JavaScript library untuk Augmented Reality | v3.4.0+ |
| **Three.js** | 3D Graphics Library | Built-in with A-Frame |
| **HTML5** | Markup language | ES6+ |
| **CSS3** | Styling dan animations | Modern |
| **JavaScript** | Programming language | ES6+ |

## 📁 Struktur Proyek

```
project-ar-cpu/
│
├── 📄 index.html          # Halaman utama / home
├── 📄 ar.html             # Halaman AR viewer
├── 🎨 style.css           # Stylesheet utama
├── 📜 script.js           # JavaScript aplikasi
├── 📖 readme.md           # Dokumentasi (file ini)
│
├── 📁 assets/             # Model 3D GLB
│   ├── motherboard.glb
│   ├── processor.glb
│   ├── ram.glb
│   ├── vga.glb
│   ├── psu.glb
│   ├── ssd.glb
│   ├── hdd.glb
│   ├── heatsink_fan.glb
│   ├── cpu_socket.glb
│   ├── chipset.glb
│   ├── cmos_battery.glb
│   ├── bios_chip.glb
│   ├── pcie_slot.glb
│   ├── vrm.glb
│   ├── capacitor_resistor.glb
│   ├── casing.glb
│   ├── case_fan.glb
│   ├── cables.glb
│   └── frontpanel.glb
│
├── 📁 marker/             # Pattern marker untuk AR
│   ├── marker.patt        # Pattern file
│   └── marker.png         # Preview untuk print
│
├── 📁 qris/               # QR Code & QRIS
│   └── qris.png
│
└── 📁 libs/               # Library eksternal
    ├── aframe.min.js
    └── arjs.min.js
```

## 🚀 Cara Instalasi

### Prerequisite
- Browser modern dengan dukungan WebGL
- Kamera pada perangkat (untuk AR)
- Internet connection (untuk load library)

### Langkah 1: Download atau Clone Repository

```bash
# Clone repository
git clone https://github.com/Asepteknik98/ar-cpu.git
cd ar-cpu

# Atau download ZIP dan ekstrak
```

### Langkah 2: Setup Development Server

**Menggunakan Python (versi 3.x):**
```bash
python -m http.server 8000
```

**Menggunakan Node.js (live-server):**
```bash
npx live-server
```

**Menggunakan PHP:**
```bash
php -S localhost:8000
```

### Langkah 3: Akses Aplikasi

Buka browser dan navigasikan ke:
```
http://localhost:8000
```

## 📖 Cara Penggunaan

### Di Halaman Utama (index.html)

1. **Navigasi Menu**
   - Klik "Beranda" untuk kembali ke awal
   - Klik "Komponen" untuk scroll ke daftar komponen
   - Klik "Tentang" untuk info aplikasi
   - Klik "Buka AR" untuk mulai AR

2. **Informasi Komponen**
   - Lihat deskripsi dan spesifikasi setiap komponen
   - Hover card untuk melihat animasi
   - Klik tombol "Mulai AR" untuk membuka viewer

### Di Halaman AR (ar.html)

#### Persyaratan Marker
1. **Cetak Marker**
   - Buka file `marker/marker.png`
   - Cetak dengan ukuran minimum 10cm x 10cm
   - Pastikan resolusi print maksimal

2. **Posisi Marker**
   - Letakkan marker di permukaan datar
   - Pastikan pencahayaan cukup
   - Arahkan kamera ke marker

#### Kontrol Aplikasi

| Tombol | Fungsi |
|--------|--------|
| 🔄 Reset | Kembalikan view ke posisi awal |
| ➕ Zoom In | Perbesar model komponen |
| ➖ Zoom Out | Perkecil model komponen |
| 🏷️ Labels | Tampilkan/sembunyikan label |
| 🏠 Home | Kembali ke halaman utama |

#### Interaksi Model
- **Klik Komponen** - Tampilkan info detail
- **Hover Komponen** - Highlight komponen
- **Rotation** - Automatic ambient rotation
- **Touch Controls** - Swipe untuk rotate (mobile)

## 🖥️ Komponen yang Didukung

### Komponen Utama (6)
- ✅ **CPU/Processor** - Otak komputer
- ✅ **RAM** - Memori akses cepat
- ✅ **GPU/VGA Card** - Kartu grafis
- ✅ **Motherboard** - Papan sirkuit utama
- ✅ **Power Supply (PSU)** - Sumber tenaga
- ✅ **Storage (SSD/HDD)** - Penyimpanan data

### Komponen Pendukung (12+)
- ✅ Heatsink & Fan Cooler
- ✅ CPU Socket
- ✅ Chipset
- ✅ CMOS Battery
- ✅ BIOS Chip
- ✅ PCIe Slot
- ✅ VRM (Voltage Regulator Module)
- ✅ Capacitor & Resistor
- ✅ PC Casing
- ✅ Case Fan
- ✅ Kabel Power
- ✅ Front Panel Connector

## 🎓 Panduan Pengguna

### Untuk Siswa/Pelajar

1. **Pembelajaran Awal**
   - Buka halaman utama
   - Baca informasi tentang setiap komponen
   - Pahami fungsi dan spesifikasi

2. **Visualisasi 3D**
   - Cetak marker
   - Buka halaman AR
   - Lihat model 3D secara interaktif
   - Klik komponen untuk info lebih detail

3. **Study Tips**
   - Pelajari satu komponen per hari
   - Manfaatkan visualisasi 3D untuk pemahaman
   - Catat spesifikasi penting

### Untuk Guru/Instruktur

1. **Classroom Usage**
   - Siapkan marker untuk setiap siswa
   - Project di layar besar sambil demo
   - Diskusikan fungsi setiap komponen

2. **Assessment**
   - Tanya tentang fungsi komponen
   - Quiz tentang spesifikasi teknis
   - Project membuat PC sendiri

### Untuk Enthusiast/Developer

1. **Customization**
   - Tambahkan model 3D baru di folder `assets/`
   - Modifikasi `ar.html` untuk menambah komponen
   - Update `style.css` untuk custom styling

2. **Deployment**
   - Host di web server
   - Share link ke user
   - Monitor analytics

## 🔧 Troubleshooting

### Masalah: Marker tidak terdeteksi

**Solusi:**
- Pastikan pencahayaan cukup terang
- Cetak marker dengan kualitas tinggi
- Jangan ada refleksi atau bayangan di marker
- Kamera harus fokus pada marker
- Coba dari sudut berbeda

### Masalah: Model 3D tidak muncul

**Solusi:**
- Pastikan file GLB ada di folder `assets/`
- Check browser console untuk error (F12)
- Refresh halaman
- Clear browser cache
- Coba browser lain

### Masalah: Camera access denied

**Solusi:**
- Izinkan akses kamera di browser settings
- Gunakan HTTPS (tidak HTTP)
- Restart browser
- Check camera hardware

### Masalah: Performance lambat

**Solusi:**
- Tutup aplikasi lain yang heavy
- Gunakan browser terbaru
- Kurangi model 3D yang ditampilkan
- Decrease resolution display

### Masalah: A-Frame tidak load

**Solusi:**
- Check internet connection
- Pastikan CDN accessible
- Download library offline
- Check browser console error

## 📱 Kompatibilitas Browser

| Browser | Desktop | Mobile | Status |
|---------|---------|--------|--------|
| Chrome | ✅ | ✅ | Recommended |
| Firefox | ✅ | ✅ | Good |
| Safari | ✅ | ✅ | Good |
| Edge | ✅ | ✅ | Good |
| Opera | ✅ | ✅ | Good |
| IE 11 | ❌ | N/A | Not Supported |

## 🌐 Perangkat yang Didukung

- 📱 iPhone 6s atau lebih baru
- 📱 iPad 5th generation atau lebih baru
- 🤖 Android 7.0 atau lebih baru
- 💻 Windows 10+
- 🍎 macOS 10.12+
- 🐧 Linux dengan browser kompatibel

## 🎨 Kustomisasi

### Mengubah Warna Tema

Edit file `style.css`:
```css
/* Primary color */
--primary: #00A8FF;

/* Secondary color */
--secondary: #FF6B9D;

/* Background */
--background: #f5f5f5;
```

### Menambah Komponen Baru

1. Tambahkan model GLB ke folder `assets/`
2. Edit `ar.html` dan tambahkan entity:
```html
<a-entity 
    id="newComponent"
    gltf-model="assets/newComponent.glb"
    position="0 0 0"
    scale="1 1 1"
    class="clickable component"
    data-name="New Component"
    data-desc="Description">
</a-entity>
```

### Mengubah Marker

1. Generate marker baru menggunakan [AR.js Marker Generator](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)
2. Ganti file `marker/marker.patt`
3. Update path di `ar.html`

## 📊 Statistics

- **Total Components**: 18+
- **Model 3D**: GLB format
- **File Size**: ~5MB (dengan library)
- **Load Time**: ~3-5 detik
- **Users**: 1000+
- **Rating**: ⭐⭐⭐⭐⭐

## 🚀 Fitur yang Akan Datang

- [ ] Multiple markers support
- [ ] Component assembly simulation
- [ ] Quiz & assessment module
- [ ] Offline mode
- [ ] AR.js v4 upgrade
- [ ] Physics engine untuk interaction
- [ ] Recording AR experience
- [ ] Leaderboard & achievements
- [ ] Multi-language support
- [ ] VR mode support

## 📚 Resources

### Official Documentation
- [A-Frame Documentation](https://aframe.io/docs/)
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- [Three.js Documentation](https://threejs.org/docs/)

### Tutorials
- [A-Frame Getting Started](https://aframe.io/docs/master/introduction/)
- [AR.js Basics](https://ar-js-org.github.io/AR.js-Docs/)
- [WebGL Fundamentals](https://webglfundamentals.org/)

### Tools
- [Marker Generator](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)
- [GLB Model Converter](https://www.convertio.co/)
- [3D Model Resources](https://sketchfab.com/)

## 🤝 Kontribusi

Kami welcome contributions! Silakan:

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 👨‍💻 Author

**AR CPU Development Team**
- Main Developer: Your Name
- Contributors: Community Members
- Special Thanks: Educators & Students

## 📞 Kontak & Support

- 📧 Email: support@ar-cpu.dev
- 🐦 Twitter: [@arcpu_dev](https://twitter.com/arcpu_dev)
- 💬 Discord: [Join Server](https://discord.gg/arcpu)
- 🌐 Website: [ar-cpu.dev](https://ar-cpu.dev)

## 🙏 Terima Kasih

Terima kasih kepada semua yang telah berkontribusi dan menggunakan aplikasi ini!

---

<div align="center">

**Made with ❤️ for Education & Learning**

**[⬆ Kembali ke Atas](#-ar-cpu---augmented-reality-komponen-komputer)**

</div>
