var config = require('config');
var nodemailer = require('nodemailer');
var options = config.get("options");


exports.sendPendings = (data) => {

    let currentDate = new Date().toISOString()
                                .replace(/T/, ' ')
                                .replace(/\..+/, '');
                                
    var transporter = nodemailer.createTransport(options);

    return new Promise((res, rej) => {
        transporter.sendMail({
            from: options.auth.user,
            to: data.Recipient,
            subject: data.Subject,
            html: data.Body
        }, function (err, info) {
            if (!err) {
                console.log('sent mail to: ' + data.Recipient + ' ' + currentDate);
                res("Your message has been sent successfully");
            } else {
                console.log('send mail error:', err);
                res("Your message could not be sent" + ' ' + currentDate);
            }
        });
    });
}

module.exports;


