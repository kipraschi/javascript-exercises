const palindromes = function (str) {
    let cleanString = str
        .toLowerCase()
        .split('')
        .filter(char => /[a-z0-9]/.test(char))
        .join('');

    let reversedString = cleanString.split('').reverse().join('');

    return cleanString === reversedString;
};


// Do not edit below this line
module.exports = palindromes;
