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


function readJSON(filename, callback){
    fs.readFile(filename, 'utf8', function (err, res){
      if (err) return callback(err);
      callback(null, JSON.parse(res));
    });
  }

  function readJSON(filename) {
    return readFile(filename, 'utf8').then(JSON.parse);
  }

  function readJSON(filename, callback){
    fs.readFile(filename, 'utf8', function (err, res){
      if (err) return callback(err);
      try {
        res = JSON.parse(res);
      } catch (ex) {
        return callback(ex);
      }
      callback(null, res);
    });
  }

  function readFile(filename, enc){
    return new Promise(function (fulfill, reject){
      fs.readFile(filename, enc, function (err, res){
        if (error) reject(error);
        else fulfill(res);
      });
    });
  }


const newComingFeautre = new Promise((resolve, reject) => {
  let value = null;
  if(value === null) {
    console.log(resolve,"send user is the main target is mainly cuase");
  } else if (value === undefined) {
    console.log(reject, "reject is error");
  }
});



