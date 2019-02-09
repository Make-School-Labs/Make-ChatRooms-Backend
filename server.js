var server = require("express")();
var http = require("http").Server(server);
var io = require("socket.io")(http);
var localStorage = require("localStorage");

server.get("/", (req, res) => {
    res.send("You have reached the default route for the Make-ChatRooms Backend!")
});