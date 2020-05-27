// Used for password encryption
const bcrypt = require('bcrypt');
// const saltRounds = 10;


const authorisation = async function checkUser(req, foundUser){

  const match = await bcrypt.compare(req.body.password, foundUser.password)

  if(match){
    return true
  }
  return false;

}

module.exports = authorisation;
