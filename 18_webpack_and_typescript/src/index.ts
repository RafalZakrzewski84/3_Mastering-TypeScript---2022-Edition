import Dog from './Dog.js';
import ShelterDog from './shelterDog.js';
import { add, multiply, divide, subtract } from './utils.js';
console.log('Hello from index.ts');

const elton = new Dog('Elton', 'Aussie', 14);
elton.bark();

console.log(add(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
console.log(subtract(10, 5));

const buffy = new ShelterDog('Buffy', 'Pitbull', 2, 'Ciapkow');
buffy.bark();
