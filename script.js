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

// Language switching functionality
let currentLang = 'ar'; // Default language is Arabic

const translations = {
    ar: {
        // Meta
        pageTitle: 'Dream.App - تطوير تطبيقات الموبايل',
        menuLabel: 'القائمة',
        
        // Navigation
        home: 'الرئيسية',
        services: 'خدماتنا',
        portfolio: 'أعمالنا',
        dashboard: 'لوحة أصحاب التطبيقات',
        contact: 'تواصل واتساب',
        langText: 'English',

        // Hero Section
        heroTitle: 'Dream.App',
        heroText: 'نحول أحلامك إلى تطبيقات ذكية ومواقع ويب',
        startProject: 'ابدأ مشروعك الآن',

        // Services Section
        servicesTitle: 'خدماتنا',
        
        // Service Cards
        webDesignTitle: 'تصميم المواقع الإلكترونية',
        webDesignDesc: 'تصميم مواقع احترافية متجاوبة مع جميع الأجهزة بأحدث التقنيات',
        webDesignAlt: 'تصميم المواقع',

        menuAppTitle: 'تطبيقات المنيو الإلكتروني',
        menuAppDesc: 'حلول متكاملة للمطاعم والكافيهات لعرض قوائم الطعام بشكل تفاعلي',
        menuAppAlt: 'تطبيق منيو',

        teacherAppTitle: 'تطبيقات المدرسين',
        teacherAppDesc: 'منصات تعليمية متطورة تربط المدرسين بالطلاب',
        teacherAppAlt: 'تطبيق المدرسين',

        recipeAppTitle: 'تطبيقات وصفات الطعام',
        recipeAppDesc: 'تطبيقات سهلة الاستخدام لمشاركة وحفظ الوصفات',
        recipeAppAlt: 'تطبيق الوصفات',

        // Portfolio Section
        portfolioTitle: 'أعمالنا المميزة',
        dreamShoppingTitle: 'تطبيق دريم شوبينج',
        dreamShoppingAlt: 'تطبيق دريم شوبينج',
        hokmdarTitle: 'تطبيق الحكمدار',
        hokmdarAlt: 'تطبيق الحكمدار',

        // Contact Section
        contactTitle: 'تواصل معنا',
        contactDesc: 'نحن هنا لمساعدتك في تحويل فكرتك إلى تطبيق ناجح',

        // Footer
        footerAbout: 'نحن نقدم حلول تقنية مبتكرة لتطوير تطبيقات الموبايل',
        contactInfo: 'معلومات التواصل',
        location: 'مصر، القاهرة',
        copyright: '© 2025 Dream.App. جميع الحقوق محفوظة'
    },
    en: {
        // Meta
        pageTitle: 'Dream.App - Mobile App Development',
        menuLabel: 'Menu',
        
        // Navigation
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        dashboard: 'App Dashboard',
        contact: 'WhatsApp Contact',
        langText: 'عربي',

        // Hero Section
        heroTitle: 'Dream.App',
        heroText: 'We Turn Your Dreams into Smart Apps and Websites',
        startProject: 'Start Your Project Now',

        // Services Section
        servicesTitle: 'Our Services',
        
        // Service Cards
        webDesignTitle: 'Website Design',
        webDesignDesc: 'Professional responsive website design using the latest technologies',
        webDesignAlt: 'Web Design',

        menuAppTitle: 'Digital Menu Apps',
        menuAppDesc: 'Comprehensive solutions for restaurants and cafes to display interactive menus',
        menuAppAlt: 'Menu App',

        teacherAppTitle: 'Teacher Apps',
        teacherAppDesc: 'Advanced educational platforms connecting teachers with students',
        teacherAppAlt: 'Teacher App',

        recipeAppTitle: 'Recipe Apps',
        recipeAppDesc: 'User-friendly applications for sharing and saving recipes',
        recipeAppAlt: 'Recipe App',

        // Portfolio Section
        portfolioTitle: 'Our Featured Work',
        dreamShoppingTitle: 'Dream Shopping App',
        dreamShoppingAlt: 'Dream Shopping App',
        hokmdarTitle: 'Al-Hokmdar App',
        hokmdarAlt: 'Al-Hokmdar App',

        // Contact Section
        contactTitle: 'Contact Us',
        contactDesc: 'We are here to help turn your idea into a successful app',

        // Footer
        footerAbout: 'We provide innovative technical solutions for mobile app development',
        contactInfo: 'Contact Information',
        location: 'Cairo, Egypt',
        copyright: '© 2025 Dream.App. All Rights Reserved'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateContent();
    updateDirection();
}

function updateContent() {
    // Update page title
    document.title = translations[currentLang].pageTitle;
    
    // Update language toggle text
    document.getElementById('langText').textContent = translations[currentLang].langText;
    
    // Update navigation items
    document.querySelector('a[href="#home"] span').textContent = translations[currentLang].home;
    document.querySelector('a[href="#services"] span').textContent = translations[currentLang].services;
    document.querySelector('a[href="#portfolio"] span').textContent = translations[currentLang].portfolio;
    document.querySelector('a[href="https://www.e-droid.net/"] span').textContent = translations[currentLang].dashboard;
    document.querySelector('.whatsapp-link span').textContent = translations[currentLang].contact;

    // Update hero section
    document.querySelector('.hero-content p').textContent = translations[currentLang].heroText;
    document.querySelector('.cta-button span').textContent = translations[currentLang].startProject;

    // Update services section
    document.querySelector('#services h2').textContent = translations[currentLang].servicesTitle;
    
    // Update service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards[0].querySelector('h3').textContent = translations[currentLang].webDesignTitle;
    serviceCards[0].querySelector('p').textContent = translations[currentLang].webDesignDesc;
    serviceCards[0].querySelector('img').alt = translations[currentLang].webDesignAlt;

    serviceCards[1].querySelector('h3').textContent = translations[currentLang].menuAppTitle;
    serviceCards[1].querySelector('p').textContent = translations[currentLang].menuAppDesc;
    serviceCards[1].querySelector('img').alt = translations[currentLang].menuAppAlt;

    serviceCards[2].querySelector('h3').textContent = translations[currentLang].teacherAppTitle;
    serviceCards[2].querySelector('p').textContent = translations[currentLang].teacherAppDesc;
    serviceCards[2].querySelector('img').alt = translations[currentLang].teacherAppAlt;

    serviceCards[3].querySelector('h3').textContent = translations[currentLang].recipeAppTitle;
    serviceCards[3].querySelector('p').textContent = translations[currentLang].recipeAppDesc;
    serviceCards[3].querySelector('img').alt = translations[currentLang].recipeAppAlt;

    // Update portfolio section
    document.querySelector('#portfolio h2').textContent = translations[currentLang].portfolioTitle;
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems[0].querySelector('h3').textContent = translations[currentLang].dreamShoppingTitle;
    portfolioItems[0].querySelector('img').alt = translations[currentLang].dreamShoppingAlt;
    portfolioItems[1].querySelector('h3').textContent = translations[currentLang].hokmdarTitle;
    portfolioItems[1].querySelector('img').alt = translations[currentLang].hokmdarAlt;

    // Update contact section
    document.querySelector('#contact h2').textContent = translations[currentLang].contactTitle;
    document.querySelector('.contact-desc').textContent = translations[currentLang].contactDesc;

    // Update footer
    document.querySelector('.footer-info p').textContent = translations[currentLang].footerAbout;
    document.querySelector('.contact-info h4').textContent = translations[currentLang].contactInfo;
    document.querySelector('.fa-map-marker-alt').parentElement.textContent = ` ${translations[currentLang].location}`;
    document.querySelector('.footer-bottom p').textContent = translations[currentLang].copyright;
}

function updateDirection() {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    
    // Update any direction-specific styles
    const elements = document.querySelectorAll('.nav-icon, .contact-info ul li i');
    elements.forEach(el => {
        el.style.marginLeft = currentLang === 'ar' ? '8px' : '0';
        el.style.marginRight = currentLang === 'ar' ? '0' : '8px';
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    updateDirection();
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
            
            // Web Design Service
            webDesignTitle: 'تصميم المواقع الإلكترونية',
            webDesignDesc: 'تصميم مواقع احترافية متجاوبة مع جميع الأجهزة بأحدث التقنيات',
            
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
            portfolioTitle: 'أعمالنا المميزة',
            
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
            
            // Web Design Service
            webDesignTitle: 'Web Design Services',
            webDesignDesc: 'Professional responsive website design using the latest technologies',
            
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
            portfolioTitle: 'Our Featured Works',
            
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
        htmlTag.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
        
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
        document.querySelector('.cta-button span').textContent = translations[newLang].ctaButton;
        
        // Update services section
        document.querySelector('#services h2').textContent = translations[newLang].servicesTitle;
        
        // Update service cards
        const serviceCards = document.querySelectorAll('.service-card');
        
        // Web Design Service
        if (serviceCards[0]) {
            serviceCards[0].querySelector('h3').textContent = translations[newLang].webDesignTitle;
            serviceCards[0].querySelector('p').textContent = translations[newLang].webDesignDesc;
        }
        
        // Menu App Service
        if (serviceCards[1]) {
            serviceCards[1].querySelector('h3').textContent = translations[newLang].menuAppTitle;
            serviceCards[1].querySelector('p').textContent = translations[newLang].menuAppDesc;
        }
        
        // Teacher App Service
        if (serviceCards[2]) {
            serviceCards[2].querySelector('h3').textContent = translations[newLang].teacherAppTitle;
            serviceCards[2].querySelector('p').textContent = translations[newLang].teacherAppDesc;
        }
        
        // Recipe App Service
        if (serviceCards[3]) {
            serviceCards[3].querySelector('h3').textContent = translations[newLang].recipeAppTitle;
            serviceCards[3].querySelector('p').textContent = translations[newLang].recipeAppDesc;
        }
        
        // Only update the main portfolio section title, not the individual portfolio items
        const portfolioSection = document.querySelector('#portfolio');
        if (portfolioSection) {
            portfolioSection.querySelector('h2').textContent = translations[newLang].portfolioTitle;
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
