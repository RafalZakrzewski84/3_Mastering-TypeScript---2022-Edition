//special function which is checking type of parameter
//if function return true, type of parameter is Cat
//animal is Cat is predicate
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal; //animal is cat
        return 'Meow';
    }
    else {
        animal; //animal is dog
        return 'Bark';
    }
}
function getFarmAnimalSound(animal) {
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
    }
}
