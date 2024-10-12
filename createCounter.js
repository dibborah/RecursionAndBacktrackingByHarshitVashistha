function createCounter(num) {
    num -= 1;
    return function() {
        return num += 1;
    }
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());