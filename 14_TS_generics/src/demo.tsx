//in react generic should end with "," => <T,>
const getRandomElementDemo = <T,>(list: T[]): T => {
	const randomIdx = Math.floor(Math.random() * list.length);
	return list[randomIdx];
};
