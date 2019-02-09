# Make-ChatRooms-Backend

This starter project is meant to work with the iOS Client [here](https://github.com/Make-School-Labs/Make-ChatRooms)

The purpose of this project is to provide a server that the iOS client can listen and emit events to using the Socket.IO package and wrapper!

This server provides simple events and event emitters that are explained here!


## Getting Started

1. First execute the command `npm install`

2. Either run the project by executing one of the two commands `node server.js` or `nodemon server.js`

## API Documentation

##### This server is in charge of listening and emitting certain events that the iOS client side reciprocates!

1. These events are **listened for** if a valid socket connection is made!
    * `socket.on("joinRoom")` Triggered when a client passes a room name and joins!
    ######
    *  `socket.on("socketUsername")` Triggered when client wants to assign a username ... a friendlier way to iteract with an individual socket connection
    ######
    * `socket.on("chat message")` Triggered when client sends a message that the server is automatically listening out for!
    ######
    * `socket.on("leaveRoom")` Triggered when client decided to leave room they are currently in!
    ######
    * `socket.on("disconnect")` Triggered when client disconnects from server therefore abandoning socket connection!