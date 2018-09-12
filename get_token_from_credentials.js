const googleAuth = require('google-auto-auth');

let authConfig = {
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  credentials: {
    client_email: 'bentestgdf@new-v2-bot.iam.gserviceaccount.com',
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5ttkzl4AUbJRh\nUJgiREFdFqidcnhaLa5v0d5aZSPFVL92JoRRdcXplwh8i7BpgqEPrkLnt5ztNgyn\nNcLI2qmFpXaukTkK6PunPprIXDzmC2AWES3t2TMcpKmgkwnBNUO3W2mlR4YclIFE\nv2R7wrqE036O0FpkpzH+aLv0iBH5gvhiN3PVuMNkXI9cdl91X5xfqYYHgXT6Z4n/\nLj4DwtsSip5xwIT6mqii6PNmvwLIHuA2f6KZmu3gcro+2j6xl6++rvuMbyMXIaiu\njBinfrEUnEntIvCTzdk7O1tK3mdFgM293HVzKRDMWRw3RzrOFGr812GNbYT6koQm\npdrXjHh7AgMBAAECggEAHnVXLSd5SaA/O7CoquIP6FEJiX0XMQ8R72P3uFKjKb+L\nATky9VtAAN4U9bxBTCSw/q3hajiKg7scGyZtklyOdg1bqCjINrpcX6McZqT+Feqi\nsSvTIRHA2L9G1L+Y13fBaeaTrphK7hALHXfYZpXa2mMHfCu+z4g+Yk/SF7pjXEzu\n9P2ezVfzd8ctFitL9J7tU3RLh/tttXysQvNp/jDzdYjB3iJnAAw3pETl8OmDCDYx\nrof7A3FBVjwEVbFghfVGvmDmidEuO+y7v411vuEQvu0LNhzZn+VN19TBu/Z619/3\nhGTvmZqXu/MFb15u2gLrt/3sfAlGn+gUCGKqCvGrvQKBgQD6QluJVNwGzHaVSbQk\nPKhfbucBne8qv82OQvqbniyZrOKQ0eutVxoQ83vJDC9vk8Dkc4eFJeBlG5gShYNd\nUQlxlwPIbkVXxXCR3aiYnyP/ra61JQlEFsgesMfKxZekRLQIPgnXRNJpGoAJQ0rf\npPOpL/Xd8QUuetWdSyzMDaFMnwKBgQC9+XOsONg9Xi+HH3TDPnVicY+PfiN8yHjP\n1kP5bz8FZteYR3mMKbUd9JpOW6tiDWJ/1b7JKiB6OpAFp4HRWiE24xJRjRZGVTSg\nuR0zyROGI2AXZFD713heESjZIl69ClTRfp7+fDdmE74mv3Kv3j1tdBk/QZ8vbCGm\neuaqpXwqpQKBgQCM11mSsVpezSUToXYrSqPriYuiglK+eVFi9dj6SYuKNR0RKcL8\nO9/kmFMa86uinMHbEBW93nIqFNyB1/f1RY0OC1JKs5x86BYRUXD36+AjnYiMU7qi\nQjv/4befK5LLFQtI9DkvmIDeO9bA38k8kiW7Gs3BSUqEPQcJTex5LlaPuwKBgGdH\nb2Bowv6R7srKCiN/GDf9vutmywoyvqNXPDsmBJ/+KiVqbiUKI6H2cdE5uvGijzMq\nU/9vPJrWrae1Sjkzg60gQ7w8NKjl96eNG9gkb83T+5CcA/72RET3lTp+mfyx2izO\nZse5ZjDDePP9zu7XppOTs4oVNeKFKcIlPLP3JYrVAoGAJfE6bpo5Z9HWu4U96rlW\nwJz2SQLsB61HiJqXa/0Z4m4xyBPiBInARONFiZRlcH8TdFGVY50Yg1H1XJpvpRRB\nIzHorH5wDLkHhvd5sgFwM09qIIQocQbp2K6L9uZRg/9Bn4n0jFdI6mdRYsidEVK2\nyZ/TxFTdU8HqfG6F6RWc0WI=\n-----END PRIVATE KEY-----\n"
  }
};

let auth = googleAuth(authConfig);

const tokenLoop = function() {
  console.log("Asking for token, then waiting for 11 minutes.");
  console.log("Time is: ", new Date());
  auth.getToken((err, token) => {
    if (err) {
      console.log("There was an error: ", err);
    } else {
      console.log("Here is the token!: \n", token);
      auth.getAuthClient((err, client) => {
        if (err) {
          console.log("There was an error: ", err);
        } else {
          console.log("Here is the contents of the client: \n", client);
        }
      });
    }
  });
  setTimeout(tokenLoop, 660000)
};
tokenLoop();