const form = document.querySelector('form');
const list = document.querySelector('#list');
const newTodo = document.querySelector("#new-todo");

form.onsubmit = e => {
    e.preventDefault();
    const input = document.querySelector('#item-input');
    if(input.value !== "") {
        list.innerHTML += '<li>' + input.value + ' <button class="delete">delete</button></li>';
        input.value = '';
        closeForm()
    }
};

list.onclick = e => {
    if (e.target !== e.currentTarget && e.target.nodeName === "BUTTON") {
        e.target.parentElement.remove();
    }

    if (e.target !== e.currentTarget && e.target.nodeName === "LI") {
        e.target.classList.toggle('done');
    }
};

const openForm = () => {
    newTodo.style.display = "block"
};

const closeForm = () => {
    newTodo.style.display = "none"
};