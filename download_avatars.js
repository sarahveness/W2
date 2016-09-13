const request = require("request");

var inputs = process.argv.slice(2);

var owner = inputs[0];
var repo = inputs[1];
var contributors = [];
var apiRoot = 'https://api.github.com';
var url = apiRoot + '/repos/' + owner + '/' + repo + '/contributors';

console.log(url);

request.get({
  url: url,
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


function getRepoContributors(repoOwner, repoName, cb) {
    var repoOwner = owner;
    var repoName = repo;
}

// getRepoContributors()