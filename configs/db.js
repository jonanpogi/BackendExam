const mysql = require("mysql");
const { credentials } = require("./configs");

// DB Config
let mysSqlConnection = mysql.createConnection(credentials);

mysSqlConnection.connect((error) => {
    if (!error) console.log("mySql DB is now Connected.");
    else console.log(error);
});

module.exports = { mysSqlConnection };
