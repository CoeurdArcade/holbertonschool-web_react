// Define an interface for a Teacher object
interface Teacher {
    readonly firstName: string; // Readonly property for first name
    readonly lastName: string;  // Readonly property for last name
    fullTimeEmployee: boolean; // Boolean property to indicate if the teacher is a full-time employee
    yearsOfExperience?: number; // Optional property for years of experience
    location: string; // Property for location
    [propName: string]: any; // Index signature allowing any additional properties
}

// Define an interface for Directors that extends the Teacher interface
interface Directors extends Teacher {
    numberOfReports: number; // Property for the number of reports
}

// Define a function type for printing teacher information
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = function (
    firstName: string,
    lastName: string
): string {
    return `${firstName[0]}. ${lastName}`; // Return the formatted name
}

// Define an interface for the Student class constructor
interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

// Define an interface for the Student class
interface StudentClassInterface {
    workOnHomework(): string; // Method to indicate working on homework
    displayName(): string; // Method to display the student's name
}

// Implement the StudentClass that adheres to the StudentClassInterface
const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working'; // Return a message indicating the student is working on homework
    }

    displayName() {
        return `${this.firstName}`; // Return the student's first name
    }
}

// Export the printTeacher function and StudentClass
export {
    printTeacher,
    StudentClass
}

// Create an instance of StudentClass
const obj: StudentClassInterface = new StudentClass('Jordan', 'Peterson');

// Log the created object to the console
console.log(obj);

