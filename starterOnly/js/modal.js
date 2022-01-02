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
const menuResponsive = document.querySelector("#myTopnav .icon")
const topNav = document.querySelector("#myTopnav")

// Elements button
const closeModalBtn = document.querySelectorAll(".close") //fermer le formulaire
const confirmationCloseBtn = document.querySelector("#btn-closed"); // bouton "fermer"
const formValid = document.querySelector("#btn-submit"); //formulaire validé

// Elements VALIDATE
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const eMail = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const eventParticipation = document.querySelector("#quantity");
const eventCity = document.querySelectorAll('.checkbox-input[name="location"]');
const cgu = document.querySelector("#checkbox1");

// elements ERROR
const errorFirstName = document.querySelector("#missfirst");
const errorLastName = document.querySelector("#misslast");
const errorMail = document.querySelector("#missemail");
const errorBirthDate = document.querySelector("#missbirthdate");
const errorEventParticipation = document.querySelector("#missquantity");
const errorEventCity = document.querySelector("#misslocalisation");
const errorCgu = document.querySelector("#misscheckbox1");
const numbersValue = /[0-9]/; //chiffres seulement
const regex = /^[a-zA-Z\s]*$/; //lettres seulement

const confirmationValidation = document.querySelector("#confirm-modal");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


