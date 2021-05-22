const ut = require('./modules/utils');  

let query_insert = "INSERT INTO data_set \
(id, day, city, name, count) \
VALUES \
(NULL, '2021-05-22', 'Пермь', 'Кирилл Хайрутдинов', 1)";

const conn = ut.get_conn();

conn.promise()
    .query(query_insert)
    .then(() => console.log('row inserted'))
    .catch((err) => console.error(err))
    .then(conn.end());