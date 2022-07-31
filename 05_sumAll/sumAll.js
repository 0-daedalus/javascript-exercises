const sumAll = function(a, b) {
    let sum = 0;
    start = (b>a) ? a : b;
    fin = (b>a) ? b : a;
    if(typeof(a) != "number" || typeof(b) != "number" || a < 0 || b < 0) return "ERROR";
    for(let i = start; i <= fin; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
