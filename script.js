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

// Get modal elements
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

// Select all modal contents
const modals = document.querySelectorAll('.modal-content');

// Function to open a specific modal by ID
function openModal(modalId) {
  // Hide all modals first
  modals.forEach(m => m.style.display = 'none');

  // Show overlay and the target modal
  modalOverlay.style.display = 'flex';
  const targetModal = document.getElementById(modalId);
  targetModal.style.display = 'flex';

  // Play and loop the video automatically
  const video = targetModal.querySelector('video');
  if (video) {
    video.loop = true;       // enable looping
    video.currentTime = 0;   // start from beginning
    video.play();            // autoplay
  }
}

// Function to close modal and stop videos
function closeModal() {
  modalOverlay.style.display = 'none';
  modals.forEach(m => {
    const video = m.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0; // reset video position
    }
  });
}

// Close modal when clicking the close button
modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
