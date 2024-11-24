// function isPalindrome(s) {
//   let c = '';
//   for (let i = s.length - 1; i >= 0; i--) {
//     c += s[i];
//   }
//   return s === c;
// };

function isPalindromeUsingLoop(string, start, end) {
  while (start < end) {
    if (string[start] !== string[end]) {
      return false
    }
    start++;
    end--;
  }
  return true;
};

function partitionPartitioning(string, outputArray, tempArray = [], startIndex = 0) {
  if (startIndex === string.length) {
    outputArray.push([...tempArray]);
  };

  for (let i = startIndex; i < string.length; i++) {
    if (isPalindromeUsingLoop(string, startIndex, i)) {
      tempArray.push(string.substring(startIndex, i + 1));
      partitionPartitioning(string, outputArray, tempArray, startIndex + 1);
      tempArray.pop();
    }
  }
};

const string = 'aab';
const outputArray = [];
partitionPartitioning(string, outputArray);
console.log('outputArray', outputArray);
