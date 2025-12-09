// ============================================
// HEADER SCROLL EFFECT
// ============================================

const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// FILTER FUNCTIONALITY (REALIZATIONS PAGE)
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const realizationItems = document.querySelectorAll('.realization-item');

if (filterButtons.length > 0 && realizationItems.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            realizationItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('fade-in');
                    }, 10);
                } else {
                    const category = item.getAttribute('data-category');
                    if (category === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.classList.add('fade-in');
                        }, 10);
                    } else {
                        item.style.display = 'none';
                        item.classList.remove('fade-in');
                    }
                }
            });
        });
    });
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.phone || !data.email || !data.service || !data.message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        if (!data.consent) {
            alert('Veuillez accepter l\'utilisation de vos données.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
        if (!phoneRegex.test(data.phone)) {
            alert('Veuillez entrer un numéro de téléphone valide.');
            return;
        }
        
        // Simulate form submission
        // In a real application, you would send this data to a server
        console.log('Form data:', data);
        
        // Show success message
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitButton.textContent = 'Message envoyé !';
            submitButton.style.backgroundColor = '#10b981';
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            alert('Merci pour votre demande ! Nous vous recontacterons sous 24h.');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
                submitButton.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// ============================================
// ANIMATION ON SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.service-card, .feature-box, .testimonial-card, .realization-item, .value-card, .team-member'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// ============================================
// RATING BARS ANIMATION (AVIS PAGE)
// ============================================

const ratingBars = document.querySelectorAll('.rating-bar-fill');

if (ratingBars.length > 0) {
    const animateRatingBars = () => {
        ratingBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    };
    
    // Animate when page loads
    window.addEventListener('load', () => {
        setTimeout(animateRatingBars, 300);
    });
}

// ============================================
// NUMBER COUNTER ANIMATION
// ============================================

const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

const numberElements = document.querySelectorAll('.number-value, .stat-number, .feature-number');

if (numberElements.length > 0) {
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (number) {
                    entry.target.textContent = '0';
                    animateCounter(entry.target, number);
                }
            }
        });
    }, { threshold: 0.5 });
    
    numberElements.forEach(el => {
        numberObserver.observe(el);
    });
}

// ============================================
// SCROLL TO TOP BUTTON (Optional)
// ============================================

// Create scroll to top button
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.setAttribute('aria-label', 'Retour en haut');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #2563eb;
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(button);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
};

// Initialize scroll to top button
createScrollToTopButton();

// ============================================
// FORM VALIDATION ENHANCEMENTS
// ============================================

const formInputs = document.querySelectorAll('input, textarea, select');

formInputs.forEach(input => {
    // Add validation on blur
    input.addEventListener('blur', () => {
        validateField(input);
    });
    
    // Remove error on input
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            input.classList.remove('error');
            const errorMsg = input.parentElement.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        }
    });
});

const validateField = (field) => {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Required fields
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Ce champ est obligatoire.';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Veuillez entrer une adresse email valide.';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Veuillez entrer un numéro de téléphone valide.';
        }
    }
    
    // Update field appearance
    if (!isValid) {
        field.classList.add('error');
        field.style.borderColor = '#ef4444';
        
        // Add error message
        if (!field.parentElement.querySelector('.error-message')) {
            const errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem; display: block;';
            errorMsg.textContent = errorMessage;
            field.parentElement.appendChild(errorMsg);
        }
    } else {
        field.classList.remove('error');
        field.style.borderColor = '';
        const errorMsg = field.parentElement.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
    
    return isValid;
};

// ============================================
// LAZY LOADING FOR IMAGES (if needed)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%cToiture Pro', 'color: #2563eb; font-size: 24px; font-weight: bold;');
console.log('%cSite web développé avec passion pour les artisans couvreurs', 'color: #6b7280; font-size: 14px;');

