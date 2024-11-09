// function combinations(n, k) {
//     const outputArray = [];
//     function backTrack(n, k, outputArray, tempArray = [], start = 1) {
//         if(k === 0) {
//             outputArray.push([...tempArray]);
//             return;
//         }
//         for (let i = start; i <= n; i++) {
//             tempArray.push(i);
//             backTrack(n, k - 1, outputArray, tempArray, i + 1);
//             tempArray.pop();
//         }
//     }
//     backTrack(n, k, outputArray);
//     return outputArray;
// } 

// console.log(combinations(4, 2));







// var combine = function(n, k) {
function combine(n, k) {
    const outputArray = [];
    function backTrack(n, k, outputArray, tempArray = [], start = 1){
        if(k === 0){
            outputArray.push([...tempArray]);
            return;
        }
        for(let i = start; i <= n; i++) {
            tempArray.push(i);
            backTrack(n, k - 1, outputArray, tempArray, i + 1);
            tempArray.pop();
        }    
    }
    backTrack(n, k, outputArray);
    return outputArray;    
};

console.log(combine(4, 2));