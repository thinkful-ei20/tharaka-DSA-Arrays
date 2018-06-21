const maxSum = function(arr){
    //base case
    if(arr.length <= 0) {
        return 0;
    }

    //calling itself
    return maxSum(arr.slice(1)) + arr[0];
}

const testArr = [4,6,-3,5,-2,1];

console.log(maxSum(testArr));