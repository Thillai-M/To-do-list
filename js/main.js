function add_task(event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('nameInput');
    const taskText = nameInput.value.trim();

    const idInput = document.getElementById('idInput');
    const taskID = idInput.value.trim();

    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    let isValid = true;


    // Validate name input
    if (!taskText) {
        document.getElementById("name-inputerror").style.display = "block";
        isValid = false;
    }
    else if (taskText.length <3) {
        document.getElementById("length-inputerror").style.display = "block";
        isValid = false;
    }

    // Validate ID input
    if (!taskID) {
        document.getElementById("id-inputerror").style.display = "block";
        isValid = false;
    }
    else if (taskID.length < 5) {
        document.getElementById("lengthid-inputerror").style.display = "block";
        isValid = false;
    }

    // Validate task input
    if (!task) {
        document.getElementById("task-inputerror").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.className = 'D-flx G-30';
        newTask.innerHTML = `<div><span>${taskText}</span></div><div><span>${taskID}</span></div><div><span>${task}</span></div>`;
    
        taskList.appendChild(newTask);
        nameInput.value = '';
        idInput.value = '';
        taskInput.value = '';
    }
}
