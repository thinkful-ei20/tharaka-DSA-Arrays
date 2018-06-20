const urlify = function(url) {
    let result = '';
    for(let i = 0; i < url.length; i++) {
        if(url[i] === ' ') {
            result += '%20';
        } else {
            result += url[i]
        }
    }
    return result;
}

console.log(urlify('asdf  asdsaf 234 .com'));