document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Initialize Typed.js with expanded roles
    const typedText = document.querySelector('.typed-text');
    if (typedText) {
        typedText.innerHTML = ''; // Clear existing content
        new Typed(typedText, {
            strings: [
                'Data Scientist',
                'Machine Learning Engineer',
                'AI Researcher',
                'Full Stack ML Developer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            smartBackspace: true
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for navigation links
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

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            // Add your newsletter subscription logic here
            alert('Thank you for subscribing! We\'ll keep you updated.');
            this.reset();
        });
    }

    // Initialize particles.js with modern configuration
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: ['#2563eb', '#06b6d4', '#3b82f6']
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.25,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#2563eb',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'bubble'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 200,
                    size: 6,
                    duration: 0.2,
                    opacity: 0.8,
                    speed: 3
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Add hover effects for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icons = this.querySelectorAll('.project-link');
            icons.forEach((icon, index) => {
                icon.style.transitionDelay = `${index * 0.1}s`;
            });
        });

        card.addEventListener('mouseleave', function () {
            const icons = this.querySelectorAll('.project-link');
            icons.forEach(icon => {
                icon.style.transitionDelay = '0s';
            });
        });
    });

    // Add hover effects for competency cards
    document.querySelectorAll('.competency-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
            this.querySelector('.competency-icon').style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.querySelector('.competency-icon').style.transform = 'scale(1)';
        });
    });

    // Update typed.js strings
    const typed = document.querySelector('.typed-text');
    if (typed) {
        typed.innerHTML = ''; // Clear existing content
        new Typed(typed, {
            strings: [
                'Data Scientist',
                'Machine Learning Engineer',
                'AI Researcher',
                'Full Stack ML Developer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            smartBackspace: true
        });
    }
});
