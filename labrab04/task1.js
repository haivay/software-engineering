const get_conn = require('./modules/utils').get_conn;

let query_create = "CREATE TABLE `data_set` ( \
    `id` INT NOT NULL AUTO_INCREMENT , \
    `day` DATE NOT NULL , \
    `city` VARCHAR(20) NOT NULL , \
    `name` VARCHAR(30) NOT NULL , \
    `count` INT NOT NULL , \
    PRIMARY KEY (`id`))";

const conn = get_conn();

conn.promise()
    .query(query_create)
    .then(() => console.log('table created'))
    .catch((err) => console.error(err))
    .then(conn.end());