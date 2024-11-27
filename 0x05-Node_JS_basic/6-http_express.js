/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Gadoskey
 */
const express = require("express");

const app = express();
const PORT = 1245;

app.get("/", (_, res) => {
  res.send("Hello Holberton School!");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;