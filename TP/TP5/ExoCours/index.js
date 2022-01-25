const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
   console.log('Un élève est connecté');

   socket.on('message', (msg) => {
       console.log(msg);
        io.emit('message', msg);
    })

   socket.on('disconnect', () => {
       console.log("Une élève s'est déconnecté");
    });
});

// Adresse du serveur local : localhost:<port>
http.listen(4200, () => {
    console.log("Serveur lancé sur le port 4200")
});

