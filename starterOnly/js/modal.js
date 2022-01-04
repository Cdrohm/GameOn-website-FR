

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
const radios = document.querySelectorAll('input[name="location"]');
//const eventCity = document.querySelector('input[name="location"]');
//console.log(eventCity);
const cgu = document.querySelector("#checkbox1");

// elements ERROR
const errorFirstName = document.querySelector("#missfirst");
const errorLastName = document.querySelector("#misslast");
const errorMail = document.querySelector("#missemail");
const errorBirthDate = document.querySelector("#missbirthdate");
const errorEventParticipation = document.querySelector("#missquantity");
const errorEventCity = document.querySelector('#misslocation');
const errorCgu = document.querySelector("#misscheckbox1");
const numbersValue = /[0-9]/; //chiffres seulement
const regex = /^[a-zA-Z\s]*$/; //lettres seulement
const confirmationValidation = document.querySelector("#confirm-modal");

/**declaration appel input location (villes) */
//console.log(radios);
let prev = null;
let eventCity = null;
for (var i = 0; i < radios.length; i++) {
  radios[i].onclick = function () {
    eventCity = this.value;
  };
}

// elements SEND FORM (envoi formulaire)
const form = document.querySelector('form[name="reserve"]')

// Menu dépliant (responsive)
menuResponsive.addEventListener('click', editNav);
//Changement du menu selon taille écran / menu 'burger'
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  confirmationValidation.style.display = 'none';
}

// Close Modal Form
closeModalBtn[0].addEventListener("click", closeModal);
//fonction fermeture du formulaire
function closeModal() {
  modalbg.style.display = 'none';
  form.style.display = 'block';
  confirmationValidation.style.display = 'none';
}

// Send Form Registration
form.addEventListener('submit', function (e) {
  e.preventDefault();
  validate();
});

// validate FORM INPUT
/**
 * validation prénom (lettres seulement)
 * @param {*} firstName 
 * @returns message d'erreur si chiffres ou -2 caractères
 */
function validateFirstName(firstName) {
  //console.log (firstName.value.match(regex),regex.test(firstName));
  if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)) {
    errorFirstName.style.display = "inline";
    errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    errorFirstName.style.color = 'red';
    errorFirstName.style.fontSize = '0.8rem';
    errorFirstName.style.marginTop = '10px';
    firstName.style.border = 'solid red 2px';
    return false;
  } else {
    errorFirstName.style.display = 'none';
    firstName.style.border = 'solid #279e7a 3px';
    return true;
  };
}

/**
 * validation nom de famille (lettres seulement)
 * @param {*} lastName 
 * @returns message d'erreur si chiffres ou -2 caractères
 */
function validateLastName(lastName) {
  if (lastName.value.toString().trim().length < 2 || first.value.trim() === '' || !lastName.value.match(regex)) {
    errorLastName.style.display = 'inline';
    errorLastName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
    errorLastName.style.color = 'red';
    errorLastName.style.fontSize = '0.8rem';
    errorLastName.style.marginTop = '10px';
    lastName.style.border = 'solid red 2px';
    return false;
  } else {
    errorLastName.style.display = 'none';
    lastName.style.border = 'solid #279e7a 3px';
    return true;
  }
}

/**
 * validation email avec @.XXX
 * @param {*} eMail 
 * @returns message d'erreur
 */
function validateEmail(eMail) {
  if (!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(eMail.value)) {
    errorMail.style.display = "inline"
    errorMail.innerText = "Veuillez entrer une adresse mail valide.";
    errorMail.style.color = 'red';
    errorMail.style.fontSize = '0.8rem';
    errorMail.style.marginTop = '10px';
    eMail.style.border = 'solid red 2px';
    return false;
  } else {
    errorMail.style.display = 'none';
    eMail.style.border = 'solid #279e7a 3px';
    return true;
  }
}

/**
 * validation date d'anniversaire
 * @param {*} birthDate choisir une date sur le calendrier
 * @returns message d'erreur
 */
function validateBirthdate(birthDate) {
  if (!birthDate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
    errorBirthDate.style.display = "inline";
    errorBirthDate.innerText = "Veuillez indiquer votre date de naissance.";
    errorBirthDate.style.color = 'red';
    errorBirthDate.style.fontSize = '0.8rem';
    errorBirthDate.style.marginTop = '10px';
    birthDate.style.border = 'solid red 2px';
    return false;
  } else {
    errorBirthDate.style.display = 'none';
    birthDate.style.border = 'solid #279e7a 3px';
    return true;
  };
}

/**
 * validation participation aux anciens evenements (nombre)
 * @param {*} eventParticipation 
 * @returns message d'erreur 
 */
function validateEventParticipation(eventParticipation) {
  if (!eventParticipation.value.match(numbersValue)) {
    errorEventParticipation.style.display = "inline";
    errorEventParticipation.innerText = "Veuillez indiquer un nombre de participation à nos tournois."
    errorEventParticipation.style.color = 'red';
    errorEventParticipation.style.fontSize = '0.8rem';
    errorEventParticipation.style.marginTop = '10px';
    eventParticipation.style.border = 'solid red 2px';
    return false;
  } else {
    errorEventParticipation.style.display = 'none';
    eventParticipation.style.border = 'solid #279e7a 3px';
    return true;
  };
}

/**
 * validation du choix de la ville par cochage d'une case
 * @param {*} eventCity 
 * @returns message d'erreur
 */
function validateEventCity(eventCity) {
  // console.log(eventCity)
  if (eventCity == undefined || eventCity == null) {
    errorEventCity.style.display = "inline-block";
    errorEventCity.innerText = "Veuillez choisir une ou plusieurs ville(s).";
    errorEventCity.style.color = 'red';
    errorEventCity.style.fontSize = '0.8rem';
    errorEventCity.style.marginTop = '10px';
    errorEventCity.style.width = '100%';
    return false;
  } else {
    errorEventCity.style.display = 'none';
    return true;
  };
}

/**
 * validation des cgu par cochage de case (précochée)
 * @param {*} cgu 
 * @returns message d'erreur
 */
function validateCgu(cgu) {
  if (cgu.checked == false) {
    errorCgu.style.display = "inline";
    errorCgu.innerText = "Vous devez accepter les termes et conditions.";
    errorCgu.style.color = 'red';
    errorCgu.style.fontSize = '0.8rem';
    errorCgu.style.marginTop = '10px';
    return false;
  } else {
    errorCgu.style.display = 'none';
    return true;
  };
}

// Validation form 
function validate() {
  //déclarer une variable
  let isFormValidate = [];

  isFormValidate.push(validateFirstName(firstName));
  isFormValidate.push(validateLastName(lastName));
  isFormValidate.push(validateEmail(eMail));
  isFormValidate.push(validateBirthdate(birthDate));
  isFormValidate.push(validateEventParticipation(eventParticipation));
  isFormValidate.push(validateEventCity(eventCity));
  isFormValidate.push(validateCgu(cgu));

  if (!isFormValidate.includes(false)) {
    form.style.display = 'none';
    confirmationValidation.style.display = 'flex';
  }
}

// Close form with message 
document.querySelector("#btn-closed").addEventListener("click", closeModal);

//réinitialisation du formulaire (bonus)
/*console.log((formData));
document.getElementById("reserve").reset();*/