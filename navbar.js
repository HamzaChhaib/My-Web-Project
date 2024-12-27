const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('nav a');

hamburger.addEventListener('click', () => {
    navLinks.forEach(link => link.style.display = link.style.display === 'flex' ? 'none' : 'flex');
});