const findTheOldest = function(people) {
    return people.reduce((oldest, curr) => {
        const currentAge = ("yearOfDeath" in curr) ? 
            curr.yearOfDeath - curr.yearOfBirth : new Date().getFullYear() - curr.yearOfBirth;
        
        const oldestAge = ("yearOfDeath" in oldest) ? 
            oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;

        if(oldestAge < currentAge) return curr;
        else return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
