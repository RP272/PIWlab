"use strict";
const addTaskButton = document.getElementById("addTaskButton");
const addListButton = document.getElementById("addListButton");
const taskInput = document.getElementById("taskInput");
const listInput = document.getElementById("listInput");
const whichList = document.getElementById("whichList");
const taskLists = document.getElementById("taskLists");
const list1 = document.getElementById("list1");
const deletionDialog = document.getElementById("deletionDialog");
const confirmButton = document.getElementById("confirmButton");
const listSearch = document.getElementById("listSearch");

let recycleBin = {
    listToDelete: null,
    listParent: null,
};

const leadingZero = (number) => {
    return number < 10 ? `0${number}` : number;
}

listSearch.addEventListener("input", () => {
    taskLists.querySelectorAll("li").forEach((element) => {
        element.classList.remove("displayNone");
        if(element.innerText.indexOf(listSearch.value) === -1){
            element.classList.add("displayNone");
        }
    })
})

addListButton.addEventListener("click", () => {
    let listName = listInput.value;
    if(listName.length === 0){
        alert("List name can't be empty string!"); 
        return;
    }
    let nameFound = false;
    taskLists.querySelectorAll("div").forEach((element) => {
        if(element.getAttribute("name") === listName){
            alert("List with that name already exists!");
            nameFound = true;
        }
    });
    if(nameFound === true) return;
    let newDiv = document.createElement("div");
    newDiv.setAttribute("name", listName);
    let newListName = document.createElement("p");
    newListName.innerText = listName;
    let newList = document.createElement("ul");
    newDiv.appendChild(newListName);
    newDiv.appendChild(newList);
    taskLists.appendChild(newDiv);
    whichList.innerHTML = "";
    taskLists.querySelectorAll("div").forEach((element) => {
        let newOption = document.createElement("option");
        newOption.value = element.getAttribute("name");
        newOption.innerText = element.getAttribute("name");
        whichList.appendChild(newOption);
    });
});

addTaskButton.addEventListener("click", () => {
    let taskDesc = taskInput.value;
    let selectedList = whichList.value;
    if(taskDesc.length === 0){
        alert("Task description can't be empty. Fill the input and try again!")
        return;
    }
    if(selectedList.length === 0){
        alert("No list selected! If there are no lists, add a new one.")
        return;
    }
    let newTask = document.createElement("li");
    newTask.innerHTML = `<span class="taskDesc">${taskDesc}</span> <button class="taskDeleteButton">X</button>`;
    taskLists.querySelector(`div[name="${selectedList}"] ul`).appendChild(newTask);
})


taskLists.addEventListener("click", (e) => {
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
        deletionDialog.querySelector("#deletionMessage").innerText = `Do you want to delete task with description: ${e.target.parentElement.getElementsByClassName("taskDesc")[0].innerText}`;
        recycleBin.listToDelete = e.target.parentElement;
        recycleBin.listParent = e.target.parentElement.parentElement;
        deletionDialog.showModal();
    }else if(e.target.nodeName === "P"){
        e.target.nextSibling.classList.toggle("displayNone");
    }
})

deletionDialog.addEventListener("close", (e) => {
    if(deletionDialog.returnValue === "confirm"){
        recycleBin.listParent.removeChild(recycleBin.listToDelete);
    }else{
        recycleBin.listToDelete = null;
        recycleBin.listParent = null;
    }
})

confirmButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    deletionDialog.close("confirm");
  });

window.addEventListener("keydown", (e) => {
    if(recycleBin.listToDelete !== null && e.ctrlKey && e.code == "KeyZ"){
        recycleBin.listParent.appendChild(recycleBin.listToDelete);
        recycleBin.listToDelete = null;
        recycleBin.listParent = null;
    }
})