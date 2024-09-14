
const http=require('http');

const fs=require('fs');

http.createServer(function(req,res)
{
    //open a file on the server and return the content;
    fs.readFile('demofile1.html',function(err,data)
{
    res.writeHead(200,{'content-type':'text/html'

    });
    res.write(data);
    return res.end();

});
}).listen(8082);
