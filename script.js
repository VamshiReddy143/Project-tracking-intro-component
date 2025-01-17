// GSAP animation for navbar items with stagger effect
gsap.from(".navbar", { 
    duration: 1, 
    y: -50, 
    opacity: 0, 
    ease: "power2.out",
    onStart: function() {
      document.querySelector('.navbar').style.visibility = "visible";
    }
  });
  
  gsap.from(".hero .left", { 
    duration: 1.5, 
    x: -100, 
    opacity: 0, 
    ease: "power2.out", 
    delay: 0.5,
    onStart: function() {
      document.querySelector('.hero .left').style.visibility = "visible";
    }
  });
  
  gsap.from(".hero .right", { 
    duration: 1.5, 
    x: 100, 
    opacity: 0, 
    ease: "power2.out", 
    delay: 0.5,
    onStart: function() {
      document.querySelector('.hero .right').style.visibility = "visible";
    }
  });
  
  gsap.from(".buttons button", { 
    duration: 1, 
    scale: 0, 
    opacity: 0, 
    ease: "elastic.out(1, 0.5)", 
    delay: 1,
    onStart: function() {
      document.querySelector('.buttons button').style.visibility = "visible";
    }
  });
  
  gsap.from(".navbar ul li", {
    duration: 2,
    delay: 1,
    y: -50, 
    opacity: 0, 
    ease: "power2.out",
    stagger: 0.2,
    onStart: function() {
      document.querySelectorAll('.navbar ul li').forEach(item => {
        item.style.visibility = "visible";
      });
    }
  });
  


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
