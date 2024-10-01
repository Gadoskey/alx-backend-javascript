export default function taskBlock(trueOrFalse) {
  const task = false; // Original value
  const task2 = true; // Original value

  let innerTask; // Declare variables with let
  let innerTask2;

  if (trueOrFalse) {
    innerTask = true; // Update only the inner variables
    innerTask2 = false;
  } else {
    innerTask = task; // Keep original task
    innerTask2 = task2; // Keep original task2
  }

  return [innerTask, innerTask2]; // Return the inner variables
}
