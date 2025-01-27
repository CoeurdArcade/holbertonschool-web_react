// Define a namespace called Subjects to group related interfaces and classes
namespace Subjects {
    // Define an interface for a Teacher with an optional property for experience teaching C++
    export interface TeacherInterface {
        experienceTeachingC?: number; // Optional property for experience teaching C++
    }

    // Define a class Cpp that extends the Subject class
    export class Cpp extends Subject {
        // Method to get the requirements for the Cpp subject
        getRequirements(): string {
            return `Here is the list of requirements for Cpp`; // Return a string with the requirements
        }

        // Method to get the available teacher for the Cpp subject
        getAvailableTeacher(): string {
            // Check if the teacher has experience teaching C++
            if (!this.teacher.experienceTeachingC) {
                return `No available teacher`; // Return a message if no teacher is available
            }
            return `Available Teacher: ${this.teacher.firstName}`; // Return the name of the available teacher
        }
    }
}
