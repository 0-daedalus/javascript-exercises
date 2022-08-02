const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(args) {
	return args.reduce((sum, arg) => sum+=arg, 0);
};

const multiply = function(args) {
  return args.reduce((ans, arg) => ans*=arg, 1);
};

const power = function(a, pow) {
	return a**pow;
};

const factorial = function(a) {
  let ans = 1;
  if (a === 0) return 1;
	for(let i = a; i > 1; i--){
    ans*=i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
