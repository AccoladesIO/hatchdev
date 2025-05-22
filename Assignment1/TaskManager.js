var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TaskManager = /** @class */ (function () {
    function TaskManager(tasks) {
        this.tasks = [];
        this.tasks = tasks;
    }
    TaskManager.prototype.viewTasks = function () {
        console.log("Tasks: ".concat(this.tasks.length !== 0 ? this.tasks.join(', ') : '0'));
    };
    return TaskManager;
}());
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(tasks) {
        var _this = _super.call(this, tasks) || this;
        console.log("Admin created with tasks: ".concat(tasks.join(', ')));
        return _this;
    }
    Instructor.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("".concat(task, " added to the tasks"));
    };
    Instructor.prototype.removeTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log("".concat(task, " removed from the tasks"));
        }
        else {
            console.log("".concat(task, " not found in the tasks"));
        }
    };
    return Instructor;
}(TaskManager));
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(tasks) {
        var _this = _super.call(this, tasks) || this;
        console.log("Student created with tasks: ".concat(tasks.join(', ')));
        return _this;
    }
    Students.prototype.completeTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log("".concat(task, " completed"));
        }
        else {
            console.log("".concat(task, " not found in the tasks"));
        }
    };
    return Students;
}(TaskManager));
// Testing the functionality
var instructor = new Instructor(['Task 1', 'Task 2']);
instructor.addTask('Task 3');
instructor.viewTasks();
var student = new Students(['Task 1', 'Task 2']);
student.completeTask('Task 1');
student.viewTasks();
