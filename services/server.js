const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(__dirname + '/db.json');
const middlewares = jsonServer.defaults();

const PORT = 8000;
const HOST = 'localhost';

server.use(middlewares);
server.use(router);
server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
