// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.   
// The comments.html file should be in the same directory as the comments.js file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Path: comments.html
<!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
</head>
<body>
    <h1>Comments</h1>
    <ul>
        <li>Comment 1</li>
        <li>Comment 2</li>
        <li>Comment 3</li>
    </ul>
</body>
</html>

// In this example, we create a web server using the http module. The server listens on port 3000 and serves the comments.html file to the client. We use the fs module to read the contents of the file and send it to the client. If there is an error reading the file, we send a 404 response to the client. The comments.html file contains a simple HTML structure with a list of comments. When we run the server and visit http://localhost:3000 in a web browser, we see the comments displayed on the page.

// 9. Create a web server that serves a JSON object
// Path: server.js
// Create a web server that listens on port 3000 and serves a JSON object. The JSON object should contain information about a person, such as name, age, and occupation.

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const person = {
        name: 'John Doe',
        age: 30,
        occupation: 'Developer'
    };
    res.end(JSON.stringify(person));
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// In this example, we create a web server that serves a JSON object containing information about a person. The
