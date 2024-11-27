/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Gadoskey
 */
const fs = require("fs");

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, "utf8");

    // Split the file content into lines and filter out empty lines
    const lines = data.split("\n").filter((line) => line.trim() !== "");

    // Remove the header (first line)
    const [header, ...students] = lines;

    // Initialize a map to store students by field
    const studentsByField = {};

    // Process each student's line
    students.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(",");

      // Skip lines that are malformed or incomplete
      if (!firstname || !field) return;

      // Initialize the field if not already present
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      // Add the student's first name to the appropriate field group
      studentsByField[field].push(firstname);
    });

    // Calculate total number of students
    const totalStudents = students.length;

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the count and names for each field
    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ", "
        )}`
      );
    }
  } catch (error) {
    // Throw an error with the required message if file reading fails
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
