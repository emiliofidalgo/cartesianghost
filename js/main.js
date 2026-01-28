document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header Effect ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('active');
        
        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // --- Smooth Scrolling for Anchor Links ---
    // Note: CSS scroll-behavior: smooth handles most of this, but JS allows for offset calculation if needed
    // Ideally, we depend on CSS for simplicity, but here is a backup if more control is needed.
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Adjust for fixed header height
                // const headerOffset = 80;
                // const elementPosition = targetElement.getBoundingClientRect().top;
                // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                // window.scrollTo({
                //     top: offsetPosition,
                //     behavior: "smooth"
                // });

                // Since we used CSS scroll-padding-top or simple CSS scroll behavior, we can try scrollIntoView
                // But for fixed headers, window.scrollTo with offset is most reliable.
                
                const headerHeight = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
