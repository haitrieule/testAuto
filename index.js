const express =require('express');
const cors =require('cors');

const sgMail = require('@sendgrid/mail')
const SENDGRID_API_KEY = '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'
sgMail.setApiKey(SENDGRID_API_KEY)

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send('test');
});


app.get('/template1',(req, res)=>{
  const {subject, question, name, deadline, email}= req.query;

  const msg = {
   to:'haitrieule99@gmail.com' , // Change to your recipient`${email}`
  from: 'haitrieule12@gmail.com', // Change to your verified sender
  subject: `${subject}`,
  text: ` hi. ${name} I have a question for you. ${question}? Deadline: ${deadline}, thanks ${name}`,
};




sgMail
  .send(msg)
  .then((respose) => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error.msg)
  })
})

app.get('/template2',(req, res)=>{
  const {subject, question, name, deadline, email}= req.query;

  const msg = {
   to:'haitrieule99@gmail.com' , // Change to your recipient`${email}`
  from: 'haitrieule12@gmail.com', // Change to your verified sender
  subject: `${subject}`,
  text: ` ${name}, this is a template2`,
};




sgMail
  .send(msg)
  .then((respose) => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error.msg)
  })
})

app.listen(4567, ()=>console.log("running on port 4567"))

// const msg = {
//   to: 'haitrieule99@gmail.com', // Change to your recipient
//   from: 'haitrieule12@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
// }

// sgMail
//   .send(msg)
//   .then((respose) => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error.msg)
//   })