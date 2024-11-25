/**
 * @file React.ts
 * @description A simple TypeScript program that creates a file Cpp.ts and make the following modifications in the same namespace.
 * @author Yusuf Mustapha Opeyemi. Gadoskey
 * @date 2024-10-13
 */


// Writes a React Class in the same namespace as Subjects.
namespace Subjects {
  // Declaration merging: add experienceTeachingReact to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
