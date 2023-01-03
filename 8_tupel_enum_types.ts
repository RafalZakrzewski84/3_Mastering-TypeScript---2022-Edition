//tuples - arrays with fixed length and types
let color: [number, number, number] = [];
color = [1, 2, 3, 4];

let stuff: [number, string] = [];
stuff = [10, 'ten'];
stuff = ['ten', 10];

type HTTPResponse = [number, string]
const goodRes: HTTPResponse = [200, 'OK']
goodRes[0] = '200'; //not allowed
goodRes.push(123); //allowed !!!

const responses: HTTPResponse[] = [[200, 'ok'], ['Not found', 404]];

//Enums - set of named constants
enum OrderStatus {
    SENT, //by default 0
    PENDING, //1
    DELIVERED, //2
    REJECTED //3
}

const myStatus = OrderStatus.PENDING;

enum ArrowKeys {
    LEFT = 'left',
    UP = 'up',
    RIGHT = 'right',
    DOWN = 'down',
    ERROR = 233
}

let move = ArrowKeys.LEFT;