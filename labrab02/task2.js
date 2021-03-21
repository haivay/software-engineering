const { filter } = require('lodash');
const _ = require('lodash');
const ut = require('./ut01');

let students = ut.csv_to_json('./csv/students.csv');
let groups = ut.csv_to_json('./csv/groups.csv')
let group = "ПИб-1";

let avgAgeForGroup = (group) => {
    let groupId = _.filter(groups, {'nameGr': group}) 
    let clonedStudents = _.cloneDeep(students);
    let studentsOfGroup = _.filter(clonedStudents, {'idGr': groupId[0].id});
    
    let res = _
        .ceil(_
            .map(studentsOfGroup, (x) => +x.age)
            .reduce((acc, next) => acc += next/studentsOfGroup.length, 0)
        , 2);
    return res;
}

console.log(avgAgeForGroup(group)); //19.5