// Dependencies
// =============================================================
const db = require("./connection");

// ORM
// =============================================================
const orm = {

    burgerList: function(callback) {
        const burgers = "SELECT * FROM burgers";

        db.query(burgers, function(err, result) {
            if err throw new Error(err);
            callback(result);
        });
    },

    devouredList: function(callback) {
        const devoured = "select * from burgers where devoured = true";

        db.query(devoured, true, function(err, result) {
            if err throw new Error(err);
            callback(result);
        });
    },

    createBurger: function(burger, callback) {
        const strSQL = "INSERT INTO burgers (burger_name) VALUES (?)";

        db.query(strSQL, burger.name, (err, result) => {
            if err throw new Error(err);
            callback(result);
        });
    },

    updateBurger: function(burger, callback) {
        const strSQL = "UPDATE burgers SET burger_name = ? WHERE id = ?";

        db.query(strSQL, [burger.name, burger.id], (err, result) => {
          if err throw new Error(err);
          callback(result);
        }):
    }

};

module.exports = orm;
