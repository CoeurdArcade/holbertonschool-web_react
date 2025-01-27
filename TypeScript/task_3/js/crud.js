// Function to insert a row
export function insertRow(row) {
    console.log('Insert row', row); // Log the row being inserted
    return Math.floor(Math.random() * Math.floor(1000)); // Return a random RowID
}

// Function to delete a row by its RowID
export function deleteRow(rowId) {
    console.log('Delete row id', rowId); // Log the RowID of the row being deleted
    return; // Return nothing
}

// Function to update a row by its RowID
export function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row); // Log the RowID and the updated row data
    return rowId; // Return the RowID
}

