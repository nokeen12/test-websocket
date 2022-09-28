const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server:server });

wss.on('connection', function connection(ws){
    console.log('A new client Connected!')
    ws.send('Welcome New Client!');
    
    ws.on('message', function incoming(message){
        console.log('received %s', message)
        ws.send('Got your message, its: ', message);
    });    
});

app.get('/', (req,res) => res.send('Server running'))

server.listen(5000, () => console.log('Listening on port: 5000'))