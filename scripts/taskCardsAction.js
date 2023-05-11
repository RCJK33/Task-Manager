class Task {
    constructor(title, description, budget, status, date, color, important) {
        this.title = title;
        this.description = description;
        this.budget = budget;
        this.status = status;
        this.date = date;
        this.color = color;
        this.important = important;

        this.name = "Rafael"
    }
}

let taskList;

function removeTask(index) {
    taskList.splice(index,1);
    saveTasks();
    displayTaskCards()
}

function formatCardAtributes(task,index) {
    var imo;
    if (task.important === true) {
        imo = iconIsImportant;
    } else {
        imo = iconIsNoneImportant;
    }
    var cardEstructure = `
        <div id="${task._id}" class="taskcard" style="border-color: ${task.color};">
           
            <div class="taskcard-level icon-container">
                <i id="taskcard-importantIcon" class="clickable-icon fa-regular fa-heart ${imo}"></i>
            </div>
            <div class="taskcard-element">
                <div class="taskcard-status"><p style="color:${task.color};">${task.status}</p></div>
                <div class="taskcard-date"><p>${task.date}</p></div>
            </div>  
            <div class="taskcard-title"><p>${task.title}</p></div>
            <div class="taskcard-description"><p>${task.description}</p></div>
            <div class="taskcard-budget"><p style="color:${task.color};  font-weight: bold;">Budget</p><p>$${formatBudget(task.budget)}</p></div>
            <button class="taskcard-trash icon-container" onclick="removeTaskToServer('${task._id}')">
                <i class="clickable-icon fa-solid fa-trash" style="color:${task.color}"></i>
            </button>
        </div>
    `;
    return cardEstructure;
}

let taskSectionList = $('#list')
function displayTaskCards(taskList) {
    var card = ``;  
    for (let i = 0; i < taskList.length; i++) {
        card += formatCardAtributes(taskList[i],i);

    }
    taskSectionList.html(card);
}

const KEY = 'tasks';

function readTasksJSON(json) {
    if (!json) {
        // If you get here the LS is empty
        console.log("No taskss.");
        return []; // creating the array
    } else {
        console.log("No taskss.");
        let objList = JSON.parse(json); // Parse back ther string to into array
        return objList;
    }
}