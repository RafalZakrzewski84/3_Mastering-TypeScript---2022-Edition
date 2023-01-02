//the object types
function printName(name: { first: string, last: string }): string {
    return `${name.last}, ${name.first}`;
};
printName({ first: 'Raf', last: 'Zak' });
printName({ first: 'Raf', last: 'Zak', age: 42 }); //error when passing object directly

const person = { first: 'Raf', last: 'Zak', age: 42, isAdmin: true }
printName(person); //no error if object assign to variable

let coordinate: { x: number, y: number } = { x: 42, y: 52 };

function crateCoordinate(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() }
}

//Type Aliases
type Point = {
    x: number,
    y: number
}

function doubleCoordinate(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
};

//Nested Objects
type Song = {
    title: string,
    artist: string,
    numStream: number,
    credits: {
        producer: string,
    }
}

const mySong: Song = {
    title: 'K44',
    artist: 'Kaliber 44',
    numStream: 1200000,
    credits: {
        producer: 'SONY'
    }
}

function printSong(song: Song): string {
    return `${song.title} - ${song.artist}`
}

function calulatePayout(song: Song): number {
    return song.numStream * 0.035
}

//Optional property and readonly modifier
type User = {
    readonly id: number,
    nick: string,
    name?: string // ?: optional
}

const reksio: User = {
    id: 123,
    nick: 'Reksio'
}

reksio.id = 456;

//Intersection Types
type Cat = {
    numLives: number
}

type Dog = {
    name: string
}

type CatDog = Cat & Dog & {
    age: number
}