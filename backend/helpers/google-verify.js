const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client( process.env.googleClientID );

async function googleVerify( token = '' ) {

  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID, 
  });
  const { name, email } = ticket.getPayload();

  return {
    nombre: name, 
    correo: email
  }
}


module.exports = {
    googleVerify
}