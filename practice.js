const request = require("request");
const endpoint = "https://www.example.com";

request.get( {
  url: endpoint,
  json: true
}, function (err, incomingMessage, responseBody) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(responseBody);
})