/* eslint-disable import/prefer-default-export */
export function toggleStatus(task) {
  if (task.completed === false) {
    task.completed = true;
  } else {
    task.completed = false;
  }
}