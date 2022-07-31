const leapYears = function(year) {
    if(typeof(year) === "number" && year > 0){
        if((year%100 === 0 && year%400 != 0) || (year%4 != 0)){
            return false;
        }
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
