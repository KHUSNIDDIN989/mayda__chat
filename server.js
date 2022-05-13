import express from "express";
import { Server } from "socket.io";
const app = express();

app.use(express.static(process.cwd() + "/public"));

const server = app.listen(9000, console.log(9000));

const io = new Server(server);
io.on("connection", (socket) => {
  socket.on("use", (data) => {
    socket.broadcast.emit("user", data);
  });

  socket.on("data", (q) => {
    socket.broadcast.emit("datali", q);
  });
});
