window.onload = function() {
  document.getElementById('image-button').focus();
 };
 
 const buttons = document.getElementsByClassName("image-button");
 for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.classList.add("fade-out");
    setTimeout(() => {
      this.style.display = "none";
    }, 1000);
  });
 }
 
 document.getElementById("image-button").addEventListener("click", function() {
  var popup = document.getElementById("profileoptions");
  if (popup.classList.contains("fade-effect")) {
    popup.classList.remove("fade-effect");
    setTimeout(() => {
      popup.style.display = "none";
    }, 1000);
  } else {
    popup.style.display = "block";
    setTimeout(() => {
      popup.classList.add("fade-effect");
    }, 1000);
  }
 });
 
 document.getElementById('image-button').addEventListener('click', function() {
  document.getElementById('loader').style.display = 'block';
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  }, 2000);
 });
 
 document.getElementById("close-button").addEventListener("click", function() {
  var popup = document.getElementById("profileoptions");
  popup.style.display = "none";
 });
 
 document.getElementById("close-button").addEventListener("click", function () {
  var popup = document.getElementById("profileoptions");
  popup.classList.remove("fade-effect");
  popup.classList.add("fade-out");
  setTimeout(() => {
    popup.style.display = "none";
    popup.classList.remove("fade-out");
  }, 1000);
 });
 
 document.getElementById("image-button").addEventListener("click", function () {
  var popup = document.getElementById("profileoptions");
  if (popup.classList.contains("fade-effect")) {
    popup.classList.remove("fade-effect");
    setTimeout(() => {
      popup.style.display = "none";
    }, 1000);
  } else {
    popup.style.display = "block";
    setTimeout(() => {
      popup.classList.add("fade-effect");
    }, 1000);
  }
 });
 
 const closeButton = document.getElementById("close-button");
 const imageButton = document.getElementById("image-button");
 
 closeButton.addEventListener("click", function() {
  var popup = document.getElementById("profileoptions");
  popup.classList.remove("fade-effect");
  setTimeout(() => {
    popup.style.display = "none";
  }, 1000);
 
  imageButton.style.display = "block";
  setTimeout(() => {
    imageButton.classList.remove("fade-out");
  }, 1000);
 });
 
 document.querySelector('.close-container').addEventListener('mouseover', function() {
  closeButton.style.transform = "scale(1.4)";
 });
 
 document.querySelector('.close-container').addEventListener('mouseout', function() {
  closeButton.style.transform = "scale(1)";
 });
 
 var profileCard = document.querySelector(".card.red");
 
 profileCard.addEventListener("click", function() {
  var profilePopup = document.getElementById("profilepopup");
  profilePopup.style.display = "block";
  setTimeout(() => {
    profilePopup.classList.add("fade-effect");
  }, 1000);
 });
 
 var closeProfilePopupButton = document.getElementById("close-profilepopup-button");
 
 closeProfilePopupButton.addEventListener("click", function() {
  var profilePopup = document.getElementById("profilepopup");
  profilePopup.style.display = "none";
 });
 
 var socialCard = document.querySelector(".card.blue");
 
 socialCard.addEventListener("click", function() {
  var socialPopup = document.getElementById("socialspopup");
  socialPopup.style.display = "block";
  setTimeout(() => {
    socialPopup.classList.add("fade-effect");
  }, 1000);
 });
 
 var closeSocialPopupButton = document.getElementById("close-socialspopup-button");
 
 closeSocialPopupButton.addEventListener("click", function() {
  var socialPopup = document.getElementById("socialspopup");
  socialPopup.style.display = "none";
 });
 
 window.onload = function() {
  setTimeout(() => {
    document.getElementById('image-button').focus();
    document.getElementById('image-button').scrollIntoView({behavior: "smooth"});
  }, 100);
 };
 
 var aboutMeCard = document.querySelector(".card.green");
 
 aboutMeCard.addEventListener("click", function() {
  var aboutMePopup = document.getElementById("aboutmepopup");
  aboutMePopup.style.display = "block";
  setTimeout(() => {
    aboutMePopup.classList.add("fade-effect");
  }, 1000);
 });
 
 var closeAboutMePopupButton = document.getElementById("close-aboutmepopup-button");
 
 closeAboutMePopupButton.addEventListener("click", function() {
  var aboutMePopup = document.getElementById("aboutmepopup");
  aboutMePopup.style.display = "none";
 });
 
 