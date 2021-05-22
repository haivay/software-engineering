const get_conn = require('./modules/utils').get_conn;

const conn = get_conn();

conn.promise()
    .query("SELECT COUNT(*) FROM data_set")
    .then(([rows]) => rows[0]['COUNT(*)'])
    .then((count) => { console.log('count =', count) })
    .catch((err) => { console.error(err) })
    .then(conn.end());