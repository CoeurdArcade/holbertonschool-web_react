// Import the RowElement interface and RowID type from the interface module
import { RowElement, RowID } from './interface';

// Define a type alias for the insertRow function
// The function takes a RowElement object as an argument and returns a RowID (number)
type insertRow = (row: RowElement) => number;

// Define a type alias for the deleteRow function
// The function takes a RowID as an argument and returns void (no return value)
type deleteRow = (rowId: RowID) => void;

// Define a type alias for the updateRow function
// The function takes a RowID and a RowElement object as arguments and returns a RowID (number)
type updateRow = (rowId: RowID, row: RowElement) => number;

// Export the type aliases for use in other modules
export {
    insertRow,
    deleteRow,
    updateRow,
};
