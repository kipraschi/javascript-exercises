const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    let sequence = [0, 1];
    for (let i = 2; sequence.length <= num; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2]
    }
    return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
