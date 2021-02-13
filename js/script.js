const backToTop = document.querySelector('#backToTop');
const mobNav = document.querySelector('.mobNav');
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.classList.add('fade');
    } else {
        backToTop.classList.remove('fade');
    }
})

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0,0);
})

hamburger.addEventListener('click', () => {
    mobNav.classList.toggle('visible');
})