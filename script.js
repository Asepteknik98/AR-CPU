// =====================
// GLOBAL VARIABLES
// =====================

const app = {
    currentComponent: null,
    showLabels: true,
    components: [],
    initialScale: 1
};

// =====================
// INITIALIZE APP
// =====================

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on AR page
    if (document.getElementById('arScene')) {
        initARPage();
    } else {
        initHomePage();
    }
});

// =====================
// HOME PAGE INITIALIZATION
// =====================

function initHomePage() {
    setupNavigation();
    setupSmoothScroll();
    setupAnimations();
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupAnimations() {
    // Intersection Observer untuk animasi saat scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.komponen-card, .feature-item').forEach(el => {
        observer.observe(el);
    });
}

// =====================
// AR PAGE INITIALIZATION
// =====================

function initARPage() {
    // Wait for A-Frame to be ready
    const scene = document.querySelector('a-scene');
    
    if (scene.hasLoaded) {
        setupARComponents();
    } else {
        scene.addEventListener('loaded', setupARComponents);
    }

    setupControlPanelButtons();
    setupInstructionPanel();
}

function setupARComponents() {
    const componentsGroup = document.getElementById('componentsGroup');
    const components = componentsGroup.querySelectorAll('.component');
    
    components.forEach(component => {
        // Add click event untuk menampilkan info
        component.addEventListener('click', function() {
            const name = this.dataset.name;
            const desc = this.dataset.desc;
            showComponentInfo(name, desc);
        });

        // Add hover effect
        component.addEventListener('mouseenter', function() {
            this.setAttribute('scale', '1.1 1.1 1.1');
        });

        component.addEventListener('mouseleave', function() {
            this.setAttribute('scale', '1 1 1');
        });
    });

    console.log('AR Components initialized:', components.length);
}

function showComponentInfo(name, desc) {
    const panel = document.getElementById('infoPanel');
    const nameElement = document.getElementById('componentName');
    const descElement = document.getElementById('componentDesc');
    
    nameElement.textContent = name;
    descElement.textContent = desc;
    
    panel.classList.remove('hidden');
    
    // Auto hide after 8 seconds
    setTimeout(() => {
        panel.classList.add('hidden');
    }, 8000);
}

function setupControlPanelButtons() {
    // Reset View
    document.getElementById('btnReset').addEventListener('click', function() {
        const group = document.getElementById('componentsGroup');
        group.setAttribute('position', '0 0 0');
        group.setAttribute('scale', '1 1 1');
        group.setAttribute('rotation', '0 0 0');
        console.log('View reset');
    });

    // Zoom In
    document.getElementById('btnZoomIn').addEventListener('click', function() {
        const group = document.getElementById('componentsGroup');
        const scale = group.getAttribute('scale');
        const scaleValue = parseFloat(scale.split(' ')[0]);
        const newScale = Math.min(scaleValue + 0.2, 2.5);
        group.setAttribute('scale', `${newScale} ${newScale} ${newScale}`);
        console.log('Zoomed in:', newScale);
    });

    // Zoom Out
    document.getElementById('btnZoomOut').addEventListener('click', function() {
        const group = document.getElementById('componentsGroup');
        const scale = group.getAttribute('scale');
        const scaleValue = parseFloat(scale.split(' ')[0]);
        const newScale = Math.max(scaleValue - 0.2, 0.3);
        group.setAttribute('scale', `${newScale} ${newScale} ${newScale}`);
        console.log('Zoomed out:', newScale);
    });

    // Toggle Labels
    document.getElementById('btnToggleLabels').addEventListener('click', function() {
        const components = document.querySelectorAll('.component');
        app.showLabels = !app.showLabels;
        console.log('Labels toggled:', app.showLabels);
    });

    // Home Button
    document.getElementById('btnHome').addEventListener('click', function() {
        if (confirm('Kembali ke halaman utama?')) {
            window.location.href = 'index.html';
        }
    });

    // Close Info Panel
    document.getElementById('closeInfo').addEventListener('click', function() {
        document.getElementById('infoPanel').classList.add('hidden');
    });
}

function setupInstructionPanel() {
    const dismissBtn = document.getElementById('dismissInstruction');
    const instructionPanel = document.querySelector('.instruction-panel');
    
    dismissBtn.addEventListener('click', function() {
        instructionPanel.style.opacity = '0';
        instructionPanel.style.pointerEvents = 'none';
        instructionPanel.style.transition = 'opacity 0.3s ease';
    });

    // Auto hide after 5 seconds
    setTimeout(() => {
        instructionPanel.style.opacity = '0';
        instructionPanel.style.pointerEvents = 'none';
    }, 5000);
}

// =====================
// UTILITY FUNCTIONS
// =====================

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Rotate component
function rotateComponent(componentId, axis, angle) {
    const component = document.getElementById(componentId);
    if (component) {
        let rotation = component.getAttribute('rotation') || '0 0 0';
        let [x, y, z] = rotation.split(' ').map(Number);
        
        if (axis === 'x') x += angle;
        if (axis === 'y') y += angle;
        if (axis === 'z') z += angle;
        
        component.setAttribute('rotation', `${x} ${y} ${z}`);
    }
}

// Scale component
function scaleComponent(componentId, factor) {
    const component = document.getElementById(componentId);
    if (component) {
        let scale = component.getAttribute('scale') || '1 1 1';
        let [x, y, z] = scale.split(' ').map(Number);
        
        x *= factor;
        y *= factor;
        z *= factor;
        
        component.setAttribute('scale', `${x} ${y} ${z}`);
    }
}

// =====================
// EVENT LISTENERS
// =====================

// Handle window resize
window.addEventListener('resize', function() {
    console.log('Window resized');
});

// Handle visibility change
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('App hidden');
    } else {
        console.log('App visible');
    }
});

// =====================
// ANIMATIONS
// =====================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    .component {
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .component:hover {
        filter: brightness(1.2);
    }
`;

document.head.appendChild(style);

// =====================
// AR.JS SPECIFIC FUNCTIONS
// =====================

// Initialize AR with custom settings
function initARSettings() {
    const scene = document.querySelector('a-scene');
    
    // Check if AR is supported
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error('Camera access not supported');
        alert('Kamera tidak didukung oleh browser Anda');
        return;
    }

    console.log('AR settings initialized');
}

// Handle marker detection
function handleMarkerDetected() {
    console.log('Marker detected!');
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        loadingIndicator.classList.remove('show');
    }
}

// Handle marker lost
function handleMarkerLost() {
    console.log('Marker lost');
}

// =====================
// PERFORMANCE OPTIMIZATION
// =====================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('AR CPU Application Loaded Successfully!');
