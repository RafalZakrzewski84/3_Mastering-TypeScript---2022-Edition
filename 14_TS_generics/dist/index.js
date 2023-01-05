"use strict";
console.log('Hello from TS');
//Built-in generic
const telNum = [];
const colors = [];
//<generic>
const inputEl = document.querySelector('#username');
console.dir(inputEl);
inputEl.value = 'Happy hacking!!!';
const btn = document.querySelector('.btn');
//first generic function
//<Type> could be anything - convention is <T>
function identity(item) {
    return item;
}
identity(7);
identity(7);
identity('seven');
identity({ name: 'Blue' });
//Another generic function
function getRandomElement(list) {
    const randomIdx = Math.floor(Math.random() * list.length);
    return list[randomIdx];
}
console.log(getRandomElement([1, 2, 3, 4, 5, 6]));
//Infer generic type
getRandomElement(['a', 'b', 'c']); //TS know that we passed string array so T will be string
//Arrow function generic - in .tsx generic should be <T,> look in demo.tsx
const getRandomElementArrow = (list) => {
    const randomIdx = Math.floor(Math.random() * list.length);
    return list[randomIdx];
};
//Generics with multiple types
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const comboObj1 = merge({ name: 'Rafal' }, { daughters: ['Zosia', 'Iga'] });
const comboObj2 = merge({ name: 'Rafal' }, 9);
console.log(comboObj1);
console.log(comboObj2);
//Type Constraints
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const comboObj3 = mergeObjects({ name: 'Rafal' }, 9);
function printDoubleLength(item) {
    return item.length * 2;
}
printDoubleLength('jksadjkjsa'); //string has length
printDoubleLength(2);
//Default Type Parameters
//<T = number> => setting default generic
function makeEmptyArray() {
    return [];
}
const myNums = makeEmptyArray(); //return number[]
const myBools = makeEmptyArray(); //now boolean[]
class PlayList {
    constructor() {
        this.queue = [];
    }
    addToQueue(el) {
        this.queue.push(el);
    }
}
const songs = new PlayList();
songs.addToQueue();
const videos = new PlayList();
videos.addToQueue({ title: 'cos', creator: 'Rafzak', resolution: 'HD' });
console.log(videos);
