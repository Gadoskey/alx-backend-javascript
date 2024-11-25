/**
 * @file Cpp.ts
 * @description A simple TypeScript program that creates a file Cpp.ts and make the some modifications in the same namespace.
 * @author Yusuf Mustapha Opeyemi. Gadoskey
 * @date 2024-10-13
 */



// Adds a new optional attribute experienceTeachingC (number) to the Teacher interface
namespace Subjects {
  // Declaration merging: add experienceTeachingC to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
