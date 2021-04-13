const _ = require('lodash');
const ut = require('./ut01');

let students = ut.csv_to_json('./csv/students.csv');
let groups = ut.csv_to_json('./csv/_groups.csv');
let curators = ut.csv_to_json('./csv/curators.csv');

/**
 * выводит список студентов куратора
 * @param {String} cur имя куратора 
 * @param {String} order порядок сортировки: 
 * 'asc' - по возрастанию;
 * 'desc' - по убыванию
 *  в алфавитном порядке фамилий студентов
 * @return {void} ничего не возвращает
 */
let studentsOfCurator = (cur, order) => {
    let curatorId = _.find(curators, {'nameCur': cur}).id;
    let groupOfCurator = _.find(groups, {'idCur': curatorId}).id;

    _(students)
        .filter({'idGr': groupOfCurator})
        .orderBy(['nameSt'], order)
        .value()
        .map(x => console.log(_.join(x.nameSt, '')));
}

studentsOfCurator('Ляскин', 'asc');