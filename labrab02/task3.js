const _ = require('lodash');
var users = require('./json/users.json');

let southernHemisphere = (arr) => {
    res = _(arr)
        .filter(x => +x.address.geo.lat < 0) //Географическую широту точек, лежащих в южном полушарии принято считать отрицательной.
        .map(x => _.concat(x.username, x.address.city))
        .map(x => _.zipObject(['username', 'city'], x))
        .orderBy('city', 'desc')
        .value();
    return res;
}

console.log(southernHemisphere(users));