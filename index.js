const modal = document.querySelector('.modal');
const model_box = document.querySelector('.modal-box');

function openModal(){
    model_box.classList.add('active');
    modal.classList.add('overlay');
}

function closeModal(){
    model_box.classList.remove('active');
    modal.classList.remove('overlay');
}