/* global __dirname */
let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let morgan = require('morgan');
const path = require('path');

app.use(express.static(path.join(__dirname,'dist')));

/*
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
*/

app.use(morgan('tiny'));

http.listen(3000, () => {
  console.log('Heyo');
});

io.on('connection', socket => {
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
  console.log('a user connected');
});

