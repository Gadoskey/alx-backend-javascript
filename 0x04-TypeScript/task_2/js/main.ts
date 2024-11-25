/**
 * @file main.ts
 * @description A simple TypeScript program that creates a teacherInterface and directorInterface with 3 expected methods each
 * @author Yusuf Mustapha Opeyemi. Gadoskey
 * @date 2024-10-12
 */


// Define the DirectorInterface with three methods
interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}


// Define the TeacherInterface with three methods
interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

// class Director that will implement DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home"
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break"
  }
  workDirectorTasks(): string {
    return "Getting to director tasks"
  }
}

// class Teacher that will implement TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home"
  }
  getCoffeeBreak(): string {
    return "Cannot have a break"
  }
  workTeacherTasks(): string {
    return "Getting to work"
  }
}

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Function to check if the employee is a Director
function isDirector(employee: any): employee is Director {
  return employee instanceof Director;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Define a string literal type for Subjects
type Subjects = "Math" | "History";

// Implement the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}
