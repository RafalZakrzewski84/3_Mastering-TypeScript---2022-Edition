//array types

let cars: string[] = ['Fiat', 'Toyota'];
let cars2: Array<string> = ['Fiat', 'Toyota'];

let nums: number[] = [1, 2, 3];
let nums2: Array<number> = [1, 2, 3];

type Point = {
    x: number,
    y: number
}

let points: Point[] = [];
points.push({ x: 1, y: 2 });
points.push({ x: 3, y: '4' });