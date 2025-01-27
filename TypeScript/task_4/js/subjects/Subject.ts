// Define a namespace called Subjects to group related classes
namespace Subjects {
    // Define a base class Subject that includes a teacher property and a setter method
    export class Subject {
        teacher: TeacherInterface; // Property to hold the teacher information

        // Setter method to assign a teacher to the subject
        set setTeacher(teacher: TeacherInterface) {
            this.teacher = teacher; // Assign the provided teacher to the teacher property
        }
    }
}
