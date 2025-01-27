// Define a namespace called Subjects to group related interfaces and classes
namespace Subjects {
    // Define an interface for a Teacher with an optional property for experience teaching React
    export interface TeacherInterface {
        experienceTeachingReact?: number; // Optional property for experience teaching React
    }

    // Define a class React that extends the Subject class
    export class React extends Subject {
        // Method to get the requirements for the React subject
        getRequirements(): string {
            return `Here is the list of requirements for React`; // Return a string with the requirements
        }

        // Method to get the available teacher for the React subject
        getAvailableTeacher(): string {
            // Check if the teacher has experience teaching React
            if (!this.teacher.experienceTeachingReact) {
                return `No available teacher`; // Return a message if no teacher is available
            }
            return `Available Teacher: ${this.teacher.firstName}`; // Return the name of the available teacher
        }
    }
}
