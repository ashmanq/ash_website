const dotenv = require('dotenv').config();
const baseUrl = process.env.VUE_APP_API_URL;
// const mailUrl = baseUrl + 'mail/';

export default {

  sendMail(message) {
    const url = baseUrl + "mail/send";
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(message),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .catch(res => res)
  },

}
