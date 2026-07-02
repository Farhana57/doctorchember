   document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    themeToggle.addEventListener('click', () => {
        // html ট্যাগে 'dark' ক্লাস থাকলে সরাবে, না থাকলে যোগ করবে
        html.classList.toggle('dark');
        
        // বর্তমান অবস্থা লোকাল স্টোরেজে সেভ রাখবে
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });

    // পেজ রিফ্রেশ দিলেও যেন মোড মনে রাখে
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }


    // ২. মোবাইল মেনু লজিক
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', (event) => {
            if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // ৩. ইমেজ স্লাইডার লজিক
    const images = [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500",
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=500",
        "https://images.unsplash.com/photo-1551076805-e1866033e561?w=500"
    ];

    let currentIndex = 0;
    const sliderImage = document.getElementById('slider-image');

    function changeImage() {
        if (sliderImage) {
            sliderImage.style.opacity = 0;
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                sliderImage.src = images[currentIndex];
                sliderImage.style.opacity = 1;
            }, 500);
        }
    }

    if (sliderImage) {
        setInterval(changeImage, 3000);
    }

    // ৪. কাস্টম রিং কার্সার লজিক
    const cursor = document.getElementById('my-cursor-ring');

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const interactiveElements = document.querySelectorAll('a, button, input');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseover', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseout', () => cursor.classList.remove('hovering'));
        });
    }

});