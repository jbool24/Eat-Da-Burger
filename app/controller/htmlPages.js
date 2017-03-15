const Burger = require("../models/burger");

module.exports = function(app) {

    app.get("/", (req, res) => {
        Burger.burgerList((burgers) => {
          let context = {
            burgers: burgers
          };
          console.log(burgers);
          res.render("index", context);
        });

    });

}
