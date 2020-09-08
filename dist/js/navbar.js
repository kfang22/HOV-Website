const navbar = document.getElementById('main-nav');
let scrolled = false;

window.onscroll = function () {
    if (window.pageYOffset > 70) {
        navbar.classList.remove('top');
        if (!scrolled) {
            navbar.style.transform = 'translateY(-80px)';
        }
        setTimeout(function () {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
}

