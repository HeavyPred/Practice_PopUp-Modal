const openbtn = document.getElementById('openbtn');
const closebtn = document.getElementById('closebtn');
const modalback = document.getElementById('modalback');
const modalcard = document.getElementById('modalcard');

openbtn.addEventListener('click', OpenModal);

function OpenModal() {
    modalback.classList.toggle('hidden');
}

closebtn.addEventListener('click', CloseModal);

function CloseModal() {
    modalback.classList.toggle('hidden');
}

window.addEventListener('click', ClickOutside);

function ClickOutside(e) {
    if (e.target == modalback)
    {
        modalback.classList.toggle('hidden');
    }
}