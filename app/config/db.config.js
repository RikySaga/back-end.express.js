module.exports = {
    database: "node_mysql",
    username: "root",
    password: "rikysaga46",
    host: "localhost",
    port: "5433",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },


};