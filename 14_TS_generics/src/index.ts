console.log('Hello from TS');

//Built-in generic
const telNum: Array<number> = [];
const colors: Array<string> = [];

//<generic>
const inputEl = document.querySelector<HTMLInputElement>('#username')!;
console.dir(inputEl);
inputEl.value = 'Happy hacking!!!';

const btn = document.querySelector<HTMLButtonElement>('.btn')!;

//first generic function
//<Type> could be anything - convention is <T>
function identity<Type>(item: Type): Type {
	return item;
}

identity<number>(7);
identity<string>(7);
identity<string>('seven');

interface Cat {
	name: string;
}
identity<Cat>({ name: 'Blue' });

//Another generic function
function getRandomElement<T>(list: T[]): T {
	const randomIdx = Math.floor(Math.random() * list.length);
	return list[randomIdx];
}

console.log(getRandomElement<number>([1, 2, 3, 4, 5, 6]));

//Infer generic type
getRandomElement(['a', 'b', 'c']); //TS know that we passed string array so T will be string

//Arrow function generic - in .tsx generic should be <T,> look in demo.tsx
const getRandomElementArrow = <T>(list: T[]): T => {
	const randomIdx = Math.floor(Math.random() * list.length);
	return list[randomIdx];
};

//Generics with multiple types
function merge<T, U>(obj1: T, obj2: U) {
	return { ...obj1, ...obj2 };
}

const comboObj1 = merge({ name: 'Rafal' }, { daughters: ['Zosia', 'Iga'] });
const comboObj2 = merge({ name: 'Rafal' }, 9);
console.log(comboObj1);
console.log(comboObj2);

//Type Constraints
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U) {
	return { ...obj1, ...obj2 };
}
const comboObj3 = mergeObjects({ name: 'Rafal' }, 9);

interface Lengthy {
	length: number;
}

function printDoubleLength<T extends Lengthy>(item: Lengthy): number {
	return item.length * 2;
}
printDoubleLength('jksadjkjsa'); //string has length
printDoubleLength(2);

//Default Type Parameters
//<T = number> => setting default generic
function makeEmptyArray<T = number>(): T[] {
	return [];
}

const myNums = makeEmptyArray(); //return number[]
const myBools = makeEmptyArray<boolean>(); //now boolean[]

//Generic Classes
interface Song {
	title: string;
	artist: string;
}

interface Video {
	title: string;
	creator: string;
	resolution: string;
}

class PlayList<T> {
	queue: T[] = [];
	addToQueue(el: T) {
		this.queue.push(el);
	}
}

const songs = new PlayList<Song>();
songs.addToQueue();

const videos = new PlayList<Video>();
videos.addToQueue({ title: 'cos', creator: 'Rafzak', resolution: 'HD' });
console.log(videos);
