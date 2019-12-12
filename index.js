const server = require("./server");

const port = process.env.PORT || 4450;

server.listen(port, () => console.log(`\n===Listening on ${port} ===\n`));