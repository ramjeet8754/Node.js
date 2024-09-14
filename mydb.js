//import sql package
const mysql= require("mysql");

//create connection with mysql database

var connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Krishnaradhe@123"
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
connection.query("CREATE DATABASE mydb",function(error,results)
{
    if(error) throw (error);
    console.log("Database created!");
});



});
