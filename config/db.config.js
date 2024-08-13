
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "nilah",
    DB: "testDB",
    dialect: "postgres", // Change this to 'postgres', 'sqlite', etc., depending on your database
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};