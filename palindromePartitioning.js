function isPalindrome(s) {
  let c = '';
  for (let i = s.length - 1; i >= 0; i--) {
    c += s[i];
  }
  return s === c;
};

const s = 'aab';
console.log(isPalindrome(s));
