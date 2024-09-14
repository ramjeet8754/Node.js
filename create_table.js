//import sql package
const mysql= require("mysql");

//create connection with mysql database

var connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Krishnaradhe@123",
    database:"mydb"
});

connection.connect(function(error)
{
if(error)
{
    console.log("thow error");
}
else{
    console.log("Database connected suscessfuly!");
}
var sql="CREATE TABLE customers(name VARCHAR(255),address VARCHAR(255))";
connection.query(sql,function(error,results)
{
    if(error) throw (error);
    console.log("table created!");
});



});
