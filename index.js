// Code your solution here
const findMatching = function(array, name) {
    let identifiedDriver = array.filter(function(nameDriver) {
        return nameDriver.toLowerCase() == name.toLowerCase();

    });

    return identifiedDriver;

};

function fuzzyMatch(array, name) {
        return array.filter(match => 
            match.toLowerCase().indexOf(name.toLowerCase()) === 0); 
    };

function matchName (array, name) {
    return array.filter(array => array.name === name);
    }

