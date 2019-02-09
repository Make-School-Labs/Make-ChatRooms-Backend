var server = require("express")();
var http = require("http").Server(server);
var io = require("socket.io")(http);
var localStorage = require("localStorage");

server.get("/", (req, res) => {
    res.send("You have reached the default route for the Make-ChatRooms Backend!")
});

io.on('connection', function (socket) {
    console.log("New User Has Connected!") // Outputted to terminal to notify you that a new user has connected

    socket.on('chat message', function (message) { // Listening for an incoming chat message
        // console.log("SOCKET ID " + socket.username + " " + socket.id)
        // console.log("Incoming Message " + message)
        console.log("Incoming Message -> ", message)
        console.log("Message sent from -> ( ", socket.username, " ", socket.id, ")")
        parsedMessage = JSON.parse(message) // Converts message JSON string into a JSON Object
        socket.broadcast.to(parsedMessage.roomOriginName).emit('chat message', message) // Broadcasts message to everyone in the room that the message was sent from except the sender
    });

    // Listening for when the client sends in a username for the given socket connection!
    socket.on("socketUsername", function (username) {
        socket.nickname = username // Assigning the socket nickname to be the username that the client passes

        // Checking if username is already present
        if (localStorage.getItem(username)) {
            console.log("Someone currently connected to the server shares the same username!")
            socket.emit("usernameCollision", username)

        } else { // If we don't see the username
            localStorage.setItem(username, socket.id) // saving the item in local storage

            // Emit that the username chosen because it is a successful username
            socket.emit("validUsername", username)
        }
    });


});


function getKeyByValue(object, value) { // Helper function to find username given the socket id or connection
    return Object.keys(object).find(key => object[key] === value);
}


http.listen(4000, function () { // Begin listening on the port 4000 when the server is ran!
    console.log("Listening on port 4000")
});