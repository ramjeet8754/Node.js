//nodemailer 

var nodemailer= require("nodemailer");

var transpoter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'kumar.ramjeet1996@gmail.com',
        pass:'Krishnaradhe@123'

    }
});

var mailOptions={
    from:"kumar.ramjeet1996@gmail.com",
    to:"ramjeetkumar944@gamil.com",
    subject:"Sending this mail using node.js",
    text:"I love you mere bhai"
};

transpoter.sendMail(mailOptions,function(error,info)
{
if (error){
    console.log(error);

}
else{
    console.log("Email.sent :" + info.response);
}
});