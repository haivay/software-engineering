const _ = require('lodash');
var colors = require('./json/colors.json');

let rgbaToRgb = (arr) => {
    res = _(arr)
        .map(x => _.toPairs(x))
        .flatten()
        .map(x => _.concat(x[0], _.dropRight(x[1])))
        .map(x => _.zipObject(['color', 'rgb'], [x[0], _.takeRight(x, 3)]))
        .orderBy('color', 'asc')
        .value();
    return res;
}

console.log(rgbaToRgb(colors));