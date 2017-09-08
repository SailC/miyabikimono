var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const pug = require('pug');
const path = require('path');

var language = 'zh-cn';

router.post('/', function(req, res, next) {
  try {
    var time = req.body.time;
    var name = req.body.name;
    var email = req.body.email;
    var wechat = req.body.wechat;
    var phone = req.body.phone;
    var requirement = req.body.requirement; // 此处var req会造成之后的bug， req貌似会影响的参数req的赋值
    var via = req.body['via[]'];
    var location = req.body['location[]'];
    var maleNumber = req.body.number_male;
    var femaleNumber = req.body.number_female;
    var childrenNumber = req.body.number_children;
    language = req.body.language;
  } catch (err) {
    console.log(err);
  }
  sendMail(
    name,
    location,
    maleNumber,
    femaleNumber,
    childrenNumber,
    email,
    phone,
    via,
    requirement,
    time,
    wechat,
    language
  );
  res.send({ success: true });
});

// setup email data with unicode symbols
function sendMail(
  name,
  location,
  maleNumber,
  femaleNumber,
  childrenNumber,
  email,
  phone,
  via,
  requirement,
  time,
  wechat,
  language
) {
  //  var template = '/Users/chenqi/github_workspace/edomiyabi/public/assets/html/confirm_email.html';
  var template = path.join(__dirname, `../views/email_${language}.pug`);
  const emailContent = pug.renderFile(template, {
    name: name,
    phone: phone,
    email: email,
    wechat: wechat,
    maleNumber: maleNumber,
    femaleNumber: femaleNumber,
    childrenNumber: childrenNumber,
    time: time,
    location: location,
    via: via,
    requirement: requirement
  });

  let transporter = nodemailer.createTransport({
    service: 'qiye.aliyun',
    auth: {
      user: 'Service@mymiyabi.com',
      pass: 'a5233801@'
    }
  });

  let mailOptionsToCustomer = {
    from: `江户和装工房 👘 <Service@mymiyabi.com>`, // sender address
    to: email, // list of receivers
    subject: '您在江户和装工房的预约已下单 ✔', // Subject line
    html: emailContent
  };

  let mailOptionsToMiyabi = {
    from: `江户和装工房 👘 <Service@mymiyabi.com>`, // sender address
    to: 'Service@mymiyabi.com', // list of receivers
    subject: `🤑: 来自${name} 的预约请求 Email:${email}`, // Subject line
    replyTo: `${email}`,
    html: emailContent
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptionsToCustomer, (error, info) => {
    if (error) {
      console.log(error);
    }
  });

  transporter.sendMail(mailOptionsToMiyabi, (error, info) => {
    if (error) {
      console.log(error);
    }
  });
}

module.exports = router;
