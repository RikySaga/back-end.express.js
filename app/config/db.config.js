const creds = {
    development: {
        username: "rikysaga",
        password: "rikysaga46",
        database: "node_sequelize",
        host: "127.0.0.1",
        dialect: 'postgresql'
    },
    test: {
        username: "root",
        password: "rikysaga46",
        database: "sequelize_test",
        host: "127.0.0.1",
        dialect: 'postgresql'
    },
    production: {
        username: "root",
        password: "rikysaga46",
        database: "sequelize_test",
        host: "127.0.0.1",
        dialect: 'postgresql'
    }
};

module.exports = creds;