/**
 * @file Subjects.ts
 * @description A simple TypeScript program that creates a Subject class in the same namespace named Subjects.
 * @author Yusuf Mustapha Opeyemi. Gadoskey
 * @date 2024-10-13
 */

// a Subject class in the same namespace named Subjects
namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
