const io = require("socket.io")();

var queue = [];

io.on("connection", client => {
  console.log("a user connected");
  io.emit("initial state", queue);
  client.on("push", terms => {
    const result = terms + " = " + eval(terms);
    addToQueue(result);
    io.emit("pop", queue);
  });
  client.on("disconnect", () => {
    console.log("user disconnected");
  });
});

addToQueue = term => {
  if (queue.length > 9) {
    queue.shift();
  }
  queue.push(term);
};

const port = 8085;
io.listen(port);
console.log("listening on port ", port);
