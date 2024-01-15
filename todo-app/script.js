const taskList = document.getElementById('taskList')
const btn = document.getElementById('btn')
const addTask = () => {
    let taskInputValue = taskInput.value;

    if (taskInputValue == ""){
        alert("Please select a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskInputValue;
    taskList.appendChild(li)

    taskInput.value = "";

    li.onclick = function() {
        // this.parentNode.removeChild(this)
        this.style.color = 'red';
        this.style.textDecoration = 'line-through';
    }
}

btn.addEventListener('click', addTask)
