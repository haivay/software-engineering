const get_conn = require('./modules/utils').get_conn;

let query_truncate = "TRUNCATE data_set";
const conn = get_conn();

conn.promise()
    .query(query_truncate)
    .then(() => console.log('table truncated'))
    .catch((err) => console.error(err))
    .then(conn.end());