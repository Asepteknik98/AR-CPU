# 🖨️ MARKER SETUP & PRINTING GUIDE

## 📌 Tentang Marker AR

Marker adalah pola visual yang dikenali oleh sistem AR untuk menampilkan model 3D di atasnya.

### Jenis Marker
1. **Pattern-based** (file .patt) - Pola custom
2. **Image-based** (gambar apapun) - Lebih fleksibel
3. **Preset** (HIRO, KANJI) - Built-in marker

**AR CPU menggunakan**: Pattern-based marker (.patt file)

---

## 🎯 OPSI 1: Gunakan Marker Bawaan (PALING MUDAH)

### Quick Setup
Edit file `ar.html`, baris dengan marker:

**Dari:**
```html
<a-marker preset="custom" type="pattern" url="marker/marker.patt">
```

**Menjadi:**
```html
<a-marker preset="hiro">
```

### Keuntungan
✅ Tidak perlu cetak marker
✅ Siap pakai langsung
✅ Akurat dan stabil

### Kerugian
❌ Marker sudah umum (bukan custom)
❌ Kurang personal

### Print Marker HIRO
Kalau ingin cetak marker HIRO:
1. Download dari: https://jeromeetienne.github.io/AR.js/data/images/HIRO.png
2. Cetak ukuran 10cm x 10cm
3. Gunakan langsung

---

## 🎨 OPSI 2: Generate Custom Marker (RECOMMENDED)

### Step-by-Step Guide

#### 1️⃣ Siapkan Gambar
- Ukuran: 512x512 px atau lebih
- Format: PNG atau JPG
- Karakteristik:
  - Contrast tinggi (hitam/putih)
  - Tidak ada background blur
  - Pola kompleks & distinct
  - No gradient/smooth areas

#### 2️⃣ Generate Marker
1. Buka: https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html
2. Upload gambar Anda
3. Tunggu processing (bisa 5-10 menit)
4. Download 3 file:
   - `.patt` file (pattern)
   - `.png` file (preview)
   - Readme/info

#### 3️⃣ Setup File
1. Rename file .patt menjadi: `marker.patt`
2. Copy ke folder: `marker/marker.patt`
3. Rename preview PNG menjadi: `marker.png`
4. Copy ke folder: `marker/marker.png`

#### 4️⃣ Update HTML
File `ar.html` sudah siap, tidak perlu edit jika:
- File patt bernama `marker.patt`
- File berada di folder `marker/`

### Recommended Images untuk Marker

**BAIK (Recommended):**
- ✅ QR code
- ✅ Barcode
- ✅ Geometric patterns
- ✅ Logo dengan contrast tinggi
- ✅ Checkerboard
- ✅ Binary patterns

**BURUK (Avoid):**
- ❌ Foto natural
- ❌ Gradient background
- ❌ Smooth surface
- ❌ Blurry image
- ❌ Terlalu kompleks

---

## 🖨️ PRINTING MARKER

### Ukuran Cetak
```
Minimum:   10cm x 10cm
Optimal:   15cm x 15cm (recommended)
Maximum:   30cm x 30cm
```

### Kualitas Print
| Parameter | Rekomendasi |
|-----------|------------|
| DPI | 300+ |
| Color | Full Color atau B&W |
| Paper | Glossy atau Matte |
| Finish | Non-reflective |
| Lamination | Optional (untuk durability) |

### Langkah Print

#### Menggunakan Printer Biasa

1. **Buka File**
   - File: `marker/marker.png`
   - Software: Paint, Photoshop, atau Preview

2. **Setup Print**
   - Ukuran: Custom (10cm x 10cm)
   - Skala: 100% (jangan auto-fit)
   - Orientasi: Portrait atau Landscape
   - Margin: 0.5cm all sides

3. **Print**
   - Quality: Highest/Best
   - Color: Full Color
   - Paper: Glossy/Matte Premium

4. **Post-Print**
   - Dry completely
   - Cut tepi rapi
   - Mount pada rigid backing (cardboard/foam)
   - Optional: Laminate untuk durability

#### Menggunakan Print Service

1. Upload file: `marker/marker.png`
2. Pilih ukuran: 10cm x 10cm
3. Pilih material: Glossy Paper atau Matte
4. Order & terima

### Lamination Tips

**Mengapa Laminate?**
- Tahan lama lebih lama
- Menghindari refleksi
- Lebih rigid
- Professional look

**Cara Laminate:**
1. Print marker
2. Dry completely
3. Laminate dengan thickness 250-300 micron
4. Cut tepi rapi
5. Mount pada backing

