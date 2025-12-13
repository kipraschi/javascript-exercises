const removeFromArray = function(arr, ...args) {
    let newArr = [];

    arr.forEach(e => {
        if (!args.includes(e)) {
            newArr.push(e);
        }
    }
    )
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
