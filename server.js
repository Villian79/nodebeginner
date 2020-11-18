const http = require("http");
const url = require("url");

function start(route, handle) {
  http
    .createServer((request, response) => {
      if (request.url !== "/favicon.ico") {
        const pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} has been parsed`);

        route(handle, pathname, response);
      }
    })
    .listen(8888);

  console.log("Server started");
}

module.exports = { start };
