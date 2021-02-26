import nodemailer from "nodemailer";
import nodeMailerSendgrid from "nodemailer-sendgrid";

export const SendEmail = async (email: string, url: string) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodeMailerSendgrid({ apiKey: process.env.SENDGRID_API }), {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<a href="${url}">${url}</a>`, // html body
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
