let exec = require("child_process").exec;

function start(response) {
  console.log("Request Handler START has been called");
  let content = "empty";

  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  console.log("Request Handler UPLOAD has been called");
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello UPLOAD");
  response.end();
}

module.exports = { start, upload };
