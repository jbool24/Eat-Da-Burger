const orm = require('../config/orm');

const Burger = {

    burgerList: function(callback) {
        orm.selectAll({}, (result) => {
            console.log(result);
            callback(result)
        });
    },

    devouredList: function(callback) {
        orm.selectAll({
            column: 'devoured',
            value: true
        }, (burgers) => {
            console.log(burgers)
            callback(burgers);
        });
    },

    findAll: function(filter, callback) {
        console.log(filter)
        orm.selectAll(filter, (result) => {
            callback(result);
            console.log(result);
        });
    },

    createBurger: function(burgerName, callback) {
        orm.createOne(burgerName, (result) => {
            console.log(result);
            callback(result);
        })
    },

    devourBurger: function(id, callback) {
        orm.updateOne({
            id: id,
            column: 'devoured',
            value: true
        }, (result) => callback(result));
    }

}

module.exports = Burger;
