const http = require('http'); // import http module
const fs = require('fs') // import 'fyle system' module 
const URL = require('url'); // import 'url' module 
const path = require('path'); // import 'path' module (directory) 

const data = require('./urls.json'); // import the file where are the project URLs

// insert data in URLs file
function writeFile(callback) {
  fs.writeFile(
    path.join(__dirname, "urls.json"),
    JSON.stringify(data, null, 2),
    err => {
      if (err) throw err;

      callback((JSON.stringify({message: "ok"})));
    }
  );
}

// run node server
http.createServer((req, res) => {

  const { name, url, del } = URL.parse(req.url, true).query;

  // writing in head request
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  });

  // get all URLs
  if(!name || !url)
    return res.end(JSON.stringify(data)); // return the URLs

  // delete a URL
  if(del) {
    // insert the all URLs with exception
    data.urls = data.urls.filter(item => String(item.url) !== String(url));

    return writeFile( message => res.end(message) );
  }

  // create a URL
  data.urls.push({name, url});

  return writeFile( message => res.end(message) );

}).listen(3000, () => console.log('Api is running.'));