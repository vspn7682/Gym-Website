const backToTop = document.querySelector('#backToTop');

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