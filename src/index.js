/* eslint-disable import/no-unresolved */
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const tasks = [{
  index: 0,
  desc: 'wash dishes',
  completed: false,
}, {
  index: 1,
  desc: 'complete to do list project',
  completed: false,
}];

function displayTasks(container, tasks) {
  tasks.forEach((task) => {
    const listitem = document.createElement('li');
    const checkbox = document.createElement('input');
    const icon = document.createElement('span');
    icon.classList.add('setting', 'fa-solid', 'fa-ellipsis-vertical', 'fa-xl');
    checkbox.type = 'checkbox';
    listitem.contentEditable = 'true';
    listitem.appendChild(checkbox);
    listitem.appendChild(document.createTextNode(task.desc));
    listitem.appendChild(icon);
    listitem.addEventListener('input', () => {
      task.desc = listitem.innerText;
    });
    container.appendChild(listitem);
  });
}

const htmlTasksContainer = document.querySelector('ul');
displayTasks(htmlTasksContainer, tasks);