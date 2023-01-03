//tuples - arrays with fixed length and types
var color = [];
color = [1, 2, 3, 4];
var stuff = [];
stuff = [10, 'ten'];
stuff = ['ten', 10];
var goodRes = [200, 'OK'];
goodRes[0] = '200'; //not allowed
goodRes.push(123); //allowed !!!
var responses = [
	[200, 'ok'],
	['Not found', 404],
];
//Enums - set of named constants
var OrderStatus;
(function (OrderStatus) {
	OrderStatus[(OrderStatus['SENT'] = 0)] = 'SENT';
	OrderStatus[(OrderStatus['PENDING'] = 1)] = 'PENDING';
	OrderStatus[(OrderStatus['DELIVERED'] = 2)] = 'DELIVERED';
	OrderStatus[(OrderStatus['REJECTED'] = 3)] = 'REJECTED'; //3
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.PENDING;
var ArrowKeys;
(function (ArrowKeys) {
	ArrowKeys['LEFT'] = 'left';
	ArrowKeys['UP'] = 'up';
	ArrowKeys['RIGHT'] = 'right';
	ArrowKeys['DOWN'] = 'down';
	ArrowKeys[(ArrowKeys['ERROR'] = 233)] = 'ERROR';
})(ArrowKeys || (ArrowKeys = {}));
var move = ArrowKeys.LEFT;
