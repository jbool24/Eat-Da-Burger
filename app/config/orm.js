// Dependencies
// =============================================================
const db = require("./connection");

// ORM
// =============================================================
const orm = {

    selectAll: function(filter, callback) {
        const column = filter.column || undefined;
        const value = filter.value || undefined;
        let strSQL = "SELECT * FROM burgers";

        if (column !== undefined && value !== undefined)
            strSQL += " WHERE ?? = ?";

        db.query(strSQL, [column, value], (err, result) => {
            if (err)
                throw new Error(err);
            callback(result);
        });
    },

    findOne: function(id, callback) {
        const strSQL = "SELECT * FROM burgers WHERE id = ?";

        db.query(strSQL, id, (err, result) => {
            if (err)
                throw new Error(err);
            callback(result);
        });
    },

    createOne: function(name, callback) {
        const strSQL = "INSERT INTO bugers (burger_name) VALUE (?)";
        db.query(strSQL, name, (err, result) => {
            if (err)
                throw new Error(err);
            callback(result);
        });
    },

    updateOne: function(filter, callback) {
      const id = filter.id;
      const column = filter.column;
      const value = filter.value;
      const strSQL = "UPDATE burgers SET ?? = ? WHERE id = ?";

        db.query(strSQL, [column, value, id], (err, result) => {
            if (err)
                throw new Error(err);
            callback(result);
        });
    }
};

module.exports = orm;
