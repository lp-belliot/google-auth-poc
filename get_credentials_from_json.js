// Use if you're having issues getting the private key from a JSON file in the right format

const googleAuth = require('google-auto-auth');

let authConfig = {
  scopes: ['https://www.googleapis.com/auth/cloud-platform']
};

let auth = googleAuth(authConfig);

// Ensure you have set the GOOGLE_APPLICATION_CREDENTIALS environment variable
// EG: $ export GOOGLE_APPLICATION_CREDENTIALS="/Users/belliot-mac/Downloads/new-v2-bot-17712338ca9a.json"

let jsonPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || null;
if (jsonPath) {
  auth.getCredentials((err, credentials) => {
    if (err) {
      console.log("There was an error: ", err);
    } else {
      console.log("Credentials are: \n", credentials);
    }
  });
} else {
  console.log("Ensure GOOGLE_APPLICATION_CREDENTIALS has been set to the path of your JSON credentials file.")
}

