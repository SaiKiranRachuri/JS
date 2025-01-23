'use strict';

const showModalButtonsList = document.querySelectorAll('.show-modal');
const modalContent = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');

const removeHiddenClass = function () {
  modalContent.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const addHiddenClass = function () {
  modalContent.classList.add('hidden');
  overlay.classList.add('hidden');
};

//**Attaching event listener to all the buttons using for loop instead attaching individually each and removing hidden class to display data **

let i = 0;
for (i = 0; i < showModalButtonsList.length; i++) {
  showModalButtonsList[i].addEventListener('click', function () {
    removeHiddenClass();
  });
}

//** Attaching listner to close X button and adding hidden class to hide data

closeButton.addEventListener('click', function () {
  addHiddenClass();
});

//** Attaching listener to Escape keyboard event and adding hidden class to hide data

document.addEventListener('keydown', function (e) {
  //Meaning if escape is pressed and the modal is open then close the data
  if (e.key === 'Escape' && !modalContent.classList.contains('hidden')) {
    addHiddenClass();
  }
});
