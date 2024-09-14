require('dotenv').config();
const port = process.env.PORT;



const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



// To handle JSON requests
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 


const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',     // Replace with your MySQL username
  password: 'Krishnaradhe@123',  // Replace with your MySQL password
  database: 'my_database' // Replace with your MySQL database name
});

// Open the MySQL connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});


// Run a query
connection.query('SELECT * FROM person', (error, results, fields) => {
    if (error) throw error;
    
    // Log results
    console.log(results);
  });
  


/*
connection.query('select firstname,city,country from person;', (error, results, fields) => {
    if (error) throw error;
    
    // Log results
    console.log(results);
  });  
  */

//here coneection closed
connection.end((err) => {
    if (err) {
      console.error('Error ending the connection: ' + err.stack);
      return;
    }
    console.log('Connection closed');
  });



/* //to connect database with mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err)); */




    