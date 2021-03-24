const _ = require('lodash');
const ut = require('./ut01');

let students = ut.csv_to_json('./csv/students.csv');

let avgAge = (arr) => {
    let res = _
        .floor(_
            .map(arr, (x) => +x.age)
            .reduce((acc, next) => acc += next/arr.length, 0)
        , 2);
    return res;
}

console.log(avgAge(students));