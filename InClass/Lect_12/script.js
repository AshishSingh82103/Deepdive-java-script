document.getElementById('contactForm').addEventListener('submit', function(event) { 
    event.preventDefault(); 
    alert('Your message has been sent!'); 
});

// Smooth Scrolling for navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({

        });
    });
});

// shifting about the pernate 

// Dynamic Date in foooter
const year = new Date().getFullYear();
document.querySelector('footer p').textContent = `©${year} My Website. All rights reserved`;

// Interactive Services Section
const services = document.querySelectorAll('.service');
services.forEach(service=>{
    service.addEventListener('mouseenter', () =>{
    service.style.transform = 'scale(1.05)';
    service.style.transition = 'transform 0.3s';
});
service.addEventListener('mouseleave', () => {
    service.style.transform = 'scale(1)';
});

});