# POC for google-auto-auth

See https://liveperson-apac-ts.atlassian.net/browse/BOT-132 for context on why this investigation is being done.

## Usage

- Follow this guide: https://dialogflow.com/docs/reference/v2-auth-setup
  
  - The end result is a JSON file containing various authentication attributes, but most importantly `client_email` and `private_key` attributes.
  
- Enter your newfound credentials into `authConfig.credentials` in the `get_token_from_credentials.js` file.

- Run `node get_token_from_credentials.js`

- The console will print out the active Bearer

  - If you get errors such as `Error: error:0906D06C:PEM routines:PEM_read_bio:no start line`, you probably have an issue with the formatting of your private key. Try running `get_credentials_from_json.js ` to get an output of what the private key should be formatted as.
  
 
## Findings
This solution appears to be fit for purpose!

Calling getToken generates a token, with a 3600 second lifetime. 
Calling getToken close to the expiry time will refresh the token with the google auth service and provide the new bearer.


So it would seem that the best approach would be to call getToken every time you need to make a request to DialogFlow.

See `bearer-refresh-example.log` for a simple example of the bearer getting refreshed automagically.
