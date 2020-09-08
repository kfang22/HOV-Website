const items = document.querySelectorAll('.animate');

const isInViewport = el => {

    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const run = () =>
    items.forEach(item => {

        // window.alert("test");
        if (isInViewport(item)) {
            console.log(item);
            // window.alert("test");
            item.classList.add('show');
            console.log(item.classList);
        }
        else {
            item.classList.remove('show');
        }
    });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
