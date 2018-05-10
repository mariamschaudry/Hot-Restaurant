// ============================================================================
// DEPENDENCIES 
// Need to include the path package to get correct file path for our html pages
// ===========================================================================

var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // HTML GET Requests = client uses to request or "get" data from an HTTP server (most common HTTP method) //
    // The code below will handle whenever a user visits an specified HTML page //
    // In each case, user is shown an HTML page of content // 
    // =========================================================================================================

    app.get("/", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        console.log(__dirname);
    });

    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

    // If no matching route is found, default to home 
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "..public/home.html"));
    }); 
};