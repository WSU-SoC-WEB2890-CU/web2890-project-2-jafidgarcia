//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

console.log("testing");
///////////////////////////////////////////////////////////////////////
// this loop should stop video after 2 loops but it is not working 
const video = document.getElementById("mobileVideo");
var loopCount = 0;
video.addEventListener("ended", function() {
  console.log("ended event listener worked");
  loopCount++;
  if (loopCount > 2) {
    video.pause();
    console.log("Pause has been triggered");
  } 
  // else {
  //   video.pause();
  //   video.currentTime = 0;
  //   console.log("Pause has been triggered");
  // }
});
///////////////////////////////////////////////////////////////////////
var videos = document.querySelectorAll("video");
  
  videos.forEach(function(video) {
    var loopCount = 0;
    video.addEventListener("ended", function() {
      loopCount++;
      if (loopCount < 2) {
        video.play();
      }else{
        video.pause();
        video.currentTime = 0;
        console.log("Pause has been triggered");
      }
    });
  });
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////


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