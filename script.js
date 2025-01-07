// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.service-card, .portfolio-item, .contact-container').forEach(el => {
    observer.observe(el);
});

// Form submission handling with animation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add submission animation
        this.classList.add('submitted');
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = '<i class="fas fa-check-circle"></i> شكراً لتواصلك معنا! سنرد عليك قريباً.';
        
        this.appendChild(successMessage);
        
        // Reset form after delay
        setTimeout(() => {
            this.reset();
            this.classList.remove('submitted');
            successMessage.remove();
        }, 3000);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuOverlay = document.querySelector('.menu-overlay');

function toggleMenu() {
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    
    // Change menu icon
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Close menu when clicking overlay
menuOverlay.addEventListener('click', toggleMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !e.target.closest('.nav-links') && 
        !e.target.closest('.mobile-menu-btn')) {
        toggleMenu();
    }
});

// Prevent menu close when clicking inside nav
navLinks.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    const htmlTag = document.documentElement;
    
    // Text content for both languages
    const translations = {
        ar: {
            // Navigation
            home: 'الرئيسية',
            services: 'خدماتنا',
            portfolio: 'أعمالنا',
            contact: 'اتصل بنا',
            whatsapp: 'تواصل واتساب',
            switchText: 'English',
            
            // Hero Section
            heroTitle: 'Dream.App',
            heroSubtitle: 'نحول أحلامك إلى تطبيقات ذكية',
            ctaButton: 'ابدأ مشروعك الآن',
            
            // Services Section
            servicesTitle: 'خدماتنا',
            
            // Menu App Service
            menuAppTitle: 'تطبيقات المنيو الإلكتروني',
            menuAppDesc: 'حلول متكاملة للمطاعم والكافيهات لعرض قوائم الطعام بشكل تفاعلي',
            
            // Teacher App Service
            teacherAppTitle: 'تطبيقات المدرسين',
            teacherAppDesc: 'منصات تعليمية متطورة تربط المدرسين بالطلاب',
            
            // Recipe App Service
            recipeAppTitle: 'تطبيقات وصفات الطعام',
            recipeAppDesc: 'تطبيقات سهلة الاستخدام لمشاركة وحفظ الوصفات',
            
            // Portfolio Section
            portfolioTitle: 'معرض أعمالنا',
            portfolioSubtitle: 'نماذج من تطبيقاتنا السابقة',
            
            // Contact Section
            contactTitle: 'تواصل معنا',
            contactDesc: 'نحن هنا لمساعدتك في تحويل فكرتك إلى تطبيق ناجح',
            nameLabel: 'الاسم',
            emailLabel: 'البريد الإلكتروني',
            messageLabel: 'الرسالة',
            submitButton: 'إرسال',
            
            // Footer
            footerText: 'جميع الحقوق محفوظة',
            privacyPolicy: 'سياسة الخصوصية',
            termsOfService: 'شروط الخدمة'
        },
        en: {
            // Navigation
            home: 'Home',
            services: 'Services',
            portfolio: 'Portfolio',
            contact: 'Contact',
            whatsapp: 'WhatsApp',
            switchText: 'عربي',
            
            // Hero Section
            heroTitle: 'Dream.App',
            heroSubtitle: 'Turn Your Dreams Into Smart Apps',
            ctaButton: 'Start Your Project Now',
            
            // Services Section
            servicesTitle: 'Our Services',
            
            // Menu App Service
            menuAppTitle: 'Digital Menu Applications',
            menuAppDesc: 'Comprehensive solutions for restaurants and cafes to display menus interactively',
            
            // Teacher App Service
            teacherAppTitle: 'Teacher Applications',
            teacherAppDesc: 'Advanced educational platforms connecting teachers with students',
            
            // Recipe App Service
            recipeAppTitle: 'Recipe Applications',
            recipeAppDesc: 'User-friendly applications for sharing and saving recipes',
            
            // Portfolio Section
            portfolioTitle: 'Our Portfolio',
            portfolioSubtitle: 'Examples of our previous applications',
            
            // Contact Section
            contactTitle: 'Contact Us',
            contactDesc: 'We are here to help turn your idea into a successful app',
            nameLabel: 'Name',
            emailLabel: 'Email',
            messageLabel: 'Message',
            submitButton: 'Send',
            
            // Footer
            footerText: 'All Rights Reserved',
            privacyPolicy: 'Privacy Policy',
            termsOfService: 'Terms of Service'
        }
    };

    function switchLanguage() {
        const currentLang = htmlTag.getAttribute('lang');
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        
        // Update HTML lang attribute
        htmlTag.setAttribute('lang', newLang);
        
        // Update button text
        langToggle.querySelector('span').textContent = translations[newLang].switchText;
        
        // Update navigation links
        document.querySelector('a[href="#home"] span').textContent = translations[newLang].home;
        document.querySelector('a[href="#services"] span').textContent = translations[newLang].services;
        document.querySelector('a[href="#portfolio"] span').textContent = translations[newLang].portfolio;
        document.querySelector('a[href="#contact"] span').textContent = translations[newLang].contact;
        document.querySelector('.whatsapp-link span').textContent = translations[newLang].whatsapp;
        
        // Update hero section
        document.querySelector('.hero-content h1').textContent = translations[newLang].heroTitle;
        document.querySelector('.hero-content p').textContent = translations[newLang].heroSubtitle;
        document.querySelector('.cta-button').textContent = translations[newLang].ctaButton;
        
        // Update services section
        document.querySelector('#services h2').textContent = translations[newLang].servicesTitle;
        
        // Update service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards[0].querySelector('h3').textContent = translations[newLang].menuAppTitle;
        serviceCards[0].querySelector('p').textContent = translations[newLang].menuAppDesc;
        
        serviceCards[1].querySelector('h3').textContent = translations[newLang].teacherAppTitle;
        serviceCards[1].querySelector('p').textContent = translations[newLang].teacherAppDesc;
        
        serviceCards[2].querySelector('h3').textContent = translations[newLang].recipeAppTitle;
        serviceCards[2].querySelector('p').textContent = translations[newLang].recipeAppDesc;
        
        // Update portfolio section
        const portfolioSection = document.querySelector('#portfolio');
        if (portfolioSection) {
            portfolioSection.querySelector('h2').textContent = translations[newLang].portfolioTitle;
            const subtitle = portfolioSection.querySelector('.section-subtitle');
            if (subtitle) subtitle.textContent = translations[newLang].portfolioSubtitle;
        }
        
        // Update contact section
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.querySelector('h2').textContent = translations[newLang].contactTitle;
            const contactDesc = contactSection.querySelector('.contact-desc');
            if (contactDesc) contactDesc.textContent = translations[newLang].contactDesc;
            
            // Update form labels
            const labels = contactSection.querySelectorAll('label');
            labels.forEach(label => {
                if (label.htmlFor === 'name') label.textContent = translations[newLang].nameLabel;
                if (label.htmlFor === 'email') label.textContent = translations[newLang].emailLabel;
                if (label.htmlFor === 'message') label.textContent = translations[newLang].messageLabel;
            });
            
            const submitBtn = contactSection.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.textContent = translations[newLang].submitButton;
        }
        
        // Update footer
        const footer = document.querySelector('footer');
        if (footer) {
            const footerText = footer.querySelector('.footer-text');
            if (footerText) footerText.textContent = translations[newLang].footerText;
            
            const privacyLink = footer.querySelector('a[href*="privacy"]');
            if (privacyLink) privacyLink.textContent = translations[newLang].privacyPolicy;
            
            const termsLink = footer.querySelector('a[href*="terms"]');
            if (termsLink) termsLink.textContent = translations[newLang].termsOfService;
        }
        
        // Store language preference
        localStorage.setItem('preferredLanguage', newLang);
    }

    // Initialize language from localStorage or default to Arabic
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== htmlTag.getAttribute('lang')) {
        htmlTag.setAttribute('lang', savedLang);
        switchLanguage();
    }

    // Add click event listener to language toggle button
    langToggle.addEventListener('click', switchLanguage);
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: this.querySelector('input[name="name"]').value,
                email: this.querySelector('input[name="email"]').value,
                message: this.querySelector('textarea[name="message"]').value
            };
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Get current language
            const currentLang = document.documentElement.getAttribute('lang');
            const loadingText = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
            const successText = currentLang === 'ar' ? 'تم الإرسال بنجاح!' : 'Sent successfully!';
            const errorText = currentLang === 'ar' ? 'حدث خطأ. حاول مرة أخرى.' : 'Error occurred. Please try again.';
            
            try {
                submitButton.textContent = loadingText;
                submitButton.disabled = true;
                
                const response = await fetch('send_email.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    submitButton.textContent = successText;
                    submitButton.style.backgroundColor = '#4CAF50';
                    this.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitButton.textContent = originalButtonText;
                        submitButton.style.backgroundColor = '';
                        submitButton.disabled = false;
                    }, 3000);
                } else {
                    throw new Error(result.message);
                }
            } catch (error) {
                submitButton.textContent = errorText;
                submitButton.style.backgroundColor = '#f44336';
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = originalButtonText;
                    submitButton.style.backgroundColor = '';
                    submitButton.disabled = false;
                }, 3000);
            }
        });
    }
});
