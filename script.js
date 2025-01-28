function smoothScroll(target, duration) {
var target = document.querySelector(target);
var targetPosition = target.getBoundingClientRect().top;
var startPosition = window.pageYOffset;
var distance = targetPosition - startPosition;
var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = easing(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    function easing(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
var home = document.querySelector('#Home');var about = document.querySelector('#About');var services = document.querySelector('#Services');var contact = document.querySelector('#Contact');
var homeLink = document.querySelector('nav a[href="#Home"]');var aboutLink = document.querySelector('nav a[href="#About"]');var servicesLink = document.querySelector('nav a[href="#Services"]');var contactLink = document.querySelector('nav a[href="#Contact"]');

homeLink.addEventListener('click',function () {
    smoothScroll('#Home', 1000);
});

aboutLink.addEventListener('click', function () {
    smoothScroll('#About', 1000);
});

servicesLink.addEventListener('click', function () {
    smoothScroll('#Services', 1000);
});

contactLink.addEventListener('click', function () {
    smoothScroll('#Contact', 1000);
});

window.onload = function() {
    if (window.location.hash === "#About", "#Contact") {
        window.location.hash = "#home";
        setTimeout(function() {
            window.scrollTo(0, 0); // Scroll to the top (Home section)
        }, 100);
    }
};

