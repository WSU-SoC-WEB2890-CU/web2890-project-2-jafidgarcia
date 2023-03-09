//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"



///////////////////////////////////////////////////////////////////////
// creates fade in effect for all sections when they are scrolled past
const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
  // Add a class to each section to set up the animation
  section.classList.add('fade-in');

  // Add an ID to each section to use with IntersectionObserver
  section.id = `section-${index + 1}`;

  // Create an IntersectionObserver for each section
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('show');
      }
    });
  });

  // Observe the section
  observer.observe(section);
});
///////////////////////////////////////////////////////////////////////



// // horizontal scroll effect for gallery
// var gallery = document.getElementById("gallery");
// var startingScroll = 0;

// window.addEventListener("scroll", function() {
//   var newScrollPosition = window.scrollY;
//   // var scrollDelta = newScrollPosition - startingScroll;
//   startingScroll = newScrollPosition;
//   var galleryItems = gallery.getElementsByTagName("img");
//   for (var i = 0; i < galleryItems.length; i++) {
//     galleryItems[i].style.transform = "translateX(" + (-startingScroll) + "px)";
//   }
// });

// window.addEventListener("wheel", function(event) {
//   if (event.deltaY > 0 ) {
//     gallery.scrollLeft += 150;
//   } else {
//     gallery.scrollLeft -= 150;
//   }
//   event.preventDefault();
// });














// function validateForm() {
//     var name =  document.getElementById('name').value;
//     if (name == "") {
//         document.querySelector('.status').innerHTML = "Name cannot be empty";
//         return false;
//     }
//     var email =  document.getElementById('email').value;
//     if (email == "") {
//         document.querySelector('.status').innerHTML = "Email cannot be empty";
//         return false;
//     } else {
//         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if(!re.test(email)){
//             document.querySelector('.status').innerHTML = "Email format invalid";
//             return false;
//         }
//     }
//     var subject =  document.getElementById('subject').value;
//     if (subject == "") {
//         document.querySelector('.status').innerHTML = "Subject cannot be empty";
//         return false;
//     }
//     var message =  document.getElementById('message').value;
//     if (message == "") {
//         document.querySelector('.status').innerHTML = "Message cannot be empty";
//         return false;
//     }
//     document.querySelector('.status').innerHTML = "Sending...";
//   }