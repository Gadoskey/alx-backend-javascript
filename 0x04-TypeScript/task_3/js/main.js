/**
 * @file main.js
 * @description A simple TypeScript program that creates a table of students with their first names and locations.
 *              It uses the Student interface to define the structure of the student objects and appends each
 *              student’s first name and location to the table dynamically using Vanilla JavaScript.
 * @author Yusuf Mustapha Opeyemi
 * @date 2024-10-05
 */
// Create two students
var student1 = {
  firstName: "John",
  lastName: "Chuckwuma",
  age: 20,
  location: "New York",
};
var student2 = {
  firstName: "Ayo",
  lastName: "Babatunde",
  age: 22,
  location: "Los Angeles",
};
// Array containing the two students
var studentsList = [student1, student2];
/**
 * @function createTable
 * @description This function dynamically creates a table and appends rows with student data (first name and location)
 *              for each student in the studentsList array.
 */
function createTable() {
  var table = document.createElement("table");
  document.body.appendChild(table);
  // Add table headers
  var headerRow = document.createElement("tr");
  var firstNameHeader = document.createElement("th");
  firstNameHeader.innerText = "First Name";
  var lastNameHeader = document.createElement("th");
  lastNameHeader.innerText = "Last Name";
  var locationHeader = document.createElement("th");
  locationHeader.innerText = "Location";
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(lastNameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);
  // Append a row for each student in the array
  studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    var lastNameCell = document.createElement("td");
    var locationCell = document.createElement("td");
    firstNameCell.innerText = student.firstName;
    lastNameCell.innerText = student.lastName;
    locationCell.innerText = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
}
// Call the createTable function to render the table on the page
createTable();
