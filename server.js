// Creating a basic server using Express //
// ================================================================= //

// ========================================================================================= //
// DEPENDENCIES --> Series of npm packages that we use to give the server user functionality //
// ========================================================================================= //
var express = require("express");
var bodyParser = require("body-parser"); 
var path = require("path"); 

// ========================================================================================= //
// EXPRESS CONFIGURATION 
// Setting up the basic properties of Express App server 
// ========================================================================================= //

// Setting up an initial port for the listener //
var PORT = process.env.PORT || 3030; // <--- incase someone wants to use a different port //

// Tells node that an "expres" server is being created //
var app = express(); 

// Setting up the Express App to handle data parsing //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 


// ======================================================================================================= //
// ROUTER 
// These links point the server to a series of "route" files.
// These routes give the server a "map" of how to respond when suers visit or request dat from various URLS
// ======================================================================================================= //

require("/routes/apiRoutes")(app);
require(".routes/htmlRoutes")(app);

// Basic route that will send the user first to the AJAX page //

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Data //

var tables = [
    {
        name = "". 
        phoneNumber = "", 
        email = "", 
        uniqueId = ""
    }
]



// ========================================================================================= //
// LISTENER 
// Starts the server to begin listening
// ========================================================================================= //

app.listen(PORT, function () {
    console.log("App is listening on PORT " + PORT);
});







