/* ===== UI Interactions ===== */

(() => {
    /* Mobile Menu */
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobileMenu');
    if (burger && menu) {
        const toggle = () => { 
            burger.classList.toggle('active'); 
            menu.classList.toggle('open'); 
        };
        burger.addEventListener('click', toggle);
        menu.querySelectorAll('a').forEach(a => a.addEventListener('click', toggle));
    }

    /* FAQ accordion */
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(i => { if (i !== item) i.classList.remove('active'); });
            item.classList.toggle('active');
        });
    });

    /* Nav stays fixed (removed hide on scroll) */
    const nav = document.getElementById('nav');

    /* Parallax stamp */
    const stamp = document.querySelector('.stamp');
    if (stamp) {
        addEventListener('mousemove', e => {
            const x = (e.clientX / innerWidth - 0.5) * 20;
            const y = (e.clientY / innerHeight - 0.5) * 20;
            stamp.style.translate = `${x}px ${y}px`;
        });
    }

    /* Testimonials Slider */
    const testiGrid = document.getElementById('testiGrid');
    const testiPrev = document.getElementById('testiPrev');
    const testiNext = document.getElementById('testiNext');

    if (testiGrid && testiPrev && testiNext) {
        const scrollAmount = 530; // Card width + gap

        testiNext.addEventListener('click', () => {
            testiGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        testiPrev.addEventListener('click', () => {
            testiGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
})();
