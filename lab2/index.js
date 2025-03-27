const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskLists = document.getElementById("taskLists");
const list1 = document.getElementById("list1");

const leadingZero = (number) => {
    return number < 10 ? `0${number}` : number;
}

let recycleBin;

addTaskButton.addEventListener("click", () => {
    let taskDesc = taskInput.value;
    if(taskDesc.length === 0){
        alert("Task description can't be empty. Fill the input and try again!")
        return;
    }
    let newTask = document.createElement("li");
    newTask.innerHTML = `<span class="taskDesc">${taskDesc}</span> <button class="taskDeleteButton">X</button>`;
    list1.appendChild(newTask);
})


list1.addEventListener("click", (e) => {
    if(e.target.classList.contains("taskDesc") === true){
        // Display completion date and change li styles.
        e.target.parentElement.classList.toggle("done")
        if(e.target.parentElement.classList.contains("done") === true){
            let currentDate = new Date();
            let day = leadingZero(currentDate.getDate());
            let month = leadingZero(currentDate.getMonth());
            let hours = leadingZero(currentDate.getHours());
            let minutes = leadingZero(currentDate.getMinutes());
            let seconds = leadingZero(currentDate.getSeconds());
            e.target.parentElement.innerHTML = e.target.parentElement.innerHTML + ` <span class="taskCompletionDate">${day}-${month}-${currentDate.getFullYear()} ${hours}:${minutes}:${seconds}</span>`;
        }else{
            e.target.parentElement.removeChild(e.target.parentElement.getElementsByClassName("taskCompletionDate")[0]);
        }
    }else if(e.target.classList.contains("taskDeleteButton") === true){
        // Delete li node if X button was clicked.
        recycleBin = e.target.parentElement;
        list1.removeChild(e.target.parentElement);
    }
})

window.addEventListener("keydown", (e) => {
    if(recycleBin !== null && e.ctrlKey && e.code == "KeyZ"){
        list1.appendChild(recycleBin);
        recycleBin = null;
    }
})