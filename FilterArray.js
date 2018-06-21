//O(n) One for loop to go through the array of numbers
const filterArray = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 5) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

let testArr = [11, 3, 23, 7, 27, 4, 8];

console.log(filterArray(testArr))