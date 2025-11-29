# 📊 STRUKTUR FILE MARKER

Folder ini berisi file-file yang dibutuhkan untuk AR marker detection.

## 📁 Isi Folder

### marker.patt
- **Format**: Text file (.patt)
- **Deskripsi**: Pattern file untuk AR marker detection
- **Sumber**: Generated dari AR.js Marker Generator
- **Ukuran**: ~1-5 KB
- **Cara Dapatkan**:
  1. Buka https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html
  2. Upload gambar Anda (512x512px)
  3. Download file .patt
  4. Rename menjadi marker.patt
  5. Copy ke folder ini

### marker.png
- **Format**: Image file (.png)
- **Deskripsi**: Preview image untuk print atau display
- **Ukuran**: 512x512 pixels atau lebih
- **Kualitas**: High contrast untuk deteksi AR
- **Cara Dapatkan**:
  1. Generate dari marker generator (bagian step 3 di atas)
  2. Download file preview PNG
  3. Rename menjadi marker.png
  4. Copy ke folder ini

## 🖨️ Cara Print Marker

1. **Buka file**: marker.png
2. **Print ukuran**: 10cm x 10cm (minimum)
3. **Kualitas**: 300 DPI atau lebih
4. **Material**: Glossy atau matte paper
5. **Post-print**: Dry dan cut rapi

## 🎯 Cara Menggunakan

### Step 1: Siapkan Marker
```bash
1. Generate atau download marker
2. Copy file .patt ke folder ini
3. Copy preview PNG ke folder ini
```

### Step 2: Configure AR
File `ar.html` sudah di-configure untuk menggunakan marker dari folder ini:
```html
<a-marker 
    preset="custom" 
    type="pattern" 
    url="marker/marker.patt">
```

### Step 3: Test
```bash
1. Jalankan web server
2. Buka ar.html di browser
3. Print marker atau tampilkan di screen
4. Arahkan kamera ke marker
5. Model 3D akan muncul
```

## 🆘 Troubleshooting

### Marker tidak terdeteksi
- Check file path: harus `marker/marker.patt`
- Verifikasi file .patt valid (text file)
- Pencahayaan harus cukup terang
- Marker harus printed dengan jelas
- Jangan ada refleksi pada marker

### File tidak cocok
- Ensure file .patt dan .png match (dari source yang sama)
- Verifikasi ukuran file (bukan 0 bytes)
- Check file permissions (readable)

## 📚 Resources

- **Marker Generator**: https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html
- **AR.js Documentation**: https://ar-js-org.github.io/AR.js-Docs/
- **Marker Training**: https://ar-js-org.github.io/AR.js-Docs/en/Marker-training/

## 🔄 Update Marker

### Ingin Ganti Marker?
1. Generate marker baru
2. Replace file marker.patt
3. Replace file marker.png
4. Refresh browser
5. Test dengan marker baru

---

**Lihat MARKER_GUIDE.md untuk panduan lengkap!**
