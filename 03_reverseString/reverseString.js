const reverseString = function(string) {
    let arr = string.split('');
    let newString = '';
    for(let i = arr.length-1; i >= 0; i--){
        newString+=arr[i];
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
