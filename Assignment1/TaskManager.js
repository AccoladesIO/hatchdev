"use strict";
class TaskManager {
    constructor(tasks) {
        this.tasks = [];
        this.tasks = tasks;
    }
    viewTasks() {
        console.log(`Tasks: ${this.tasks.length !== 0 ? this.tasks.join(', ') : '0'}`);
    }
}
class Instructor extends TaskManager {
    constructor(tasks) {
        super(tasks);
        console.log(`Admin created with tasks: ${tasks.join(', ')}`);
    }
    addTask(task) {
        this.tasks.push(task);
        console.log(`${task} added to the tasks`);
    }
    removeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log(`${task} removed from the tasks`);
        }
        else {
            console.log(`${task} not found in the tasks`);
        }
    }
}
class Students extends TaskManager {
    constructor(tasks) {
        super(tasks);
        console.log(`Student created with tasks: ${tasks.join(', ')}`);
    }
    completeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log(`${task} completed`);
        }
        else {
            console.log(`${task} not found in the tasks`);
        }
    }
}
// Testing the functionality
const instructor = new Instructor(['Task 1', 'Task 2']);
instructor.addTask('Task 3');
instructor.viewTasks();
const student = new Students(['Task 1', 'Task 2']);
console.log(student);
student.completeTask('Task 1');
student.viewTasks();
