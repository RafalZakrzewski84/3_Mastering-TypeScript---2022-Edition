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
