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
//using int auto increment primary key using existing table(customers) wiht alter table command
var sql="AlTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
connection.query(sql,function(error,results)
{
    if(error) throw (error);
    console.log("table alter or update!");
});



});
