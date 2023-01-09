//Union type not precise - narrow that down to more precise
//Typeof Guard - Narrowing, we are checking type of value
function triple(value: number | string) {
	if (typeof value === 'string') {
		return value.repeat(3); //here value is string
	}
	return value * 3; //here value is number
}

//Truthiness Guard
const printChar = (word?: string) => {
	//we are checking if word exist
	if (word) {
		for (let char of word) {
			console.log(char);
		}
	} else {
		console.log("Word doesn't exist");
	}
};

//Equality Type Guard - comparing types to each other
const checkType = (x: string | number, y: string | boolean) => {
	if (x === y) {
		x.toUpperCase();
	}
};

//in Operator narrowing - check if property exists in an object
const pet = { name: 'kitty', age: 20 };
'name' in pet; //true
'breed' in pet; //false

interface Movie {
	title: string;
	duration: number;
}

interface TVShow {
	title: string;
	numEpisodes: number;
	episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
	if ('numEpisodes' in media) {
		return media.episodeDuration * media.numEpisodes;
	}
	return media.duration;
}

//instanceof Narrowing
function formatDate(date: string | Date) {
	if (date instanceof Date) {
		console.log(date.toUTCString());
	} else {
		console.log(new Date(date).toUTCString());
	}
}

class User {
	constructor(public username: string) {}
}
class Company {
	constructor(public name: string) {}
}

function printName(entity: User | Company) {
	if (entity instanceof User) {
		entity; //User
	} else {
		entity; //Company
	}
}

//Type predicates
interface Cat {
	name: string;
	numLives: number;
}

interface Dog {
	name: string;
	breed: string;
}

//special function which is checking type of parameter
//if function return true, type of parameter is Cat
//animal is Cat is predicate
function isCat(animal: Cat | Dog): animal is Cat {
	return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
	if (isCat(animal)) {
		animal; //animal is cat
		return 'Meow';
	} else {
		animal; //animal is dog
		return 'Bark';
	}
}

//Discriminated unions
interface Rooster {
	name: string;
	weight: number;
	age: number;
	kind: 'rooster';
}
interface Cow {
	name: string;
	weight: number;
	age: number;
	kind: 'cow';
}
interface Pig {
	name: string;
	weight: number;
	age: number;
	kind: 'pig';
}
interface Sheep {
	name: string;
	weight: number;
	age: number;
	kind: 'sheep';
}
//every interface need to have kind property with exact value
type FarmAnimal = Rooster | Cow | Pig | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
	switch (animal.kind) {
		case 'rooster':
			animal;
			return 'kukuryku';
		case 'pig':
			animal;
			return 'Oink';
		case 'cow':
			animal;
			return 'Mooo';
		//Exhaustiveness Checks With Never
		default:
			//we should never make it here, if we handled all cases correctly
			//here is error because we don't handle sheep type
			// const shouldNeverGetHere: never = animal;
			// return shouldNeverGetHere;
			const _exhaustiveCheck: never = animal;
			return _exhaustiveCheck;
	}
}

const stevie: Rooster = {
	name: 'Stevie',
	weight: 2,
	age: 1.5,
	kind: 'cow',
};
