const _ = require('lodash');
var clients = require('./json/clients.json'); 

let southernHemisphere = (arr) => {
    res = _(arr)
        .values()
        .flatten()
        .filter(x => x.address.city === 'Кунгур')
        .orderBy(['gender', 'age', 'name'], ['asc', 'desc', 'asc'])
        .value();
    return res;
}

console.log(southernHemisphere(clients));