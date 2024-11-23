function isPalindrome(s) {
  let c = '';
  for (let i = s.length - 1; i >= 0; i--) {
    c += s[i];
  }
  return s === c;
};

function partitionPartitioning(string, outputArray, isUsed, tempArray = []) {
    if (tempArray.length === 3) {
        outputArray.push([...tempArray]);
        return;
    };

    for (let i = 0; i < string.length; i++) {
        if (!isPalindrome(string[i]) || isUsed[i]) continue;
        tempArray.push(string[i]);
        isUsed[i] = true;
        partitionPartitioning(string, outputArray,isUsed, tempArray);
        tempArray.pop();
        isUsed[i] = false;
    }
};

const string = 'aab';
const outputArray = [];
const isUsed = new Array(string.length).fill(false);
partitionPartitioning(string, outputArray, isUsed);
console.log('outputArray', outputArray);
