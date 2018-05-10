// ==================================================================================
// LOADING THE DATA //
// We are linking the routes to a series of "data" sources. 
// Data sources hold arrays of information about the tableData, waitingListData, etc.
// ==================================================================================

var tableData = require("../data/tableData.js");
var waitingListData = require("../data/waitingListData.js");

// ===============================================================================
// ROUTING
// ===============================================================================

// This is just another way to use this data in other parts of the program with a module export // 
// The 'app' in the parameters represents Express, which was named app in the server.js file //

module.exports = function (app) {
    
// API GET requests //
// Building a GET function. 
// Whenever you go to this URL, display the table data in JSON format //

app.get("../api/tables", function(req, res) {
   res.json(tableData); 

});



}; 









