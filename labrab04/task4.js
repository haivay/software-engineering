const ut = require('./modules/utils');

let array = ut.csv_to_json('data_set.csv');
let rows = array.map(item => Object.values(item));

let query_insmany = "INSERT INTO data_set \
(day, city, name, count) VALUES ? ";

const conn = ut.get_conn();

conn.promise()
    .query(query_insmany, [rows])
    .then(() => console.log('rows inserted'))
    .catch((err) => console.error(err))
    .then(conn.end());