const _ = require('lodash');
const ut = require('./ut01');

let students = ut.csv_to_json('./csv/students.csv');
let groups = ut.csv_to_json('./csv/groups.csv');
let hobbies = ut.csv_to_json('./csv/hobby.csv');
let merges = ut.csv_to_json('./csv/merge.csv');

let hobbiesForGroup = (group) => {
    let groupId = _.find(groups, {'nameGr': group}).id;
    let studentsOfGroup = _.filter(students, {'idGr': groupId});
    
    let onlyIdAndNames = _.map(studentsOfGroup, x => _.zipObject(['idStudent', 'nameSt'], [x.id, x.nameSt]));       // ------------------
    let onlyIdAndIdHobbyes = _.map(merges, x=> _.zipObject(['idStudent', 'idHobby'], [x.idStudent, x.idHobby]));    // преобразуем данные
    let onlyIdAndHobbies = _.map(hobbies, x => _.zipObject(['idHobby', 'name'], [x.id, x.name]));                   // ------------------

    let idStIdHobbiesNameOfHobbie = _.map(onlyIdAndIdHobbyes, x => _.zipObject(['idStudent', 'name'], [x.idStudent, _.find(onlyIdAndHobbies, {'idHobby': x.idHobby}).name]));
    let res = _.map(onlyIdAndNames, x => _.zipObject(['nameSt', 'name'], [x.nameSt, _.concat( _.map( _.filter(idStIdHobbiesNameOfHobbie, {'idStudent': x.idStudent}), x => x.name ) )]));
    let sortedRes = _.orderBy(res, ['nameSt', 'name'], ['asc', 'desc']);

    _.map(sortedRes, x => console.log(x.nameSt, _.join(x.name, ', ')));
}

let group = "ПИнб-2";
hobbiesForGroup(group);