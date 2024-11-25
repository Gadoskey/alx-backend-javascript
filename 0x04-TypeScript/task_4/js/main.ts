/**
 * @file main.ts
 * @description A simple TypeScript program that Updates task_4/js/main.ts.
 * @author Yusuf Mustapha Opeyemi. Gadoskey
 * @date 2024-10-13
 */

// Importing the necessary modules from the subjects folder
import { Cpp } from './subjects/Cpp';  // Import Cpp subject class
import { Java } from './subjects/Java';  // Import Java subject class
import { React } from './subjects/React';  // Import React subject class
import { Teacher } from './subjects/Teacher';  // Import Teacher interface

// Step 1: Create and export constants for Cpp, Java, and React subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Step 2: Create and export a Teacher object with experienceTeachingC = 10
export const cTeacher: Teacher = {
  experienceTeachingC: 10,
};

// Step 3: For Cpp subject
console.log('C++');
cpp.teacher = cTeacher; // Set cTeacher as the teacher
console.log(cpp.getRequirements()); // Call getRequirements and log the result
console.log(cpp.getAvailableTeacher()); // Call getAvailableTeacher and log the result

// Step 4: For Java subject
console.log('Java');
java.teacher = cTeacher; // Set cTeacher as the teacher
console.log(java.getRequirements()); // Call getRequirements and log the result
console.log(java.getAvailableTeacher()); // Call getAvailableTeacher and log the result

// Step 5: For React subject
console.log('React');
react.teacher = cTeacher; // Set cTeacher as the teacher
console.log(react.getRequirements()); // Call getRequirements and log the result
console.log(react.getAvailableTeacher()); // Call getAvailableTeacher and log the result
