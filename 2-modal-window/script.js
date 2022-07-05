'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');

let isOpen = false;

function toggleModal() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  isOpen = !isOpen;
}

showModalBtns.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

closeModalBtn.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && isOpen) toggleModal();
});
