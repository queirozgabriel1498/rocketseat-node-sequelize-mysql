const http = require('http'); // Import http module
const fs = require('fs'); // Import file system module
const path = require('path'); // import directory module

// Starting a Http server.
http.createServer((req, res) => {

  const file = req.url === '/' ? 'index.html' : req.url; // Find index.html
  const filePath = path.join(__dirname, 'public', file); // Read index.html in root url.
  const extname = path.extname(filePath); // file extension
  
  const allowedFileTypes = ['.html', '.css', '.js']; // allowed extensions
  const allowed = allowedFileTypes.find(item => item == extname); // return allowed extension

  if (!allowed) return;

  fs.readFile(
    filePath,
    (err, content) => {
      if (err) throw err;
      res.end(content);
    }
  );

}).listen(5000, () => console.log('Server is running!'));

//module.exports = http;