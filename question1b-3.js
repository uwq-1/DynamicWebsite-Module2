/*

    3.  Filter the employees whose salary is greater than $55,000 
        and display their names in the 
        console. 

*/


var xTag = document.getElementById('demo');

let empString = {
    "employees": [
        {
            "firstName": "John", "lastName": "Doe", "age": 30, "department": "HR",
            "salary": 50000
        },
        {
            "firstName": "Anna", "lastName": "Smith", "age": 27, "department":
                "Finance", "salary": 60000
        },
        {
            "firstName": "Peter", "lastName": "Jones", "age": 40, "department":
                "IT", "salary": 75000
        },
        {
            "firstName": "Mary", "lastName": "Johnson", "age": 35, "department":
                "Marketing", "salary": 55000
        }
    ]
};


function SalaryDetails()
{
    // Get the array of employee details
    let empinfo = empString.employees;

    // Create a string to hold the salary information
    let salaryInfo = "";

    for (let index = 0; index < empinfo.length; index++)
    {
        let emp = empinfo[index]; // Get the current employee
        if (empinfo[index].salary >= 55000)
        {
            salaryInfo = console.log(emp.firstName + " " + emp.lastName);
        }

    }


}

SalaryDetails();
