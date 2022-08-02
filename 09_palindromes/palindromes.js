const palindromes = function (str) {
    let newStr = new Array();
    let currentIndex = 0;
    for(let i = 0; i < str.length; i++){
        if(str.toLowerCase().charCodeAt(i) > 96 && str.toLowerCase().charCodeAt(i) < 123){
            newStr[currentIndex] = str.toLowerCase()[i];
            currentIndex++;
        }
    }
    for(let i = 0; i < newStr.length/2; i++){
        if(newStr[Math.floor(i)] != newStr[newStr.length-1-Math.floor(i)]) return false;
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
