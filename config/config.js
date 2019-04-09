const connect_db = 'mongodb+srv://roberto_admin:2KiELZdFtn4BHNm!@db-qwguk.mongodb.net/test?retryWrites=true';
const db_opt = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

module.exports = { connect_db, db_opt }