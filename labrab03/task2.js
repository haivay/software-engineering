const _ = require('lodash');
const ut = require('./ut01');

let students = ut.csv_to_json('./csv/students.csv');
let groups = ut.csv_to_json('./csv/groups.csv');
let group = "ПИб-1";

let avgAgeForGroup = (group) => {
    let groupId = _.find(groups, {'nameGr': group}).id;
    let studentsOfGroup = _.filter(students, {'idGr': groupId});
    
    let res = _
        .floor(_
            .map(studentsOfGroup, (x) => +x.age)
            .reduce((acc, next) => acc += next/studentsOfGroup.length, 0)
        , 2);
    return res;
}

console.log(avgAgeForGroup(group));