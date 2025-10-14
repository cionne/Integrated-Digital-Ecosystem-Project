        // Dark Mode Toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const toggleIcon = document.getElementById('toggleIcon');
        const body = document.body;
        const starsContainer = document.getElementById('stars');

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            toggleIcon.textContent = '☀️';
        }

        // Generate stars
        function generateStars() {
            starsContainer.innerHTML = '';
            
            // Create regular stars
            for (let i = 0; i < 200; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                const size = Math.random() * 3 + 1;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 70 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 3 + 2) + 's';
                starsContainer.appendChild(star);
            }

            // Create shooting stars
            for (let i = 0; i < 3; i++) {
                const shootingStar = document.createElement('div');
                shootingStar.className = 'shooting-star';
                shootingStar.style.width = (Math.random() * 100 + 50) + 'px';
                shootingStar.style.left = Math.random() * 100 + '%';
                shootingStar.style.top = Math.random() * 50 + '%';
                shootingStar.style.animationDelay = (Math.random() * 5 + i * 3) + 's';
                shootingStar.style.animationDuration = (Math.random() * 2 + 2) + 's';
                starsContainer.appendChild(shootingStar);
            }
        }

        generateStars();

        // Toggle dark mode
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                toggleIcon.textContent = '☀️';
                localStorage.setItem('darkMode', 'enabled');
            } else {
                toggleIcon.textContent = '🌙';
                localStorage.setItem('darkMode', null);
            }
        });

        // Generate grass blades
        const grass = document.getElementById('grass');
        for (let i = 0; i < 150; i++) {
            const blade = document.createElement('div');
            blade.className = 'grass-blade';
            blade.style.left = Math.random() * 100 + '%';
            blade.style.height = (Math.random() * 25 + 35) + 'px';
            blade.style.animationDelay = Math.random() * 3 + 's';
            blade.style.animationDuration = (Math.random() * 2 + 2) + 's';
            grass.appendChild(blade);
        }

        // Generate flowers
        const flowerPositions = [
            { left: 8, bottom: 25 },
            { left: 18, bottom: 30 },
            { left: 32, bottom: 22 },
            { left: 55, bottom: 28 },
            { left: 68, bottom: 24 },
            { left: 82, bottom: 27 },
            { left: 92, bottom: 26 }
        ];
        
        flowerPositions.forEach(pos => {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.style.left = pos.left + '%';
            flower.style.bottom = pos.bottom + 'px';
            
            // Create petals
            for (let i = 0; i < 8; i++) {
                const petal = document.createElement('div');
                petal.className = 'petal';
                flower.appendChild(petal);
            }
            
            // Create flower center
            const center = document.createElement('div');
            center.className = 'flower-center';
            flower.appendChild(center);
            
            // Create stem
            const stem = document.createElement('div');
            stem.className = 'stem';
            flower.appendChild(stem);
            
            grass.appendChild(flower);
        });

        // Generate mushrooms
        const mushroomPositions = [
            { left: 25, bottom: 15 },
            { left: 45, bottom: 18 },
            { left: 75, bottom: 16 }
        ];
        
        mushroomPositions.forEach(pos => {
            const mushroom = document.createElement('div');
            mushroom.className = 'mushroom';
            mushroom.style.left = pos.left + '%';
            mushroom.style.bottom = pos.bottom + 'px';
            
            const cap = document.createElement('div');
            cap.className = 'mushroom-cap';
            mushroom.appendChild(cap);
            
            const stem = document.createElement('div');
            stem.className = 'mushroom-stem';
            mushroom.appendChild(stem);
            
            grass.appendChild(mushroom);
        });

        // Add click feedback with ripple effect
        document.querySelectorAll('.bubble').forEach(bubble => {
            bubble.addEventListener('click', (e) => {
                if (e.currentTarget.getAttribute('href') === '#') {
                    e.preventDefault();
                    
                    // Create ripple effect
                    const ripple = document.createElement('div');
                    ripple.style.position = 'absolute';
                    ripple.style.width = '100%';
                    ripple.style.height = '100%';
                    ripple.style.borderRadius = '50%';
                    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                    ripple.style.top = '0';
                    ripple.style.left = '0';
                    ripple.style.animation = 'ripple 0.6s ease-out';
                    ripple.style.pointerEvents = 'none';
                    
                    e.currentTarget.appendChild(ripple);
                    
                    setTimeout(() => ripple.remove(), 600);
                    
                    
                }
            });
            
            // Add hover effect
            bubble.addEventListener('mouseenter', () => {
                bubble.style.filter = 'brightness(1.1)';
            });
            
            bubble.addEventListener('mouseleave', () => {
                bubble.style.filter = 'brightness(1)';
            });
        });

        // Add parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const clouds = document.querySelectorAll('.cloud');
            const moveX = (e.clientX - window.innerWidth / 2) / 100;
            const moveY = (e.clientY - window.innerHeight / 2) / 100;
            
            clouds.forEach((cloud, index) => {
                const speed = (index + 1) * 0.5;
                cloud.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
            });
        });

        // Generate fireflies for dark mode
