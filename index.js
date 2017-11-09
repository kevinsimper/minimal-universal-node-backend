require("babel-register")
const hook = require('css-modules-require-hook');

hook({
  generateScopedName: '[path][name]---[local]---[hash:base64:5]',
})

const http = require('http')
let kevin = require('./app/index.js')

var chokidar = require('chokidar')
var watcher = chokidar.watch('./app')
watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /dist/ module cache from server")
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]app[\/\\]/.test(id)) {console.log(id);
        delete require.cache[id]}
    })
  })
})


http.createServer((req, res) => {
  let styles = require('./app/')
  res.end('kevin')
}).listen(4545)
