const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    password: {
      type: Sequelize.STRING,
    },

    salt: {
      type: Sequelize.STRING,
    },
  },

  { sequelize: db, modelName: "User" }
);

// hook
User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