const ecosystem = document.querySelector('.ecosystem');

function generateFireflies() {
    for (let i = 0; i < 20; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.bottom = (Math.random() * 60 + 10) + '%';
        firefly.style.animationDelay = Math.random() * 8 + 's';
        firefly.style.animationDuration = (Math.random() * 6 + 6) + 's';
        
        // Random glow delay
        const glowDelay = Math.random() * 2;
        firefly.style.setProperty('--glow-delay', glowDelay + 's');
        
        ecosystem.appendChild(firefly);
    }
}

generateFireflies();

// Modal functionality with video auto-play
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const spt2Bubbles = document.querySelectorAll('.bubble[data-modal]');

// Video elements
const multimediaVideo = document.getElementById('multimediaVideo');
const calculatorVideo = document.getElementById('calculatorVideo');
const multimediaPlayBtn = document.getElementById('multimediaPlay');
const calculatorPlayBtn = document.getElementById('calculatorPlay');

let currentVideo = null;
let currentPlayBtn = null;

// Set videos to loop
multimediaVideo.loop = true;
calculatorVideo.loop = true;

// Add muted attribute for better autoplay compatibility
multimediaVideo.muted = true;
calculatorVideo.muted = true;

spt2Bubbles.forEach(bubble => {
    bubble.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = bubble.getAttribute('data-modal');
        console.log('Opening modal:', modalId); // Debug log
        openModal(modalId);
    });
});

function openModal(modalId) {
    console.log('openModal called with:', modalId); // Debug log
    
    // Hide all modal contents
    document.querySelectorAll('.modal-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected modal content
    const selectedModal = document.getElementById(`${modalId}-modal`);
    console.log('Selected modal element:', selectedModal); // Debug log
    
    if (selectedModal) {
        selectedModal.classList.add('active');
    }
    
    // Set current video based on modal
    if (modalId === 'multimedia') {
        currentVideo = multimediaVideo;
        currentPlayBtn = multimediaPlayBtn;
    } else if (modalId === 'calculator') {
        currentVideo = calculatorVideo;
        currentPlayBtn = calculatorPlayBtn;
    }
    
    console.log('Current video:', currentVideo); // Debug log
    
    // Show overlay
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Auto-play video after modal animation
    setTimeout(() => {
        if (currentVideo) {
            currentVideo.currentTime = 0; // Reset to beginning
            const playPromise = currentVideo.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Video autoplay started successfully');
                    currentPlayBtn.style.display = 'none';
                }).catch(error => {
                    console.log('Auto-play prevented:', error);
                    currentPlayBtn.style.display = 'block';
                });
            }
        }
    }, 300);
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Stop and reset current video
    if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
    }
    
    // Reset all play buttons
    if (multimediaPlayBtn) multimediaPlayBtn.style.display = 'block';
    if (calculatorPlayBtn) calculatorPlayBtn.style.display = 'block';
    
    currentVideo = null;
    currentPlayBtn = null;
}

// Event listeners
modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Play button click handlers
multimediaPlayBtn.addEventListener('click', () => {
    multimediaVideo.play().then(() => {
        multimediaPlayBtn.style.display = 'none';
    });
});

calculatorPlayBtn.addEventListener('click', () => {
    calculatorVideo.play().then(() => {
        calculatorPlayBtn.style.display = 'none';
    });
});

// Show play button when video is paused
multimediaVideo.addEventListener('pause', () => {
    multimediaPlayBtn.style.display = 'block';
});

calculatorVideo.addEventListener('pause', () => {
    calculatorPlayBtn.style.display = 'block';
});

// Hide play button when video plays
multimediaVideo.addEventListener('play', () => {
    multimediaPlayBtn.style.display = 'none';
});

calculatorVideo.addEventListener('play', () => {
    calculatorPlayBtn.style.display = 'none';
});

// Add to existing script.js for mobile enhancements

// Touch event handling for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Add touch support for bubbles
    const bubbles = document.querySelectorAll('.bubble');
    
    bubbles.forEach(bubble => {
        bubble.addEventListener('touchstart', function(e) {
            this.style.transform = 'scale(1.15)';
            e.preventDefault();
        });
        
        bubble.addEventListener('touchend', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Handle viewport height on mobile
    function setViewportHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
    
    // Prevent zoom on double-tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Improve modal for mobile
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('touchmove', function(e) {
            if (e.target === modalOverlay) {
                e.preventDefault();
            }
        }, { passive: false });
    }
});

