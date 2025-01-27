// Define a namespace called Subjects to group related interfaces and classes
namespace Subjects {
    // Define an interface for a Teacher with an optional property for experience teaching Java
    export interface TeacherInterface {
        experienceTeachingJava?: number; // Optional property for experience teaching Java
    }

    // Define a class Java that extends the Subject class
    export class Java extends Subject {
        // Method to get the requirements for the Java subject
        getRequirements(): string {
            return `Here is the list of requirements for Java`; // Return a string with the requirements
        }

        // Method to get the available teacher for the Java subject
        getAvailableTeacher(): string {
            // Check if the teacher has experience teaching Java
            if (!this.teacher.experienceTeachingJava) {
                return `No available teacher`; // Return a message if no teacher is available
            }
            return `Available Teacher: ${this.teacher.firstName}`; // Return the name of the available teacher
        }
    }
}
