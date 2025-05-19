function getRandomNumber(min, max) {
    min = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(0, 100));
