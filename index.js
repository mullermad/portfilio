
  document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();
    
    var year = currentDate.getFullYear();
   
    var dateElement = document.getElementById("date");
   
      dateElement.textContent =  '©  copyright   ' +year;
   
  });


  
  const profile = document.getElementById("headings");
  document.addEventListener("click", function () {
    
    profile.style.backgroundColor = "green";
  });










// When a navigation link is clicked, smooth scroll to the corresponding section
// document.querySelectorAll('.navigations a[href^="#"]').forEach((a) => {
//   a.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

// // Show a confirmation message when the contact form is submitted
// document
//   .querySelector("#contact form")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Thank you for your message! We will be in touch soon.");
//     // You can add code here to submit the form data to a server using AJAX
//   });
