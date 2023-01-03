//Interfaces - used for giving shapes for objects
interface Point {
    x: number;
    y: number;
}

const pt: Point = { x: 123, y: 1234 }

//Readonly and optional properties, and methods
interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string; //optional
    sayHi: () => string; //method
    sayHello(): string; //method
}

const myThomas: Person = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 2121,
    sayHi: () => { return 'hi' },
    sayHello: function () { return 'hello' }
}

myThomas.first = "kadziahara"
myThomas.id = 222222

//Interface methods properties

interface MyProduct {
    name: string;
    price: number;
    setDiscount(amount: number): number;
}

const milk: MyProduct = {
    name: 'milk',
    price: 10,
    setDiscount(amount: number) {
        let newPrice = this.price * (1 - amount);
        this.price = newPrice
        return this.price
    }
}

//Reopening Interfaces
interface Cat {
    name: string;
    age: number;
}

interface Cat {
    breed: string;
    sound(): string;
}

const tomcat: Cat = {
    name: 'tomcat',
    age: 1,
    breed: 'kocur',
    sound() {
        return 'Meow'
    }
}

//Extending interfaces and multiple inheritance
interface MyPerson {
    name: string;
}
interface MyEmployee {
    surname: string;
    email: string;
}
interface MyEngineer extends MyPerson, MyEmployee {
    level: string;
    skills: string[];
}

const rafal: MyEngineer = {
    name: 'Rafal',
    surname: 'Zak',
    email: 'rafzak@wp.pl',
    level: 'junior',
    skills: ['js', 'ts', 'node']
}
