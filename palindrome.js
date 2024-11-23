// const s = 'bilal';
const s = 'rotor';

function isPalindrome(s) {
    let p = ''
    for(let i = s.length - 1; i >= 0; i--) {
        p += s[i];
    };
    return s === p;
}

function palindrome(s, outputArray, tempArray = []) {
    for(i = 0; i < s.length; i++) {
        let o = '';
        o += s.slice(i, s.length - (s.length - i));
        if (isPalindrome(o)) {
            outputArray.push(o);
        }
        tempArray.push(o);
        palindrome(s, outputArray, tempArray)
        o = '';
    }
}

const ss = 'aab'
const outputArray = []
palindrome(ss, outputArray);
console.log(outputArray);