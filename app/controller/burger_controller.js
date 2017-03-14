// Dependencies
// =============================================================
const path = require("path");
const Burger = require("../models/burger");

// Routes
// =============================================================
module.exports = function(app) {

    // Add route to return all burgers
    app.get("/api/burgers", function(req, res) {
        Burger.burgerList((burgers) => res.json(burgers));
    });

    // Add route to return specific burger by id
    app.get("/api/burger/:id", function(req, res) {
        Burger.findAll({
            column: 'id',
            value: req.params.id
        }, burger => res.json(burger));
    });

    // Add route to return all devoured burgers
    app.get("/api/burgers/devoured", function(req, res) {
        Burger.devouredList((burgers) => res.json(burgers));
    });

    // Add route to create new burger
    app.post("/api/burger", function(req, res) {
        Burger.createBurger(req.body.name, (Burger) => {
            res.json(Burger);
        });
    });

    // Add sequelize code to delete a Burger
    app.put("/api/burger/:id", function(req, res) {
        const id = req.params.id;
        Burger.devourBurger(id, (result) => {
            console.log(result);
            res.end();
        });
    });
};
