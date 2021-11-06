import mailgun from "mailgun-js";
const DOMAIN = "sandbox29281b2fcf6d4d43b6d500574d0fe65b.mailgun.org";
const mg = mailgun({
  apiKey: "5050f97bea17580d5257804cb9fa42d1-10eedde5-f9876cb2",
  domain: DOMAIN,
});
const data = {
  from: "Mailgun Sandbox <postmaster@sandbox29281b2fcf6d4d43b6d500574d0fe65b.mailgun.org>",
  to: "brodrigue@protonmail.com",
  subject: "Hello",
  text: "Testing some Mailgun awesomness!",
};
exports.handler = async function (event, context) {
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
};
