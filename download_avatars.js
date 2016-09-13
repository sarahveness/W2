var request = require("request");

var inputs = process.argv.slice(2);

var owner = inputs[0];
var repo = inputs[1];
var contributors = [];
var apiRoot = "https://api.github.com";


function getRepoContributors(repoOwner, repoName, cb) {
  result = [];
  request.get({
    url: apiRoot + '/repos/' + repoOwner + "/" + repoName + '/contributors',
    headers: {
      'User-Agent': 'Lighthouse'
    },
    json: true
  }, function (err, incomingMessage, responseBody) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(responseBody);
  });
}

getRepoContributors(owner, repo, (err, result) => {
  console.log("Errors:", err);
  console.log("Result:", result);
});




// ——— GITHUB API ENDPOINT STEP ———
// var url = apiRoot + '/repos/' + owner + "/" + repo + '/contributors';

// console.log(url);

// request.get({
//   url: url,
//   headers: {
//     'User-Agent': 'Lighthouse'
//   },
//   json: true
// }, function (err, incomingMessage, responseBody) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(responseBody);
// });