// Create instances of the Cpp, Java, and React classes from the Subjects namespace
const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

// Define a teacher object with properties for first name, last name, and experience teaching C++
let cTeacher = {
    firstName: 'Pablo',
    lastName: 'Escobar',
    experienceTeachingC: 10, // Experience teaching C++
};

// Log and set the teacher for the Cpp subject, then log the requirements and available teacher
console.log('C++');
cpp.setTeacher = cTeacher; // Set the teacher for the Cpp subject
console.log(cpp.getRequirements()); // Log the requirements for the Cpp subject
console.log(cpp.getAvailableTeacher()); // Log the available teacher for the Cpp subject

// Log and set the teacher for the Java subject, then log the requirements and available teacher
console.log('Java');
java.setTeacher = cTeacher; // Set the teacher for the Java subject
console.log(java.getRequirements()); // Log the requirements for the Java subject
console.log(java.getAvailableTeacher()); // Log the available teacher for the Java subject

// Log and set the teacher for the React subject, then log the requirements and available teacher
console.log('React');
react.setTeacher = cTeacher; // Set the teacher for the React subject
console.log(react.getRequirements()); // Log the requirements for the React subject
console.log(react.getAvailableTeacher()); // Log the available teacher for the React subject

// Export the instances of Cpp, Java, React, and the cTeacher object for use in other modules
export {
    cpp,
    java,
    react,
    cTeacher,
};
