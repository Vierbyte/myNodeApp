// let songs = [{
//     name: 
// }]


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/cats', (req, res) => {
    res.send(`Meow!`)
})

app.get('/dogs', (req, res) => {
    res.send(`Woof!`)
})

app.get('/cats_and_dogs', (req, res) => {
    res.send(`Dogs and cats living together...mass hysteria!!`)
})

app.get('/greet/:handle', (req, res) => {
    const {handle} = req.params;
    res.send(`Hello ${handle}!`)
})

const fileName = '/Users/vierbytes/Desktop/projects/portfolio/html5up-stellar/images/IMG_0152.PNG'
app.get( '*', (req, res) => {
    res.sendFile(fileName)
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});

// app.listen(port);
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     const {url} = req;
//     res.setHeader('Content-Type', 'text/plain');

//     if (url === '/') {
//         res.end('HOME')
//     } else if ( url === '/signup') {
//         res.end('SIGNUP Ya Fool')
//     } else {
//         res.end(`Hello World ${url}`)
//     }
//     // res.end(`Hello World ${url}`);
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });