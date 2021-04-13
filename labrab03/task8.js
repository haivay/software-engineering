const _ = require('lodash');
const ut = require('./ut01');

let students = ut.csv_to_json('./csv/students.csv');
let hobbies = ut.csv_to_json('./csv/hobby.csv');
let merges = ut.csv_to_json('./csv/merge.csv');

let studentsForHobby = (nameHobby) => {
    let idHobby = _.find(hobbies, {'name': nameHobby}).id;
    let filtredMerges = _.filter(merges, {'idHobby': idHobby});
    let res = _.map(filtredMerges, x => _.zipObject(['nameSt'], [_.find(students, {'id': x.idStudent}).nameSt]));
    _(res).map(x => console.log(x.nameSt)).value();
}

let nameHobby = 'бокс';
studentsForHobby(nameHobby);