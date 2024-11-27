/**
 * Reads a CSV file and counts the students per field.
 * @author Gadoskey
 * @param {string} path - The path to the CSV file.
 * @throws Will throw an error if the file cannot be read.
 */
const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, "utf8");
    const lines = data.split("\n").filter((line) => line.trim() !== "");

    const students = [];
    const fields = {};

    for (let i = 1; i < lines.length; i += 1) {
      // Skip the header
      const [firstname, lastname, age, field] = lines[i].split(",");
      if (firstname && field) {
        students.push({ firstname, lastname, age, field });
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }
    }

    console.log(`Number of students: ${students.length}`);
    Object.keys(fields).forEach((field) => {
      console.log(
        `Number of students in ${field}: ${
          fields[field].length
        }. List: ${fields[field].join(", ")}`
      );
    });
  } catch (error) {
    throw new Error("Cannot load the database");
  }
};

module.exports = countStudents;
