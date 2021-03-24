const _ = require('lodash');
const ut = require('./ut01');
const a = require('./task3');

let students = ut.csv_to_json('./csv/students.csv');
let groups = ut.csv_to_json('./csv/groups.csv');
let group = "ПИб-1";

let adultOnlyForGroup = (group) => {
    let groupId = _.find(groups, {'nameGr': group}).id;
    let studentsOfGroup = _.filter(students, {'idGr': groupId});
    let result = a.adultOnly(studentsOfGroup);
    return result;
}

console.table(adultOnlyForGroup(group));