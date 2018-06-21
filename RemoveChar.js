//O(n^2) The outer loop goes through the string characters. The includes method loop through the charcter string to see if it matches the string characters.
const removeChar = function(str, chars) {
    let result = '';
    for(let i = 0; i < str.length; i++) {
        if (!chars.includes(str[i])) {
            result += str[i];
          }
    }

    return result;
}

const testStr = 'Battle of the Vowels: Hawaii vs. Grozny';
const testChar = 'aeiou';

console.log(removeChar(testStr, testChar));
