//union types
let age: number | string = 23;
age = 24;
age = '24';

type Point = {
    x: number,
    y: number
}

type Loc = {
    lat: number,
    long: number,
}

let coordinates: Point | Loc = { x: 1, y: 34 }
coordinates = { lat: 7.556, long: 9.999 }

//Type Narrowing w/ Union Types
function printAge(age: number | string): void {
    console.log(`Your age is ${age}`)
}

function calculateTax(price: number | string, tax: number) {
    if (typeof price === 'string') {
        price = parseFloat(price.replace('$', ''))
    }
    return price * tax;
}

//Union Types and Arrays
const stuff: (number | string)[] = ['a', 'b', 'c', 1, 2, 3];
const coords: (Point | Loc)[] = [{ x: 1, y: 34 }, { lat: 7.556, long: 9.999 }];

//Literal Types
let mood: 'happy' | 'sad' = 'sad'
mood = 'angry'

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
let today: DayOfWeek = 'Monday';
today = 'Mon';