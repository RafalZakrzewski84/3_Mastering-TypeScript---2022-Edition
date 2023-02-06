"use strict";
console.log('Hello from index ts');
class Player {
    constructor(first, last) {
        //Class Fields
        this._score = 0; //protected prop is accessible only in class and children
        this.numLive = 10;
        //by default class props are public
        this.apiPlayer = 123123;
        this.apiID = 123123; //privet prop is accessible only inside class
        this.first = first;
        this.last = last;
        this.playerPassword();
    }
    playerPassword() {
        console.log(`${this.first} - PASSWORD!!!`);
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Score can not be negative!');
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    maxScore() {
        this._score = 9999999;
    }
}
let rafZak = new Player('Raf', 'Zak');
rafZak.last = 'ZakZak';
rafZak.apiID = 345345;
rafZak.playerPassword();
console.log(rafZak.fullName);
console.log(rafZak.score);
rafZak.score = 1100;
console.log(rafZak.score);
rafZak.score = 100;
console.log(rafZak.score);
//properties shortcut
class PlayerShortcut {
    constructor(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
    }
}
let playerShort = new PlayerShortcut('short', 'player', 1000);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}
const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'black');
//Abstract classes
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log('Hello !!!');
    }
}
class FullTimeEmployee extends Employee {
}
class FullTimeEmp extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hourWork) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hourWork = hourWork;
    }
    getPay() {
        return this.hourlyRate * this.hourWork;
    }
}
const johnBrown = new Employee();
const betty = new FullTimeEmp('Betty', 'White', 95000);
console.log(betty.getPay());
const lucy = new PartTimeEmployee('Lucy', 'Pink', 10, 1000);
console.log(lucy.getPay());
lucy.greet();