// Enhanced mobile detection
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Optimize animations for mobile
if (isMobileDevice()) {
    // Reduce number of stars and fireflies on mobile
    const starsContainer = document.getElementById('stars');
    if (starsContainer) {
        starsContainer.innerHTML = '';
        for (let i = 0; i < 50; i++) { // Reduced from 200
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 2 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 70 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (Math.random() * 2 + 2) + 's';
            starsContainer.appendChild(star);
        }
    }
    
    // Reduce grass blades for performance
    const grass = document.getElementById('grass');
    if (grass) {
        const blades = grass.querySelectorAll('.grass-blade');
        if (blades.length > 75) {
            for (let i = 75; i < blades.length; i++) {
                blades[i].remove();
            }
        }
    }
}

// Add to existing script.js - Mobile Bubble Interaction Fix

// Enhanced mobile bubble handling
document.addEventListener('DOMContentLoaded', function() {
    const bubbles = document.querySelectorAll('.bubble');
    
    // Fix for SPT2 bubbles - ensure they're clickable
    const spt2Bubbles = document.querySelectorAll('.spt2-1, .spt2-2');
    
    spt2Bubbles.forEach(bubble => {
        // Remove any existing inline styles that might block clicks
        bubble.style.pointerEvents = 'auto';
        bubble.style.zIndex = '25';
        
        // Add enhanced click/touch handling
        bubble.addEventListener('click', function(e) {
            console.log('SPT2 bubble clicked:', this.className);
            if (this.getAttribute('href') === '#' || this.hasAttribute('data-modal')) {
                e.preventDefault();
                const modalType = this.getAttribute('data-modal');
                if (modalType) {
                    openModal(modalType);
                }
            }
        });
        
        // Enhanced touch feedback
        bubble.addEventListener('touchstart', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        bubble.addEventListener('touchend', function() {
            this.style.transform = 'scale(1.1)';
        });
    });
    
    // Improved bubble spacing detection
    function checkBubbleOverlap() {
        const mobileBubbles = document.querySelectorAll('.bubble');
        const bubbleArray = Array.from(mobileBubbles);
        
        bubbleArray.forEach((bubble, index) => {
            const rect1 = bubble.getBoundingClientRect();
            
            // Check for overlaps with other bubbles
            for (let j = index + 1; j < bubbleArray.length; j++) {
                const rect2 = bubbleArray[j].getBoundingClientRect();
                
                // If bubbles overlap on mobile, adjust positions
                if (rect1.right > rect2.left && rect1.left < rect2.right &&
                    rect1.bottom > rect2.top && rect1.top < rect2.bottom) {
                    
                    // Add small random adjustment to prevent overlap
                    const randomX = (Math.random() - 0.5) * 20;
                    const randomY = (Math.random() - 0.5) * 20;
                    
                    bubble.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.1)`;
                }
            }
        });
    }
    
    // Run overlap check on resize and load
    window.addEventListener('resize', checkBubbleOverlap);
    window.addEventListener('load', checkBubbleOverlap);
    
    // Mobile-specific improvements
    if (isMobileDevice()) {
        // Increase tap target size
        bubbles.forEach(bubble => {
            bubble.style.minWidth = '44px';
            bubble.style.minHeight = '44px';
        });
        
        // Ensure SPT2 bubbles are easily tappable
        spt2Bubbles.forEach(bubble => {
            bubble.style.cursor = 'pointer';
            bubble.style.userSelect = 'none';
            bubble.style.webkitTapHighlightColor = 'rgba(0,0,0,0.1)';
        });
    }
});

// Enhanced mobile detection
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
}

// Fix for modal video autoplay on mobile
function openModal(modalId) {
    console.log('Opening modal:', modalId);
    
    // Hide all modal contents
    document.querySelectorAll('.modal-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected modal content
    const selectedModal = document.getElementById(`${modalId}-modal`);
    
    if (selectedModal) {
        selectedModal.classList.add('active');
    }
    
    // Set current video based on modal
    if (modalId === 'multimedia') {
        currentVideo = multimediaVideo;
        currentPlayBtn = multimediaPlayBtn;
    } else if (modalId === 'calculator') {
        currentVideo = calculatorVideo;
        currentPlayBtn = calculatorPlayBtn;
    }
    
    // Show overlay
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Mobile-friendly video handling
    setTimeout(() => {
        if (currentVideo) {
            currentVideo.currentTime = 0;
            
            // On mobile, don't autoplay but show play button
            if (isMobileDevice()) {
                currentPlayBtn.style.display = 'block';
                currentVideo.pause();
            } else {
                // Desktop autoplay
                const playPromise = currentVideo.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        currentPlayBtn.style.display = 'none';
                    }).catch(error => {
                        console.log('Auto-play prevented:', error);
                        currentPlayBtn.style.display = 'block';
                    });
                }
            }
        }
    }, 300);
}
