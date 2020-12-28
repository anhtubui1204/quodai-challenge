const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, 'build')))
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
        if (err) {
        res.status(500).send(err)
        }
    })
})

//socket io config for server
var http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    socket.on('highlight', data => {
        io.emit("sendDataFromServer", {issue: data, socketId: socket.id})
    })
    socket.on("disconnect", function() {
        console.log(socket.id + ": disconnected");
      });
    
  });

const port = process.env.PORT || 5000;

http.listen(port, () => {
    console.log(`Server running on ${port}`)
});
