# **0x00. ES6 Basics**

**Author**

Yusuf Mustapha Opeyemi [mustopha.yusufope@gmail.com]

**Overview**

This repository introduces you to the basics of ECMAScript 6 (ES6), focusing on modern JavaScript syntax and features. Each task in this project helps you understand how to apply new JavaScript concepts like let and const, arrow functions, template literals, and more.

**Learning Objectives**

1. Use let and const for variable declaration.
2. Understand block scoping with let and const.
3. Implement arrow functions.
4. Use default parameters and rest parameter syntax.
5. Explore spread syntax for arrays and strings.
6. Understand template literals for string interpolation.
7. Use object property shorthand and computed property names.
8. Implement ES6 method properties.
9. Iterate with for...of loops.

**Project Structure**

This project is structured around multiple files, each containing a different ES6 concept demonstrated via a function. The following describes each task and the corresponding file.

**Tasks**

0. Const or let?

  - File: 0-constants.js
  - Modify the function taskFirst to use `const` for variable - declaration.
  - Modify taskNext to use `let` for variable declaration.

1. Block Scope
  
  - File: 1-block-scoped.js
  - Modify the variables inside taskBlock so that they are block-scoped and not overwritten within the conditional block.

2. Arrow Functions

  - File: 2-arrow.js
  - Rewrite the standard function to use ES6 arrow function syntax.

3. Parameter Defaults
  
  - File: 3-default-parameter.js
  - Condense the function to one line by defining default parameter values.

4. Rest Parameter Syntax for Functions

  - File: 4-rest-parameter.js
  - Modify the function to return the number of arguments passed using the rest parameter syntax.

5. Spread Syntax

  - File: 5-spread-operator.js
  - Use spread syntax to concatenate two arrays and each character of a string.

6. Template Literals

  - File: 6-string-interpolation.js
  - Rewrite the return statement using a template literal to substitute the variables.

7. Object Property Shorthand

  - File: 7-getBudgetObject.js
  - Modify the function’s budget object to use the shorthand syntax.

8. Computed Property Names

  - File: 8-getBudgetCurrentYear.js
  - Rewrite the function to use computed property names in the budget object.

9. ES6 Method Properties
  
  - File: 9-getFullBudget.js
  - Use ES6 method properties for getIncomeInDollars and getIncomeInEuros.

10. For...of Loops
  
  - File: 10-loops.js
  - Rewrite the function to use the for...of operator.

11. Iterator 

  - File: 11-createEmployeesObject.js
  - Write a function named createEmployeesObject that receives two arguments

12. Let's Create a Report Object

  - File: 12-createReportObject.js
  - Write a function named createReportObject that takes employeesList as its parameter. This employeesList should be the return value of the createEmployeesObject function. The function should return an object with two properties:
    - allEmployees: An object containing the department name as keys and lists of employees as values.
    - getNumberOfDepartments: A method that returns the number of departments in the employeesList.


13. Iterating Through Report Objects

  - File: 100-createIteratorObject.js
  - Write a function named createIteratorObject that takes a report object (created by createReportObject) as an argument. The function should return an iterator to iterate through every employee in every department.


14. Iterate Through Object

  - File: 101-iterateThroughObject.js
  - Write a function named iterateThroughObject that takes reportWithIterator (the return value of createIteratorObject) as its parameter. It should return every employee's name in a string, separated by |.


**Getting Started**

Clone the repository:

`git clone https://github.com/<your-username>/alx-backend-javascript.git`

Navigate to the project directory:

`cd 0x00-ES6_basic`

Run the examples:

`npm run dev <file-name>.js`