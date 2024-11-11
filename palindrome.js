// const s = 'bilal';
const s = 'rotor';

function isPalindrome(s) {
    let p = ''
    for(let i = s.length - 1; i >= 0; i--) {
        p += s[i];
    };
    return s === p;
}

console.log(isPalindrome(s));