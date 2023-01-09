"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello from index.ts');
const axios_1 = __importDefault(require("axios"));
//axios get is generic function
//type declaration
//axios.get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
//Axios.get<any, AxiosResponse<any, any>, any>(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
//<User> as <T>
//Axios.get<User, AxiosResponse<User, any>, any>(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<User, any>>
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => {
    console.log('It works!!!');
    console.log(res.data);
    const { data } = res;
    printUser(data);
})
    .catch((e) => console.log('Error: ', e));
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
    console.log('It works!!!');
    console.log(res.data);
    const { data } = res;
    data.forEach(printUser);
})
    .catch((e) => console.log('Error: ', e));
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
    console.log(user.kind);
}
