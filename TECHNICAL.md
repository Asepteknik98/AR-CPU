# 🔧 TECHNICAL DOCUMENTATION

## Arsitektur Aplikasi

```
AR CPU Application
├── Frontend Layer
│   ├── index.html (Home Page)
│   ├── ar.html (AR Viewer)
│   ├── style.css (Styling & Animations)
│   └── script.js (Interactivity)
│
├── Framework Layer
│   ├── A-Frame (WebXR)
│   └── AR.js (AR Library)
│
├── Graphics Layer
│   ├── Three.js (3D Graphics)
│   └── Babylon.js (optional)
│
└── Asset Layer
    ├── Model 3D (GLB format)
    ├── Marker Pattern (PATT file)
    └── Styling Assets (CSS, Fonts)
```

## Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling & animations
- **JavaScript ES6+**: Interactive features
- **FontAwesome**: Icons library

### WebXR & AR
- **A-Frame**: Entity-component-system (ECS) framework
- **AR.js**: Marker-based AR
- **Three.js**: WebGL abstraction

### Assets
- **GLB/GLTF**: 3D model format
- **PNG/JPG**: Images & textures
- **PATT**: AR marker pattern file

## File Structure & Purpose

### Root Files
```
index.html       → Home page dengan navigasi dan info
ar.html          → AR viewer dengan marker detection
style.css        → Central styling untuk semua halaman
script.js        → JavaScript untuk interactivity
readme.md        → Full documentation
setup-guide.md   → Setup instructions
QUICKSTART.md    → Quick start guide
```

### Assets Folder
```
assets/
├── motherboard.glb    → Motherboard model
├── processor.glb      → CPU model
├── ram.glb            → RAM memory model
├── vga.glb            → Graphics card model
├── psu.glb            → Power supply model
├── ssd.glb            → SSD storage model
├── hdd.glb            → HDD storage model
├── heatsink_fan.glb   → Cooling solution model
├── cpu_socket.glb     → Socket model
├── chipset.glb        → Chipset model
├── cmos_battery.glb   → CMOS battery model
├── bios_chip.glb      → BIOS chip model
├── pcie_slot.glb      → PCIe slot model
├── vrm.glb            → VRM model
├── capacitor_resistor.glb → Passive components
├── casing.glb         → PC case model
├── case_fan.glb       → Case fan model
├── cables.glb         → Power cables model
└── frontpanel.glb     → Front panel IO model
```

### Marker Folder
```
marker/
├── marker.patt   → AR pattern file
└── marker.png    → Preview image for printing
```

### Libraries Folder
```
libs/
├── aframe.min.js → A-Frame library (or use CDN)
└── arjs.min.js   → AR.js library (or use CDN)
```

## Component Details

### Home Page (index.html)

#### Navigation Bar
- Brand logo & name
- Navigation links (Home, Components, About, AR)
- Sticky positioning
- Responsive mobile menu

#### Hero Section
- Animated 3D cube
- Main CTA button
- Gradient background
- Responsive layout

#### Components Section
- Grid of 6 main components
- Card hover effects
- Technical specifications
- Interactive elements

#### Features Section
- 4 key features
- Icon & description
- Grid layout
- Hover animations

#### About Section
- Application info
- Technology stack
- Usage instructions
- Links & resources

#### Footer
- Links & navigation
- Social media
- Copyright info
- Support links

### AR Page (ar.html)

#### AR Scene
```html
<a-scene>
  ├── Camera (for AR positioning)
  ├── Marker (pattern-based detection)
  │   └── Components Group
  │       ├── Motherboard
  │       ├── Processor
  │       ├── RAM
  │       ├── GPU/VGA
  │       ├── PSU
  │       ├── SSD
  │       ├── HDD
  │       ├── Heatsink
  │       ├── CPU Socket
  │       └── Other components...
  └── Sky (background)
</a-scene>
```

#### UI Elements
- **Info Panel**: Menampilkan detail komponen
- **Control Panel**: Zoom, reset, toggle labels
- **Loading Indicator**: Show during initialization
- **Instruction Panel**: User guidance

## JavaScript Functionality

### Global App Object
```javascript
app = {
    currentComponent: null,
    showLabels: true,
    components: [],
    initialScale: 1
}
```

### Key Functions

#### Initialization
```javascript
initARPage()              → Initialize AR page
setupARComponents()       → Setup interactive components
setupControlPanelButtons() → Setup control buttons
```

#### User Interactions
```javascript
showComponentInfo()       → Display component information
rotateComponent()         → Rotate 3D model
scaleComponent()          → Scale component size
```

#### Event Handlers
```javascript
handleMarkerDetected()    → Marker found
handleMarkerLost()        → Marker lost
```

