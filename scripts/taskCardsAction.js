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

function formatCardAtributes(task) {
    var imo;
    if (task.important === true) {
        imo = iconIsImportant;
    } else {
        imo = iconIsNoneImportant;
    }
    var cardEstructure = `
        <div id="${task._id}" class="taskcard" style="border-color: ${task.color};" title="${task.name}">
           
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
            <button class="taskcard-trash icon-container">
                <i class="clickable-icon fa-solid fa-trash" style="color:${task.color}"></i>
            </button>
        </div>
    `;
    return cardEstructure;
}

let taskSectionList = $('#list')
function displayTaskCards(tasks) {
    var card = ``;

    if (tasks.length === undefined) {
        card = formatCardAtributes(tasks);
        taskSectionList.append($(card));

        var taskDiv = $('#'+tasks._id+' button');
        taskDiv.on('click',function (){
            removeTaskToServer(''+tasks._id);
        });

        var taskCard = $('#'+tasks._id)
        taskCard.slideUp(0);
        taskCard.slideToggle();
        return
    }

    for (let i = 0; i < tasks.length; i++) {
        card = formatCardAtributes(tasks[i]);
        taskSectionList.append($(card));
        
        var taskDiv = $('#'+tasks[i]._id+' button');
        taskDiv.on('click',function (){
            removeTaskToServer(''+tasks[i]._id);
        });
    }
}