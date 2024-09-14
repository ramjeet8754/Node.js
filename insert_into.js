
const mysql= require("mysql");

//creae connection 
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Krishnaradhe@123",
    database:"mydb"
});

//
con.connect(function(error)
{
    if(error) throw error;
    console.log("connection created!");

var sql="insert into customers (name ,address)values('ramjeet', 'gaya')";
con.query(sql,function(err,results)
{
    if(err) throw error;
    console.log("1 record inseted");
});

}); 