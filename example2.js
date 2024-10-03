let i = 1;
function oneToN(n) {
    if(i > n){
        return;
    }
    // console.log((n + i) - n);
    console.log(i);
    i++;
    return oneToN(n);
}

oneToN(5);