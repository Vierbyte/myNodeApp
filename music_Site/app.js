const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

const albums = [
    {title: 'My Turn', artist: 'Lil Baby', coverArtwork: "./images/myTurn.png"},
    {title: 'Melly vs. Melvin', artist: 'YMW Melly', coverArtwork: "./mellyvmelvin.png"},
    {title: 'THE GOAT', artist: 'Polo G', coverArtwork: "./thegoat.png"},
];

app.get('/', (req, res) => {
    res.send(
        `<div>
            <p>Today's Music Dose</p>
            <ul>
                <li><a href="/albums/0">Lil Baby</a></li>
                <li><a href="/albums/1">YMW Melly</a></li>
                <li><a href="/albums/2">Polo G</a></li>
            </ul>
        </div>`
    )
})

app.get('/albums/:id', (req, res)=> {
    res.send(
        `<div>
            <img style="width: 200px; height: 200px" src="${albums[req.params.id].coverArtwork}">
            <h1>${albums[req.params.id].title}</h1>
            <h2>${albums[req.params.id].artist}</h2>
        </div>`
    );
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
