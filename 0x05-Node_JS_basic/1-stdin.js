/**
 * Reads from STDIN and Prints in STDOUT the string argument.
 * @param {string} arg - The string to print out
 * @author Gadoskey
 */
process.stdin.setEncoding("utf8");
console.log("Welcome to Holberton School, what is your name?\n");
process.stdin.on(
"readable",
() => {
  const input = process.stdin.read();

  if (input !== null) {
    console.log("Your name is: " + input);
  }
}
);
process.stdin.on(
"end",
() => {
  console.log("This important software is now closing\n");
}
);
