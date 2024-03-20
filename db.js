const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'sculptures',
    password: 'goblue',
    port: 5433,
});

module.exports = client;
