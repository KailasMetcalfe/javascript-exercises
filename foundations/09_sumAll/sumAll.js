const sumAll = function(a, b) {

    if (a < 0 || b < 0) return "ERROR";
    else if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    const smaller = Math.min(a, b);
    const larger = Math.max(a, b);
    let sum = 0;
    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
