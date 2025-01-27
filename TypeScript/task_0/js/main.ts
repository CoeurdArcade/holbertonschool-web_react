// Define an interface for a Student object
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create instances of Student
const studentOne: Student = {
    firstName: 'James',
    lastName: 'Joyce',
    age: 90,
    location: 'Europe'
};

const studentTwo: Student = {
    firstName: 'Jordan',
    lastName: 'Peterson',
    age: 57,
    location: 'Canada'
};

// Create an array of Student objects
const studentsList: Array<Student> = [studentOne, studentTwo];

// Define the labels for the table headers
const labels: string[] = ['firstName', 'location'];

// Create the table element
const table: HTMLTableElement = document.createElement('table');

// Create the table body and header sections
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const thead: HTMLTableSectionElement = document.createElement('thead');

// Append the table to the document body
document.body.appendChild(table);

// Append the header and body sections to the table
table.appendChild(thead);
table.appendChild(tbody);

// Create the table headers
for (let i: number = 0; i < labels.length; i++) {
    const th: HTMLTableCellElement = document.createElement('th');
    th.appendChild(document.createTextNode(`${labels[i]}`));
    thead.appendChild(th);
}

// Populate the table body with student data
for (let i: number = 0; i < studentsList.length; i++) {
    const tr: HTMLTableRowElement = document.createElement('tr');
    tbody.appendChild(tr);

    // Extract the values to be displayed in the table
    const values: string[] = [studentsList[i].firstName, studentsList[i].location];

    // Create table cells for each value
    for (let j: number = 0; j < values.length; j++) {
        const td: HTMLTableCellElement = document.createElement('td');
        td.appendChild(document.createTextNode(`${values[j]}`));
        tr.appendChild(td);
    }
}

