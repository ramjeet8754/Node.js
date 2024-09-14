//import mysql module or package
const mysql=require("mysql");

//create connection now with mysql database

var connecation=mysql.createConnection(
{
host:"localhost",
user:"root",
password:"Krishnaradhe@123",
database:"mydb"});


//here useing connecation variable to connect with database which stroring in val .
 connecation.connect(function(error)
{
    if(error) throw error;
    console.log("connection created");


//inserting multiple values in existing table here.
var sql="insert into customers(name,address) values ?";
var values=[
    ['sanjay','pune'],
    ['dhanjay','patna'],
    ['pawan','jharkhand'],
    ['jitendra','gaya'],
    ['ramjeet','Bangalore'],
    ['chandan','Howarh'],
    ['dharamvir','madhubani']
];
connecation.query(sql,[values],function(error,results)
{
    if(error) throw error;
    console.log("Numbers of recored inseted:" + results.affectedRows);
});

});