/* ===== Animations & Observers ===== */

(() => {
    /* Counter Animation */
    const counters = document.querySelectorAll('[data-target]');
    const animateCounter = el => {
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const start = performance.now();
        const tick = now => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const value = target * eased;
            el.textContent = (target >= 100 ? Math.floor(value) : value.toFixed(0)) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
        };
        requestAnimationFrame(tick);
    };

    /* Stat bars fill */
    const bars = document.querySelectorAll('.stat__bar i');

    /* Scroll reveal */
    const targets = document.querySelectorAll('.station, .pkg, .service-card, .case, .member, .testi, .post, .faq-item, .section-title, .about__media, .about__body, .form, .cta-block h2, .cta-block p');
    targets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1)';
    });

    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                // Counters
                if (e.target.hasAttribute('data-target')) {
                    animateCounter(e.target);
                    io.unobserve(e.target);
                }
                // Bars
                if (e.target.closest('.stat__bar')) {
                    e.target.style.width = e.target.dataset.width || '70%';
                    io.unobserve(e.target);
                }
                // Reveal
                if (e.target.style.opacity === '0') {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                    io.unobserve(e.target);
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    counters.forEach(c => io.observe(c));
    bars.forEach(b => io.observe(b));
    targets.forEach(t => io.observe(t));
})();
