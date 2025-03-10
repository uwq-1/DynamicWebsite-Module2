/*

Using jQuery DataTables, dynamically load and display employee information from a provided
MOCK_DATA.json file. The JSON structure follows this format:
[
 { "id": 1, "first_name": "John", "last_name": "Doe", "email":
"john.doe@example.com", "department": "HR", "salary": 50000 },
 { "id": 2, "first_name": "Anna", "last_name": "Smith", "email":
"anna.smith@example.com", "department": "Finance", "salary": 60000 },
 { "id": 3, "first_name": "Peter", "last_name": "Jones", "email":
"peter.jones@example.com", "department": "IT", "salary": 75000 }
]


Task : 

Download and include jQuery DataTables in your project.
https://datatables.net/examples/ajax/objects.html
1. Create an HTML table with the following columns:
o Employee ID
o First Name
o Last Name
o Email
o Department
o Salary
2. Use AJAX to fetch data from MOCK_DATA.json and populate the DataTable dynamically.
3. Ensure the table supports sorting, searching, and pagination.
4. Apply DataTables styling to enhance the user experience.




*/


$(document).ready(function ()
{

    
    new DataTable("#employeeTable", {
        ajax: {
            url: "data/MOCK_DATA.json",
            dataSrc: ''
        },
        columns: [
            { data: "id" },
            { data: "first_name" },
            { data: "last_name" },
            { data: "email" },
            { data: "department" },
            { data: "salary" }
        ]
    });

});
