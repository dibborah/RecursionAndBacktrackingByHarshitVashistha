function calcPower(a, b) {
    if (b === 1) return a;
    return a * calcPower(a, b - 1 );
}

console.log(calcPower(2,4));