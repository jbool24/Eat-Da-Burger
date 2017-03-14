// Dependencies
// =============================================================
const db = require("./connection");

// ORM
// =============================================================
const orm = {

    selectAll: function(callback) {
        const strSQL = "SELECT * FROM burgers";

        db.query(strSQL, (err, result) => {
            if err throw new Error(err);
            callback(result);
        });
    },

    findOne: function(id, callback) {
        const strSQL = "SELECT * FROM burgers WHERE id = ?";

        db.query(strSQL, id, (err, result) => {
            if err throw new Error(err);
            callback(result);
        });
    },

    updateOne: function(id, colName, value, callback) {
        const strSQL = "UPDATE burgers SET ?? = ? WHERE id = ?";

        db.query(strSQL, [ olName, value, id], (err, result) => {
            if err throw new Error(err);
            callback(result);
        });
    }
};

module.exports = orm;
