/**
 * @file main.ts
 * @description A simple TypeScript program that creates a table of students with their first names and locations.
 *              It uses the Student interface to define the structure of the student objects and appends each 
 *              student’s first name and location to the table dynamically using Vanilla JavaScript.
 * @author Yusuf Mustapha Opeyemi
 * @date 2024-10-05
 */

// Interface definition for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Array containing the two students
const studentsList: Student[] = [student1, student2];

/**
 * @function createTable
 * @description This function dynamically creates a table and appends rows with student data (first name and location)
 *              for each student in the studentsList array.
 */
function createTable(): void {
  const table = document.createElement("table");
  document.body.appendChild(table);

  // Add table headers
  const headerRow = document.createElement("tr");
  const firstNameHeader = document.createElement("th");
  firstNameHeader.innerText = "First Name";
  const locationHeader = document.createElement("th");
  locationHeader.innerText = "Location";
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);

  // Append a row for each student in the array
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.innerText = student.firstName;
    locationCell.innerText = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
}

// Call the createTable function to render the table on the page
createTable();
