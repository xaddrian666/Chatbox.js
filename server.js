var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '/')));

io.on('connection', (socket) => {
  console.log(socket);
  io.emit('message', 'Someone has joined', socket.handshake.time);

  socket.on('send message', (msg, date) => {
    io.emit('message', msg, date);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
