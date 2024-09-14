

const fs=require('fs');

fs.appendFile('mynewfile1.txt','Hello ramjeet!',function(err)
{
    if (err) throw err;
    else{
        console.log("saved file!");
    }
});