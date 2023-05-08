class Task {
    constructor(title,description,budget,status,date,color,important){
        this.title = title;
        this.description = description;
        this.budget = budget;
        this.status = status;
        this.date = date;
        this.color = color;
        this.important = important;
    }
}

class TaskManager {
    constructor(){
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteByIndex(index) {
        this.tasks.slice(index,1);
    }
}