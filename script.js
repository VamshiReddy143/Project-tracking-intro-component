
window.onload = function () {
    gsap.from(".navbar", { 
        duration: 1, 
        y: -50, 
        opacity: 0, 
        ease: "power2.out"
    });

    gsap.from(".hero .left", { 
        duration: 1.5, 
        x: -100, 
        opacity: 0, 
        ease: "power2.out", 
        delay: 0.5
    });

    gsap.from(".hero .right", { 
        duration: 1.5, 
        x: 100, 
        opacity: 0, 
        ease: "power2.out", 
        delay: 0.5
    });

    gsap.from(".buttons button", { 
        duration: 1, 
        scale: 0, 
        opacity: 0, 
        ease: "elastic.out(1, 0.5)", 
        delay: 1
    });

    gsap.from(".navbar ul li", {
        duration: 2,
        delay: 1,
        y: -50, 
        opacity: 0, 
        ease: "power2.out",
        stagger: 0.2
    });
}


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
