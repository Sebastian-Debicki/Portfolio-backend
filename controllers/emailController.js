const sendEmail = require('../utils/sendEmail');
const catchAsync = require('../utils/catchAsync');

exports.sendingEmail = catchAsync(async (req, res, next) => {
  await sendEmail({
    email: req.body.email,
    title: req.body.title,
    message: req.body.message,
    name: req.body.name,
  });

  res.status(200).json({
    status: 'success',
    message: 'message was sent!',
  });
});
