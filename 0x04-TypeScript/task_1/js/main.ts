/**
 * @file main.ts
 * @description A simple TypeScript program that creates a teacher and directors interface, which extend teacher's inteface
 * @author Yusuf Mustapha Opeyemi. Gadoskey
 * @date 2024-10-12
 */

// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // Can only be set when initialized
  readonly lastName: string;  
  fullTimeEmployee: boolean; 
  yearsOfExperience?: number; 
  location: string;           
  [propName: string]: any;    // Index signature to allow dynamic attributes
}


// Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;      // Additional required attribute for Directors
}


// An interface for the function `printTeacher` named printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function based on the interface
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Define the constructor interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to return "Currently working"
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to return the student's first name
  displayName(): string {
    return this.firstName;
  }
}
