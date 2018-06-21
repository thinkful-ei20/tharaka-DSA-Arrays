/*O(n^2) First for loop goes through the second array and push the numbers into a new array. The second for loop goes through the first array. It's inner for loop 
goes through the each number value.
*/
const mergeArray = function(arr1, arr2) {
    let newArr = arr1;
    
    for(let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }
  
    for(let j = 0; j < newArr.length; j++) {
        for (let n = 0; n < j; n++) {
            if (newArr[j] < newArr[n]) {
                let temp = newArr[j];
                newArr[j] = newArr[n];
                newArr[n] = temp;
              }
        }
    }

    return newArr;
}

const array1 = [1, 3, 6, 8, 11];

const array2 = [2, 3, 5, 8, 9, 10];

console.log(mergeArray(array1, array2));