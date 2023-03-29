


/*function findMatching(collection, string) {
    for (const user of collection) {
        if (string === user) {
            let result = drivers.Filter(findMatching(drivers, string))
            return [result]
        }


    }
}*/


function findMatching(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === attribute.toLowerCase() })
}

function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
}

function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
}




