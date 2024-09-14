//import jsdom library 
const {JSDOM}=require("jsdom");

//creating new jsdom with html arguments '<p id="demo"></p'
const dom=new JSDOM(`<p id="demo"></p`);

//glabal object representing html page
const document=dom.window.document;

document.getElementById("demo").innerHTML="Hello ram";

console.log(document.getElementById("demo").innerHTML);

