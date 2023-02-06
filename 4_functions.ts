function square(num: number) {
    return num * num
}
square(3);
square('sth');

const doSomething = (person: string, age: number, isFunny: boolean) => { }
doSomething('Rafa', 10, true);

//default value for function's argument
function greet(person: string = "stranger") {
    return `Hello, ${person}!!!`
}

//return type annotations
function addNumbers(x: number, y: number): number {
    return x + y
}
addNumbers(5, 5)

const strOrNum = (num: number): string | number => {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

//the void type - when function doesn't return value
function logFunct(msg: string): void {
    console.log(msg);
    console.log(msg);
}

//the never type - function that never finishes executing
function errorMsg(msg: string): never {
    return null;
    throw new Error(msg)
}