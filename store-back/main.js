const server = require('./config/server');

server.listen(process.env.PORT, () => console.log(`The server is running on port ${process.env.PORT}`));