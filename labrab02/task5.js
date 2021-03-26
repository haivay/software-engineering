const _ = require('lodash');
var data = require('./json/data.js'); 

function rgb2hex(rgb) { //функцию нашел в инете и немного подкорректировал
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[0],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) : '';
};

let southernHemisphere = (arr) => {
    res = _(arr)
        .zip(arr.colors, arr.argb)
        .map(x => _.concat(x[0], rgb2hex(x[1])))
        .map(x => _.zipObject(['color', 'hex_name'], x))
        .orderBy('color', 'asc')
        .value();
    return res;
}

console.log(southernHemisphere(data));