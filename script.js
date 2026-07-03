document.addEventListener('DOMContentLoaded', () => {
    
    // ১. থিম টগল
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // ২. মোবাইল মেনু
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

    // ৩. ইমেজ স্লাইডার
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
    if (sliderImage) setInterval(changeImage, 3000);

    // ৪. কাস্টম রিং কার্সার (এটি ঠিক করে দিয়েছি)
    const ringCount = 6;
    const rings = [];

    for (let i = 0; i < ringCount; i++) {
        const div = document.createElement('div');
        div.className = 'cursor-ring';
        // রিংয়ের সাইজ সেট করছি
        let size = 40 - (i * 5);
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        document.body.appendChild(div);
        rings.push(div);
    }

    document.addEventListener('mousemove', (e) => {
        rings.forEach((ring, index) => {
            setTimeout(() => {
                ring.style.left = e.clientX + 'px';
                ring.style.top = e.clientY + 'px';
            }, index * 20);
        });
    });
});
