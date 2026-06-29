const fibonacci = function(x) {
    if (x < 0) return "OOPS";
    let num = parseInt(x);
    if (num <= 1) return num
    else {
        let arr = [1, 1];
        for (let i = 2; i < num; i++) {
            arr.push(arr[i-1] + arr[i-2])
        }
        return arr[num-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
