const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/socket.io/', proxy('http://localhost:3100/', {
    ws: true,
    changeOrigin: true,
  })).use('/floorplan.svg', proxy('http://localhost:3100/', {
    changeOrigin: true,
  }));
}
