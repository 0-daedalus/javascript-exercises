const fibonacci = function(a) {
    if(a < 0 || typeof(+a) != 'number') return 'OOPS';
    let fib = [0, 1];
    for(let i = 1; i <= a; i++){
        fib[i+1] = fib[i-1]+fib[i];
    }
    return fib[a];
};

// Do not edit below this line
module.exports = fibonacci;