---

## 🎯 TESTING MARKER

### Di Desktop
1. Buka browser: `http://localhost:8000/ar.html`
2. Allow camera access
3. Arahkan webcam ke marker
4. Model 3D harus muncul dalam 2-3 detik

### Di Mobile
1. Buka link via mobile (same network)
2. Allow camera
3. Arahkan ke marker yang sudah diprint
4. Test dari berbagai sudut

### Troubleshooting

#### ❌ Marker tidak terdeteksi

**Solusi:**

| Problem | Solusi |
|---------|--------|
| Pencahayaan gelap | Tingkatkan brightness |
| Marker blur | Fokus kamera dengan baik |
| Marker miring | Letakkan di permukaan datar |
| Terlalu jauh | Posisi 20-50cm dari kamera |
| Tidak fokus | Manual focus atau move closer |

#### ❌ Deteksi intermittent

**Solusi:**
- Tingkatkan pencahayaan
- Print ulang dengan kualitas lebih baik
- Gunakan paper berkualitas tinggi
- Hapus glare/reflection

---

## 📏 Marker Quality Metrics

### Test Marker Accuracy

**Siapkan:**
- Marker printed
- Browser dengan AR
- Webcam
- Ruler/measurement tool

**Test Points:**
1. ✅ Detection at 20cm distance
2. ✅ Detection at 50cm distance
3. ✅ Detection at angle 30°
4. ✅ Detection at angle 60°
5. ✅ Continuous tracking (no jitter)
6. ✅ Fast detection (< 3 seconds)

**Hasil:**
- Semua test pass → Marker OK ✅
- Ada yang fail → Print ulang dengan kualitas lebih baik

---

## 🔄 Update/Replace Marker

### Ingin Ganti Marker?

1. Generate marker baru
2. Ganti file `marker/marker.patt`
3. Ganti file `marker/marker.png`
4. Refresh browser
5. Test dengan marker baru

### Masalah After Ganti

| Issue | Solusi |
|-------|--------|
| File tidak terdeteksi | Verifikasi path di HTML |
| Marker tidak work | Generate ulang |
| Model di posisi salah | Edit position di ar.html |
| Orientasi salah | Edit rotation di ar.html |

---

## 💡 Best Practices

### ✅ DO
- ✅ Print dengan kualitas tinggi
- ✅ Gunakan marker berkontras tinggi
- ✅ Mount pada backing rigid
- ✅ Keep marker clean
- ✅ Test sebelum deployment
- ✅ Have backup marker

### ❌ DON'T
- ❌ Print dengan resolusi rendah
- ❌ Gunakan paper tipis yang mudah bending
- ❌ Miring saat capture
- ❌ Pencahayaan yang buruk
- ❌ Glare/reflection pada marker
- ❌ Deform atau wrinkle marker

---

## 📊 Marker Comparison

| Aspek | Preset (HIRO) | Custom Pattern |
|-------|---------------|----------------|
| Setup | ⚡ Instant | ⏱️ 10 minutes |
| Personalisasi | ❌ No | ✅ Yes |
| Accuracy | ✅ Good | ✅✅ Better |
| Ease of Use | ✅✅ Easy | ✅ Medium |
| Cost | 💵 Free | 💵 Free |
| Print Required | ✅ If needed | ✅ Required |

---

## 🚀 Pro Tips

### Untuk Performance Optimal
1. Use high contrast marker
2. Print ukuran 15cm x 15cm
3. Mount pada rigid material
4. Keep marker clean
5. Adequate lighting

### Untuk Better Experience
1. Use matte paper (less reflection)
2. Laminate marker (durability)
3. Mount pada foam board (stability)
4. Have 2-3 printed copies (backup)
5. Test in different lighting conditions

### Untuk Production Use
1. Print batch dengan kualitas consistent
2. Quality check setiap marker
3. Store di tempat aman (tidak terkena air)
4. Label dengan date/version
5. Update marker setiap update aplikasi

---

## 📱 Mobile Testing

### Setup
1. IP komputer: `ipconfig`
2. Share link: `http://IP:8000/ar.html`
3. Both devices same WiFi network

### Tips
- Phone harus portrait mode
- Adequate lighting penting
- Marker harus 20-50cm dari kamera
- Smooth movement, jangan jerk
- Close unnecessary apps

---

**Siap? Mulai generate atau print marker Anda!** 🎉

Butuh bantuan? Lihat setup-guide.md atau technical.md
