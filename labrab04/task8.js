const get_conn = require('./modules/utils').get_conn;

const conn = get_conn();

let query_most_count = "SELECT id, DATE_FORMAT(day, '%Y.%m.%d'), city, name, count \
FROM data_set WHERE name = \
(SELECT name FROM data_set ORDER BY count DESC LIMIT 1) \
ORDER BY day"

conn.promise()
    .query(query_most_count)
    .then(([rows]) => console.table(rows))
    .catch((err) => { console.error(err) })
    .then(conn.end());