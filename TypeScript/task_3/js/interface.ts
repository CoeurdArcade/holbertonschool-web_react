// Define a type alias RowID for a number, representing the unique identifier for a row
type RowID = number;

// Define an interface RowElement for a row object
interface RowElement {
    firstName: string; // Required property for the first name
    lastName: string;  // Required property for the last name
    age?: number;      // Optional property for the age
}

// Export the RowID type and RowElement interface for use in other modules
export {
    RowID,
    RowElement,
}
