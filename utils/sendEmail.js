const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: '7d5cc7d06fc1fdbc35a1a16d446a3622-8b34de1b-482f01f1',
    domain: 'sandboxf8fff48600d341e4ac6454b5885a0c5e.mailgun.org',
  },
};

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport(mailGun(auth));

  const mailOptions = {
    from: `${options.name} <${options.email}>`,
    to: 'ssebaa9@gmail.com',
    subject: options.title,
    text: options.message,
  };

  await transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('Message sent!');
    }
  });
};

module.exports = sendEmail;
