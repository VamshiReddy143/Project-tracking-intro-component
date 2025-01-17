


const hamburger = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.querySelector('.mob-nav');



hamburger.addEventListener('click', () => {
    navbar.style.display="block";
    hamburger.style.display = 'none';
    closeIcon.style.display = 'block';
   
});

closeIcon.addEventListener('click', () => {
    navbar.style.display="none";
    hamburger.style.display = 'block';
    closeIcon.style.display = 'none';
});
