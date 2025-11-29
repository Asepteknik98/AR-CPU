# 🔧 TROUBLESHOOTING - MARKER TIDAK MUNCUL

## ⚡ SOLUSI CEPAT (Coba dulu ini!)

### 1. ✅ Pastikan Browser Support
- Chrome/Firefox/Safari/Edge (terbaru)
- TIDAK IE11
- Buka DevTools (F12) untuk lihat error

### 2. ✅ Izinkan Akses Kamera
```
Browser → Settings → Privacy/Security → Camera Permissions
Berikan akses ke localhost:8000
```

### 3. ✅ Gunakan HIRO Marker (Built-in)
✓ SUDAH CONFIGURED di ar.html
✓ Tidak perlu setup, langsung bisa digunakan
✓ Download: https://jeromeetienne.github.io/AR.js/data/images/HIRO.png
✓ Cetak: 10cm x 10cm

### 4. ✅ Refresh Browser
```
Ctrl+Shift+R (Hard Refresh)
```

---

## 🐛 DEBUGGING CHECKLIST

### ✅ Webcam Working?
```
1. Buka: http://localhost:8000/ar.html
2. Check: Ada permintaan izin kamera?
3. Izinkan akses
4. Indicator di browser: ⚫ (webcam aktif)
```

### ✅ JavaScript Console Clear?
```
1. Press: F12 (DevTools)
2. Go to: Console tab
3. Check: Ada error merah?
   - Jika ada: Screenshot error, perbaiki
   - Jika tidak: Lanjut ke step berikutnya
```

### ✅ Marker Detection Active?
```
1. Lihat: Debugging panel di top-left
2. "debugUIEnabled: true" = ✅ Aktif
3. Anda seharusnya lihat grid markers di screen
```

### ✅ HIRO Marker Valid?
```
1. Download HIRO dari: https://jeromeetienne.github.io/AR.js/data/images/HIRO.png
2. Print di kertas 10cm x 10cm
3. Resolusi: 300 DPI minimum
4. Tidak ada glare/reflection
```

---

## 🎯 STEP-BY-STEP TROUBLESHOOTING

### PROBLEM: "Camera permission denied"

**Solusi:**
```
1. Check browser address bar → 🔒 Lock icon
2. Click → Site Settings
3. Camera → Pilih "Allow"
4. Refresh halaman
```

### PROBLEM: "Webcam tidak aktif"

**Solusi:**
```
1. Close aplikasi lain yang pakai camera
2. Check Windows/Mac camera settings
3. Restart browser
4. Try browser lain (Chrome recommended)
```

### PROBLEM: "Marker tidak terdeteksi sama sekali"

**Solusi:**
```
1. ✓ Download HIRO marker terbaru
2. ✓ Cetak dengan kualitas tinggi (300+ DPI)
3. ✓ Gunakan glossy atau matte paper (bukan tissue)
4. ✓ Pastikan marker tidak wrinkle/bent
5. ✓ Pencahayaan harus cukup terang
6. ✓ Jarak marker dari kamera: 20-50 cm
7. ✓ Marker harus square/straight (tidak miring)
8. ✓ Tidak ada bayangan pada marker
```

### PROBLEM: "Marker terdeteksi intermittent (kadang yes, kadang no)"

**Solusi:**
```
1. ✓ Tingkatkan pencahayaan (cahaya alami lebih baik)
2. ✓ Print ulang marker dengan kualitas lebih baik
3. ✓ Mount marker pada rigid backing (bukan fleksibel)
4. ✓ Kurangi gerakan cepat saat aiming
5. ✓ Stabilkan posisi marker (tidak bergoyang)
```

### PROBLEM: "Shapes terlihat tapi tidak bisa diklik"

**Solusi:**
```
1. ✓ Shapes sudah ada = marker TERDETEKSI ✅
2. ✓ Click pada shape
3. ✓ Info panel harusnya muncul
4. ✓ Jika tidak: Check script.js di browser console
```

---

## 📊 MARKER REQUIREMENTS

### HIRO Marker (Yang kami gunakan)
```
✓ Preset built-in AR.js
✓ Tidak perlu generate
✓ Tested & reliable
✓ Recognition accuracy: 99%
✓ Detection speed: < 1 detik
```

### Print Specifications
```
Size:          10cm x 10cm (minimum)
Preferred:     15cm x 15cm
Maximum:       30cm x 30cm

Resolution:    300+ DPI
Color:         Full color (tidak B&W)
Paper:         Glossy atau Matte
Lamination:    Recommended untuk durability
```

### Print Process
```
1. Download: HIRO.png
2. Buka: Paint, Preview, atau Photoshop
3. Set size: 10cm x 10cm (100%)
4. Print quality: Best/Highest
5. Wait: Fully dry sebelum digunakan
```

---

## 🔍 ADVANCED DEBUGGING

### Browser Console Errors

