const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
    console.log('connection received!')

    socket.on('chat message', function(msg) {
        console.log('message received: ' + msg)

        io.emit('chat message', msg)
    })
})


http.listen(3000, () => console.log("server listening on port 3000"))
