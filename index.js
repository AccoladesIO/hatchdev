"use strict";
class Car {
    constructor(color, brandName, name) {
        this.engineOn = false;
        this.color = color;
        this.brandName = brandName;
        this.name = name;
    }
    startEngine() {
        this.engineOn = true;
        this.engineOn ? console.log('Engine started') : console.log('Engine not started');
    }
}
class SpeedCar extends Car {
    boost() {
        return this.startEngine();
    }
}
const speedCar = new SpeedCar('red', 'BMW', 'BMW X5');
// speedCar.color = 'blue'; // Error: Cannot assign to 'color' because it is a read-only property
speedCar.boost();
// const bmw = new Car('BMW', 'black', 'BMW X5');
// console.log(bmw);
// const audi  = new car ('Audi', 'red', 'Audi Q7');
class Person {
    constructor(name, height, complexion) {
        this.name = name;
        this.height = height;
        this.complexion = complexion;
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}
const person = new Person('tade', 5.9, 'fair');
person.sleep();
// console.log(person.sleep());
// classwork
// create a class with a name and an age property and every student should be abke to introduce themselves
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    intro() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
}
const firstStudent = new Student('John', 20);
firstStudent.intro();
// classwork 2
// create a bird class with a name and sound inheriting it from an animal class and be able to fly
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} makes a sound: ${this.sound}`);
    }
}
class Bird extends Animal {
    fly() {
        console.log(`${this.name} is flying`);
    }
}
const parrot = new Bird('Parrot', 'Squawk');
parrot.makeSound();
parrot.fly();
class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    static createGuest() {
        console.log(`${this.name} is a guest`);
    }
}
const user = new User('John', 'admin');
// user.createGuest(); // Error: Property 'createGuest' does not exist on type 'User'
console.log(user.name);
User.createGuest();
