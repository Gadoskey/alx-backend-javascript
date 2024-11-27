/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Gadoskey
 */
const http = require("http");

const PORT = 1245;
const HOST = "localhost";
const app = http.createServer();

app.on("request", (_, res) => {
  const responseText = "Hello Holberton School!";

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Length", responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;