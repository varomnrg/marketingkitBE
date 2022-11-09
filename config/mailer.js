var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'crewnesiatest@gmail.com',
      pass: 'cvqxruglbycikkzs'
    }
  });

module.exports = transporter;
  