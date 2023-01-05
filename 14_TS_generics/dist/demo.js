"use strict";
//in react generic should end with "," => <T,>
const getRandomElementDemo = (list) => {
    const randomIdx = Math.floor(Math.random() * list.length);
    return list[randomIdx];
};
