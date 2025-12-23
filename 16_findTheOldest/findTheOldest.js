const findTheOldest = function(people) {

    function getAge(birth, death) {
        return death ? death - birth : new Date().getFullYear() - birth;
    }

    return people.reduce((oldest, person) => {
        const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        return currentAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
