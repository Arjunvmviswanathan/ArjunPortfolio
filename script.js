window.onload = function(){
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function validateForm() {
  var email = document.getElementById("email").value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var name1 = document.getElementById("name").value;
  var message1 = document.getElementById("message").value;

  console.log("Email:", email);
  console.log("Name:", name1);
  console.log("Message:", message1);

  var isValidEmail = reg.test(email);

  if (!isValidEmail) {
    console.log("Invalid email address");
    alert("Sorry! Invalid email address");
    return false; 
  }

  if (name1.trim() === "" || message1.trim() === "") {
    console.log("Empty name or message");
    alert("Enter the proper name and message");
    return false;
  }

  console.log("Form submitted successfully");
  return true;
}
};

