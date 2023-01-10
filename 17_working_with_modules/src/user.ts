import type { Person } from './types'; //import type guarantee that this won't be contained in JS file
// import { type Person, someFunction } from './types'; //importing type and function

export default class User implements Person {
	constructor(public username: string, public email: string) {}
	logout() {
		console.log(`${this.username} logs out.`);
	}
}

export function userHelper() {
	console.log('user helper');
}

export const sample = 'Sample User';
