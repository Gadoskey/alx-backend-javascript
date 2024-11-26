/**
 * Prints in STDOUT the string argument.
 * @param {string} arg - The string to print out
 * @author Gadoskey
 */
process.stdin.setEncoding("utf8");

const message = "Welcome to Holberton School, what is your name?";

process.stdout.write(message + "\n");

process.stdin.on(
"readable",
() => {
  const input = process.stdin.read();

  if (input !== null) {
    process.stdout.write("Your name is: " + input);
  }
}
);

process.stdin.on(
"end",
() => {
  process.stdout.write("This important software is now closing\n");
}
);
