document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger-menu");
    const lessonBar = document.getElementById("lesson-bar");

    // เมื่อคลิกที่ Hamburger จะเปิดหรือปิดเมนู
    hamburger.addEventListener('click', () => {
        lessonBar.classList.toggle('show');
    });

    // เก็บตำแหน่งการเลื่อนก่อนหน้า
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScrollTop) {
            // เมื่อเลื่อนลง ซ่อนปุ่ม Hamburger
            hamburger.classList.add('hidden');
        } else {
            // เมื่อเลื่อนขึ้น แสดงปุ่ม Hamburger
            hamburger.classList.remove('hidden');
        }

        // อัปเดตตำแหน่งการเลื่อน
        lastScrollTop = currentScroll;
    });
});
