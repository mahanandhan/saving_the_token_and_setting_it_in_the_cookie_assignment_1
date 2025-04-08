const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mysecret';
const encrypt = (payload) => {
  // encrypt the payload and return token
  try {
    const token = jwt.sign(payload, SECRET_KEY , {expiresIn: '1h'});
    return token;
  } catch (error) {
    console.log(error);
  }
}

const decrypt = (token) => {
  // return decoded payload
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  encrypt,
  decrypt
}
