const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let filename;
   switch (req.url) {
    case '/':
        filename = 'home.html';
        res.statusCode = 200;
        break;
    
    case '/about':
        filename = 'about.html';
        res.statusCode = 200;
        break;

    case '/contact-us':
        res.statusCode = 301;
        res.setHeader('Location','/contact')
        break;

    case '/contact':
        filename = 'contact.html';
        res.statusCode = 200;
        break;
   
    default:
        filename = '404.html';
        res.statusCode = 404;
        break;
   }

    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./view/' + filename, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
        }
        res.end();
    });

    // res.write('<h1> Hello World </h1>');

    // res.write('<p> Hi There </p>');
    
    
    //console.log('request made from client');
})

server.listen(3000, 'localhost', () => {
    console.log('server listening on port 3000');
})