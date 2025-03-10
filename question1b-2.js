
/*
        2.  Use the reduce() method to calculate the total salary 
            of all employees and display the 
            total in an alert. 
    
*/

let sum = 0;
//document.getElementById("demo").innerHTML = empString.salary.reduce();


var xTag = document.getElementById('demo');

let empString = {
    "empdetails": [
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


function AddSalary()
{

    // Get the array of employee details
    let employees = empString.empdetails;

    // Create a string to hold the salary information
    let salaryInfo = "";


    for (let index = 0; index < employees.length; index++)
    {
        let emp = employees[index]; // Get the current employee
        salaryInfo += emp.firstName + " " + emp.lastName + " earns $" + emp.salary + "<br>";
        sum += employees[index].salary;
    }

    let totalSalary = employees.reduce((accumulator, employees) =>
    {
        return accumulator += employees.salary;
    }, 0);




    //console.log(totalSalary);
    alert(`Salary For Employees : ${totalSalary}`);
    xTag.innerHTML = `Total Salary of employees is ${totalSalary}`;
    //console.log(sum);

    //xTag.innerHTML = `Total Salary of employees is ${sum}`;




}


AddSalary();
