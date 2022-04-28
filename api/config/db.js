const { Sequelize } = require("sequelize")

const db = new Sequelize("tmdbusers", null, null, {
    host: "localhost",
    dialect: "postgres",
    logging: false //esto va a hacer q no se vean en la consola el consol.log de todas las querys q genera sequelize para mandar
});

module.exports = db;