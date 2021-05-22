const ut = require('./modules/utils');

const conn = ut.get_conn();

let query_select = "SELECT id, day, city, name, count \
FROM data_set WHERE name = ?";

let params = ['laura abc']

conn.promise()
    .query(query_select, params)
    .then(([rows]) => console.table(rows))
    .catch((err) => { console.error(err) })
    .then(conn.end());