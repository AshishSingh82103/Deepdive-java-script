// --------- 13 ----------------

// -------------- Dom => data object manipulation ------------

document.addEventListener('DOMContentLoaded', () => { 
    const socialLinks = document.querySelectorAll('.social-media a'); 
    socialLinks.forEach(link => { 
        link.addEventListener('click', (e) => {
             e.preventDefault(); 
             alert(`Redirecting to ${link.textContent}...`); 
            }); 
        });
    });





