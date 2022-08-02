const findTheOldest = function(arr) {
    const oldest = arr.sort((p1, p2) => {
        if(!p1.yearOfDeath) p1.yearOfDeath = (new Date()).getFullYear();
        if(!p2.yearOfDeath) p2.yearOfDeath = (new Date()).getFullYear();
        return p1.yearOfDeath-p1.yearOfBirth > p2.yearOfDeath-p2.yearOfBirth ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
