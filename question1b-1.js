
/*
        1.  Use the map() method to generate an array of 
            full names (firstName + lastName) of all 
            employees and log the result to the console. 

    
*/


function GetEmpNames()
{


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


    // Get the array of employee details
    let empdetails = empString.employees;

    // Create a string to get the first and last name 
    let empInfo = " ";

    empdetails.forEach(employee =>
    {
        empInfo += `Full Name : ${employee.firstName}   ${employee.lastName}\n`;
        //empInfo = employee.firstName + employee.lastName;
    });


    xTag.innerHTML = empInfo;
    //console.log(empInfo);

    //let showEmp = empdetails.map(employee => empInfo += `Full Name : ${employee.firstName}   ${employee.lastName}\n`);
    // Join the array into a single string with new lines
    //empInfo = showEmp.join('\n');
    // Reference : https://dev.to/lavary/about-typeerror-map-is-not-a-function-in-javascript-80#:~:text=The%20error%20%E2%80%9CTypeError%3A%20object.,%2C%20a%20Set%20object%2C%20etc.
    let dataKeys = Object.entries(empString);
    let showEmp = dataKeys.map(item =>
    {
        console.log(empInfo);
        return item;
    });

    //console.log(showEmp);

}


GetEmpNames();
