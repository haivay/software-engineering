const _ = require('lodash');
const ut = require('./ut01');

let students = ut.csv_to_json('./csv/students.csv');

function adultOnly(students) {
    let adultStudents = _(students)
        .filter(x => x.age > 17)
        .value();
    return adultStudents;
}

console.table(adultOnly(students));

module.exports.adultOnly = adultOnly;