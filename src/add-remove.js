export function addToList(tasksArray, newTaskDesc) {
  const newIndex = tasksArray.length ? tasksArray.length : 0;
  tasksArray.push({
    index: newIndex,
    desc: newTaskDesc,
    completed: false,
  });
}

export function removeFromList(tasksArray, taskInedx) {
  tasksArray.splice(taskInedx, 1);
}

function updateIndexes(tasksArray) {
  let cn = 0;
  tasksArray.forEach((task) => {
    task.index = cn;
    cn += 1;
  });
}

export function updateStorage(tasksArray) {
  if (tasksArray) {
    updateIndexes(tasksArray);
    const storeTasksArray = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', storeTasksArray);
  }
}
