const _ = require('lodash');
const ut = require('./ut01');

let students = ut.csv_to_json('./csv/students.csv');
let groups = ut.csv_to_json('./csv/groups.csv');

let printStudentsAndGroups = () => {
    _(students)
        .map(x => _.zipObject(['nameSt', 'nameGr', 'age'], [x.nameSt, _.find(groups, {'id': x.idGr}).nameGr, x.age]))
        .orderBy(['nameGr', 'age'], ['asc', 'desc'])
        .value()
        .map(x => console.log(x.nameGr, x.nameSt));
}

printStudentsAndGroups();