## CSS Architecture

### Color Scheme
```css
Primary Blue:    #00A8FF
Secondary Pink:  #FF6B9D
Dark Text:       #1a1a1a
Light Text:      #555
Background:      #f5f5f5
```

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana
- H1: 2.5rem (40px)
- H2: 2rem (32px)
- H3: 1.5rem (24px)
- Body: 1rem (16px)

### Responsive Breakpoints
```css
Desktop:  > 1024px (full layout)
Tablet:   768px - 1024px (adjusted grid)
Mobile:   < 768px (single column)
Small:    < 480px (compact layout)
```

### Animation Types
- Fade In/Out
- Slide In (left/down)
- Scale & Transform
- Rotate (3D cube)
- Hover effects

## AR.js Configuration

### Marker Detection
```javascript
arjs="detectionMode: mono;           // Single image detection
      debugUIEnabled: false;          // No debug UI
      sourceType: webcam;             // Use webcam
      patternRatio: 0.8;"             // Detection sensitivity
```

### Marker Pattern
- Type: Pattern-based (not image)
- Format: `.patt` file
- Size: Minimum 10cm x 10cm
- Quality: High contrast, clear edges

## A-Frame Component System

### Entity Properties
```html
<a-entity
    id="uniqueID"                      <!-- Unique identifier -->
    gltf-model="assets/model.glb"     <!-- 3D model -->
    position="0 0 0"                   <!-- XYZ position -->
    scale="1 1 1"                      <!-- Scale factor -->
    rotation="0 0 0"                   <!-- Rotation degrees -->
    class="clickable component"        <!-- CSS classes -->
    data-name="Component Name"         <!-- Data attributes -->
    data-desc="Description">           <!-- Data attributes -->
</a-entity>
```

## Performance Optimization

### Load Time Goals
- Initial load: < 3 seconds
- AR initialization: < 2 seconds
- Model rendering: < 1 second

### Optimization Techniques
1. Use CDN for libraries
2. Compress GLB models
3. Lazy load components
4. Cache static assets
5. Minimize CSS/JS

### Browser Caching
```html
<!-- Cache assets for 1 year -->
<meta http-equiv="cache-control" content="max-age=31536000">
```

## Security Considerations

### CORS & SSL
- Use HTTPS for camera access
- Configure CORS headers
- Validate input data

### Data Privacy
- No user data collection
- No tracking scripts
- Clean cookies & cache

### Content Security
- No inline scripts
- Validate external resources
- Use nonces for scripts

## Browser APIs Used

### WebRTC
- `navigator.mediaDevices.getUserMedia()`
- Camera access for AR

### WebGL
- 3D graphics rendering
- Handled by Three.js

### Intersection Observer
- Lazy loading
- Animation triggers

### localStorage
- Store user preferences
- Persist settings

## Debugging Tips

### Console Logging
```javascript
console.log('Debug message');
console.error('Error occurred');
console.warn('Warning message');
console.table(objectData);
```

### Browser DevTools
- F12: Open developer tools
- Elements: Inspect HTML structure
- Console: View errors & logs
- Network: Monitor requests
- Performance: Profile rendering

### AR.js Debugging
```javascript
// Enable debug UI
arjs="debugUIEnabled: true"
```

## Testing Checklist

### Functionality
- [ ] All buttons work
- [ ] Links navigate correctly
- [ ] Marker detection works
- [ ] Models display properly
- [ ] Zoom controls function
- [ ] Info panels show data

### Performance
- [ ] Page loads fast
- [ ] 60 FPS on mobile
- [ ] Smooth animations
- [ ] No memory leaks

### Compatibility
- [ ] Works on Chrome
- [ ] Works on Firefox
- [ ] Works on Safari
- [ ] Works on mobile browsers
- [ ] Responsive design

### UX
- [ ] Clear navigation
- [ ] Intuitive controls
- [ ] Good readability
- [ ] Accessible colors
- [ ] Mobile friendly

## Deployment Checklist

- [ ] All assets downloaded
- [ ] Library paths correct
- [ ] Marker file set
- [ ] Model files in place
- [ ] CSS/JS minified (optional)
- [ ] 404 errors fixed
- [ ] SSL certificate installed
- [ ] CORS configured
- [ ] CDN configured (optional)
- [ ] Analytics added (optional)

## Troubleshooting Matrix

| Issue | Cause | Solution |
|-------|-------|----------|
| Marker not detected | Poor lighting | Improve lighting |
| Model not loading | File path wrong | Check assets folder |
| Camera access denied | Browser permission | Allow in settings |
| Slow performance | Heavy models | Optimize GLB files |
| Blank screen | Script error | Check console |

---

**For more help, see setup-guide.md and readme.md**
