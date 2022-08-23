// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listener
loadEventListener();

// Load all event listener
function loadEventListener(){
    // Load Local storage.
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add a task.
    form.addEventListener('submit', addTask);
    // Remove a task.
    taskList.addEventListener('click', removeTask);
    // Clear tasks.
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks.
    filter.addEventListener('keyup', filterTasks);
}

// Get tasks from local Storage.
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class = "fa fa-remove"></i>'
        li.appendChild(link);
        taskList.appendChild(li);
    }) 
}


// Add task
function addTask(e) {
    // If input is empty
    if (taskInput.value === '') {
        alert('Add a task');
        return;
    }

    // Creat list.
    const li = document.createElement('li');
    li.className = 'collection-item';

    // Append task from input.
    li.appendChild(document.createTextNode(taskInput.value));

    // Add icon
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    li.appendChild(link);

    // Append li to ul.
    taskList.appendChild(li);

    // Store in Local Storage.
    storeTaskInLocalStorage(taskInput.value);

    // Clear input.
    taskInput.value = '';

    // Prevent default.
    e.preventDefault();
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete a task.
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            // Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove tasks from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((task, index) => {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Clear tasks.
function clearTasks(e) {
    // taskList.innerHTML = '';

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from local storage.
    clearTaskFromLocalStorage();
}

function clearTaskFromLocalStorage(){
    localStorage.clear();
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}