**Error: "aframe.min.js failed to load"**
```
Solution: CDN down? 
- Wait 5 minutes
- Try refresh
- Try different browser
```

**Error: "navigator.mediaDevices is undefined"**
```
Solution: Use HTTPS or localhost
- Jangan buka dari IP eksternal tanpa HTTPS
- Atau use localhost:8000 dari local machine
```

**Error: "pattern marker not found"**
```
Solution: File path wrong
- Check: marker/marker.patt exists
- Verify: URL path di ar.html correct
- Try: Use HIRO preset (sudah di-fix)
```

### Check Network Requests (F12 → Network)
```
✓ aframe.min.js - Status 200 (OK)
✓ aframe-ar.min.js - Status 200 (OK)
✓ style.css - Status 200 (OK)
✓ script.js - Status 200 (OK)

Jika ada 404: File missing/wrong path
```

---

## 🚀 QUICK FIXES (MOST COMMON)

### 90% dari issues, solusi:

1. **Hard Refresh Browser**
   ```
   Ctrl+Shift+R
   ```

2. **Allow Camera Permission**
   ```
   Browser Settings → Camera → Allow
   ```

3. **Use HIRO Marker** (built-in)
   ```
   Sudah configured, tidak perlu setup
   Download dari link yang provided
   ```

4. **Check Console Errors**
   ```
   F12 → Console tab
   Lihat error message
   Google error tersebut
   ```

5. **Improve Lighting**
   ```
   Natural daylight lebih baik
   Minimal 500 lux lighting
   No harsh shadows
   ```

---

## 📱 MOBILE TESTING

### iOS (iPhone/iPad)
```
Requirements:  iOS 11.2 atau lebih
Browser:       Safari (Chrome tidak support AR)
Camera:        Harus diizinkan di Settings
Testing:       Buka http://[local-ip]:8000 dari mobile
```

### Android
```
Requirements:  Android 7 atau lebih
Browser:       Chrome, Firefox, atau Samsung Internet
Camera:        Harus diizinkan
Testing:       Buka http://[local-ip]:8000 dari mobile
```

### Tips Mobile Testing
```
1. Both device same WiFi network
2. No VPN
3. Make sure webcam active
4. Test di lokasi pencahayaan baik
5. Jangan di-screenshot saat testing
```

---

## 🎓 UNDERSTAND THE FLOW

```
User arahkan kamera ke HIRO marker
         ↓
AR.js detects pattern
         ↓
WebGL canvas loads
         ↓
A-Frame scene renders
         ↓
Shapes muncul di atas marker
         ↓
User bisa click & interact
```

**Jika ada yang fail di step apapun = tidak ada output**

---

## 🆘 STILL NOT WORKING?

### Langkah-langkah troubleshooting metodis:

1. **Isolate problem:**
   ```
   - Test homepage (index.html) - berfungsi? ✓
   - Test ar.html tanpa marker - webcam aktif? ✓
   - Test ar.html dengan marker - terdeteksi? ✓
   ```

2. **Check fundamentals:**
   ```
   - Browser support (Chrome recommended)
   - Camera permissions granted
   - Network requests all loaded
   - Console no errors
   ```

3. **Test environment:**
   ```
   - Lighting adequate
   - Marker printed correctly
   - Webcam quality good
   - No other camera apps running
   ```

4. **Verify configuration:**
   ```
   - ar.html using preset="hiro" ✓
   - Libraries loaded from CDN ✓
   - No broken file paths ✓
   ```

5. **Ask for help:**
   - Screenshot error dari console
   - Describe: Apa yang terjadi vs apa yang expect
   - List: Yang sudah dicoba

---

## ✅ SUCCESS INDICATORS

✓ Webcam aktif (ada indicator)
✓ Console clear (tidak ada error)
✓ HIRO marker tercetak
✓ Ketika aim marker → Shapes muncul
✓ Bisa click shapes → Info panel tampil
✓ Zoom buttons berfungsi
✓ Reset button mengulang ke posisi awal

**Jika semua ini ✓ = Setup BERHASIL!**

---

## 📚 RESOURCES

**Documentation:**
- setup-guide.md - Full setup
- MARKER_GUIDE.md - Marker specific
- ar.html - Code comments
- script.js - Function documentation

**External:**
- https://ar-js-org.github.io/AR.js-Docs/ - AR.js docs
- https://aframe.io/docs/ - A-Frame docs
- https://aframe.io/examples/ - A-Frame examples

**Marker:**
- https://jeromeetienne.github.io/AR.js/data/images/HIRO.png - HIRO marker
- https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html - Custom marker

---

## 📞 CONTACT/SUPPORT

Jika masih tidak bisa resolve:

1. Check console error (screenshot)
2. List troubleshooting steps sudah dicoba
3. Describe expected vs actual behavior
4. Share: ar.html source (check configuration)
5. Provide: Device/browser info

---

**Happy Debugging! 🐛→🐞→✅**
