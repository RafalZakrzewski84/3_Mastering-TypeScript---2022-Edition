console.log('Hello from index ts')

class Player {
    //types for variables from constructor
    readonly first: string
    readonly last: string

    //Class Fields
    protected _score: number = 0 //protected prop is accessible only in class and children
    numLive: number = 10

    //by default class props are public
    public apiPlayer: number = 123123
    private apiID: number = 123123 //privet prop is accessible only inside class

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
        this.playerPassword()
    }

    private playerPassword() {
        console.log(`${this.first} - PASSWORD!!!`)
    }

    get fullName(): string {
        return `${this.first} ${this.last}`
    }

    get score(): number {
        return this._score
    }
    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error('Score can not be negative!')
        }
        this._score = newScore
    }
}

class SuperPlayer extends Player {
    maxScore() {
        this._score = 9999999;
    }
}

let rafZak = new Player('Raf', 'Zak');

rafZak.last = 'ZakZak'
rafZak.apiID = 345345
rafZak.playerPassword()
console.log(rafZak.fullName)
console.log(rafZak.score)
rafZak.score = 1100;
console.log(rafZak.score)
rafZak.score = 100
console.log(rafZak.score)

//properties shortcut
class PlayerShortcut {
    constructor(public first: string, public last: string, private score: number) { }
}

let playerShort = new PlayerShortcut('short', 'player', 1000)

//Classes and interfaces
interface Colorful {
    color: string;
}

class Bike implements Colorful {
    constructor(public color: string) { }
}

class Jacket implements Colorful {
    constructor(public brand: string, public color: string) { }
}

const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'black')

//Abstract classes
abstract class Employee {
    constructor(public first: string, public last: string) { }
    abstract getPay(): number
    greet(): void {
        console.log('Hello !!!')
    }
}

class FullTimeEmployee extends Employee {

}

class FullTimeEmp extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last)
    }
    getPay(): number {
        return this.salary
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hourWork: number) {
        super(first, last)
    }
    getPay(): number {
        return this.hourlyRate * this.hourWork;
    }
}

const johnBrown = new Employee()

const betty = new FullTimeEmp('Betty', 'White', 95000);
console.log(betty.getPay())

const lucy = new PartTimeEmployee('Lucy', 'Pink', 10, 1000);
console.log(lucy.getPay())
lucy.greet()
