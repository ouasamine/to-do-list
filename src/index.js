/* eslint-disable import/no-unresolved */
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { addToList, removeFromList, updateStorage } from './add-remove.js';

const htmlTasksContainer = document.querySelector('ul');
const newTaskInput = document.querySelector('input');
let tasks = [];

function displayTasks(container) {
  container.innerHTML = '';
  const fetchedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (fetchedTasks) {
    tasks = fetchedTasks;
  }
  tasks.forEach((task) => {
    const listitem = document.createElement('li');
    const checkbox = document.createElement('input');
    const moveButt = document.createElement('div');
    const removeButt = document.createElement('div');
    const icon = document.createElement('span');
    const icon2 = document.createElement('span');
    icon.classList.add('fa-solid', 'fa-ellipsis-vertical', 'fa-lg');
    icon2.classList.add('fa-solid', 'fa-trash-can', 'fa-lg');
    moveButt.classList.add('move', 'setting');
    moveButt.appendChild(icon);
    // icon.classList.replace('fa-ellipsis-vertical', 'fa-trash-can');
    removeButt.classList.add('remove', 'setting');
    removeButt.appendChild(icon2);
    checkbox.type = 'checkbox';
    listitem.contentEditable = 'true';
    listitem.appendChild(checkbox);
    listitem.appendChild(document.createTextNode(task.desc));
    listitem.appendChild(moveButt);
    listitem.addEventListener('input', () => {
      task.desc = listitem.innerText;
      updateStorage(tasks);
    });
    container.appendChild(listitem);
    listitem.addEventListener('focus', (e) => {
      moveButt.remove();
      e.currentTarget.appendChild(removeButt);
      removeButt.addEventListener('click', () => {
        listitem.remove();
        removeFromList(tasks, task.index);
        updateStorage(tasks);
      });
    });
    listitem.addEventListener('focusout', (e) => {
      removeButt.remove();
      e.currentTarget.appendChild(moveButt);
    });
  });
}

displayTasks(htmlTasksContainer, tasks);
newTaskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addToList(tasks, e.currentTarget.value);
    updateStorage(tasks);
    displayTasks(htmlTasksContainer);
  }
});
