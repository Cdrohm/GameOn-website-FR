function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); //gestion background
const modalBtn = document.querySelectorAll(".modal-btn"); //apparition formulaire au clic bouton
const formData = document.querySelectorAll(".formData"); //création ensemble clef-valeur (formulaire)

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


