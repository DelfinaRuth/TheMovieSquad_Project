const Sequelize = require("sequelize");
const db = require("../config/db")
const User = require("./Users")

class Favs extends Sequelize.Model { }

Favs.init(
    {
        movie: {
            type: Sequelize.TEXT,
            allowNull: true,
        },

        idTmdb: {
            type: Sequelize.INTEGER
        }
    },

    { sequelize: db, modelName: "favs" }

)

Favs.belongsTo(User, { as: 'author' });

module.exports = Favs;
