/**
 * @file Java.ts
 * @description A simple TypeScript program that creates a file Java.ts and write a Java Class in the same namespace.
 * @author Yusuf Mustapha Opeyemi. Gadoskey
 * @date 2024-10-13
 */


// Writes a Java Class in the same namespace as Subjects
namespace Subjects {
  // Declaration merging: add experienceTeachingJava to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
