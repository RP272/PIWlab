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
    newTask.innerHTML = `<span class="taskDesc">${taskDesc}</span>`;
    list1.appendChild(newTask);
})

const leadingZero = (number) => {
    return number < 10 ? `0${number}` : number;
}

list1.addEventListener("click", (e) => {
    if(e.target.classList.contains("taskDesc") === false) return;
    e.target.parentElement.classList.toggle("done")
    if(e.target.parentElement.classList.contains("done") === true){
        let currentDate = new Date();
        let day = leadingZero(currentDate.getDate());
        let month = leadingZero(currentDate.getMonth());
        let hours = leadingZero(currentDate.getHours());
        let minutes = leadingZero(currentDate.getMinutes());
        let seconds = leadingZero(currentDate.getSeconds());
        e.target.parentElement.innerHTML = e.target.parentElement.innerHTML + ` <span class="taskCompletionDate">${day}-${month}-${currentDate.getFullYear()} ${hours}:${minutes}:${seconds}</span>`
    }else{
        e.target.parentElement.removeChild(e.target.parentElement.getElementsByClassName("taskCompletionDate")[0])
    }
})