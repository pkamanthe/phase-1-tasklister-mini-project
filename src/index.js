document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');

  form.addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents page from reloading
    addTask(taskInput.value);  // Calls a function to add the task
    taskInput.value = '';  // Clears the input field
  });
});
function addTask(taskDescription) {
  const taskList = document.getElementById('tasks');
  const newTask = document.createElement('li');
  newTask.textContent = taskDescription;

  // Optional: Add a delete button to each task
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', function() {
    newTask.remove();
  });

  newTask.appendChild(deleteBtn);
  taskList.appendChild(newTask);
}
const priority = document.getElementById('priority').value;
if (priority === 'high') {
  newTask.style.color = 'red';
} else if (priority === 'medium') {
  newTask.style.color = 'yellow';
} else {
  newTask.style.color = 'green';
}