const ut = require('./modules/utils');

const conn = ut.get_conn();

let query_select = "CREATE INDEX name_index \
ON data_set (name)";

conn.promise()
    .query(query_select)
    .then(() => console.log('index created'))
    .catch((err) => { console.error(err) })
    .then(conn.end());