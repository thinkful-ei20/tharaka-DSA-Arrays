const urlify = function(url) {
    const arr = url.split('');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ' ') {
            arr[i] = '%20';
        }
    }
    return arr.join('');
}

console.log(urlify('asdf  asdsaf 234 .com'));