// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.

var reduce = function(nums, fn, init) {
    // let val = 0;
    // if we normally add
    // for(let i = 0; i < nums.length; i++) {
    //     val += fn(init, nums[i]);
    // }
    // in other case 
    // for(let i = 0; i < nums.length; i++) {
    //     console.log(init);
    //     init = fn(init, nums[i]);
    // }
    // return init;

    for(let i = 0; i < nums.length; i++) {
        console.log(init);
        init = fn(init, nums[i]);
    }
    return init;
};

fn = function sum(accum, curr) { return accum + curr; }

nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// const init = 100
const init = 0

console.log(reduce(nums, fn, init));