/**
 * function countStudents:
 * Logs the number of students in each field
 * @param {string} path - The path to the file
 * @author Gadoskey
 */
const fs = require("fs");

function countStudents(path) {
  try {
    // Attempt to read the file synchronously
    const data = fs.readFileSync(path, "utf8");

    // Split the data by line and filter out empty lines
    const lines = data.split("\n").filter((line) => line.trim() !== "");

    // Remove the header line (first line of the CSV)
    const [header, ...students] = lines;

    // Initialize an object to keep track of students per field
    const studentsByField = {};

    // Iterate through each student record
    students.forEach((line) => {
      const [field, firstName] = line.split(",");

      // If the field doesn't exist in the object, initialize it
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      // Add the student's name to the corresponding field's array
      studentsByField[field].push(firstName);
    });

    // Count the total number of students
    const totalStudents = students.length;

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students and their names for each field
    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ", "
        )}`
      );
    }
  } catch (err) {
    // If an error occurs, throw the required error message
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
