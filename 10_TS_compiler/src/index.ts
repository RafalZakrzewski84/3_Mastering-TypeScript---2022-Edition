interface Chicken {
    name: string;
    breed: string;
    eggsPerWeek: number;
    color: string;
}

const norma: Chicken = {
    name: 'Norma',
    breed: 'Silkie',
    eggsPerWeek: 4,
    color: 'black',
}

const printProduct = (chicken: Chicken): void => console.log(`${chicken.name} is ${chicken.breed}`); 