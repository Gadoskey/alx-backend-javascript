/**
 * Reads from STDIN and Prints in STDOUT the string argument.
 * @param {string} arg - The string to print out
 * @author Gadoskey
 */
process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("readable", () => {
  const input = process.stdin.read();

  if (input !== null) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});
