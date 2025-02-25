'use strict';

// console.log(document.querySelectorAll('.show-modal'));
// console.log(document.querySelector('.close-modal'));

// const openModal = document.querySelector('.show-modal').textContent;

// console.log(document.querySelectorAll('.show-modal').length);

//**Attaching event listener to all the buttons using for loop instead attaching individually each and removing hidden class to display data **

for (let i = 0; i < document.querySelectorAll('.show-modal').length; i++) {
  //console.log(document.querySelectorAll('.show-modal')[i].textContent);

  document
    .querySelectorAll('.show-modal')
    [i].addEventListener('click', function () {
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.overlay').classList.remove('hidden');
    });
}

//** Attaching listner to close X button and adding hidden to hide data
document.querySelector('.close-modal').addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  //console.log(`${e.key} is pressed`);
  if (
    e.key === 'Escape' &&
    !document.querySelector('.modal').classList.contains('hidden')
  ) {
    //Meaning if escape is pressed and the modal is open then close the data

    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
  }
});
