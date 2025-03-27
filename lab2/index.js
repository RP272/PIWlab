const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskLists = document.getElementById("taskLists");
const list1 = document.getElementById("list1");

addTaskButton.addEventListener("click", () => {
    let taskDesc = taskInput.value;
    if(taskDesc.length === 0){
        alert("Task description can't be empty. Fill the input and try again!")
        return;
    }
    let newTask = document.createElement("li");
    newTask.innerText = taskDesc;
    list1.appendChild(newTask);
})

list1.addEventListener("click", (e) => {
    e.target.classList.toggle("done")
})