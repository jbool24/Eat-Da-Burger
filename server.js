// Dependencies
// =============================================================
const express        = require("express");
const bodyParser     = require("body-parser");
const exphbs         = require("express-handlebars");
const methodOverride = require("method-override");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("app/public"));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Template engine setup : Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./app/controller/burger_controller.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
