const orm = require('../config/orm');

const Burger = {

    burgerList: function(callback) {
        orm.selectAll({
            column: 'devoured',
            value: 'false'
        }, (burgers) => {
            callback(burgers);
        });
    },

    devouredList: function(callback) {
        orm.selectAll({
            column: 'devoured',
            value: true
        }, (burgers) => {
            callback(burgers);
        });
    },

    findAll: function(filter, callback) {
        console.log(filter)
        orm.selectAll(filter, (result) => {
            callback(result);
        });
    },

    createBurger: function(burgerName, callback) {
        orm.createOne(burgerName, (result) => {
            callback(result);
        })
    },

    devourBurger: function(id, callback) {
        const burger = {
            id: id,
            column: 'devoured',
            value: true
        };
        orm.updateOne(burger, (result) => callback(result));
    }

}

module.exports = Burger;
