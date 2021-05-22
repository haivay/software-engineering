const ut = require('./modules/utils');

const conn = ut.get_conn();

let query_select = "CREATE INDEX count_index \
ON data_set (count)";

conn.promise()
    .query(query_select)
    .then(() => console.log('index created'))
    .catch((err) => { console.error(err) })
    .then(conn.end());