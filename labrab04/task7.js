const get_conn = require('./modules/utils').get_conn;

const conn = get_conn();

let query_count_desc = "SELECT id, DATE_FORMAT(day, '%Y.%m.%d'), city, name, count \
FROM data_set ORDER BY count DESC LIMIT 20";

conn.promise()
    .query(query_count_desc)
    .then(([rows]) => console.table(rows))
    .catch((err) => { console.error(err) })
    .then(conn.end());