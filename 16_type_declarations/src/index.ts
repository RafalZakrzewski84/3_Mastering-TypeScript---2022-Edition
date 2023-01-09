console.log('Hello from index.ts');
import axios from 'axios';

//this library needed types installed by:
//npm install --save @types/lodash
import _ from 'lodash';

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

//axios get is generic function
//type declaration
//axios.get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
//Axios.get<any, AxiosResponse<any, any>, any>(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
//<User> as <T>
//Axios.get<User, AxiosResponse<User, any>, any>(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<User, any>>
axios
	.get<User>('https://jsonplaceholder.typicode.com/users/1')
	.then((res) => {
		console.log('It works!!!');
		console.log(res.data);
		const { data } = res;
		printUser(data);
	})
	.catch((e) => console.log('Error: ', e));

axios
	.get<User[]>('https://jsonplaceholder.typicode.com/users')
	.then((res) => {
		console.log('It works!!!');
		console.log(res.data);
		const { data } = res;
		data.forEach(printUser);
	})
	.catch((e) => console.log('Error: ', e));

function printUser(user: User) {
	console.log(user.name);
	console.log(user.email);
	console.log(user.phone);
	console.log(user.kind);
}
