const _ = require('lodash');
var colors = require('./json/colors.json');

let shortColorNames = (arr) => {
    res = _(arr)
        .map(_.keys)
        .flatten()
        .filter(x => x.length < 6)
        .orderBy()
        .value()
    return res;
}

console.log(shortColorNames(colors))