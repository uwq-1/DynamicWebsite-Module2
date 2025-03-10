
/*
Question 1 Section (A)

1.  Parse the JSON data using JSON.parse(). 
2.  Display the list of employees in an 
    unordered list inside the div with id="demo". 

*/
// Reference : https://stackoverflow.com/questions/40950793/creating-an-unordered-list-through-javascript

function MainListEmp()
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



    const json = '{"result":true, "count":42}';
    const obj = JSON.parse(json);

    console.log(obj.count);

    //xTag.innerHTML = obj.count;
    // Expected output: 42

    console.log(obj.result);
    // Expected output: true

    console.log(empString);

    //let objdetails = JSON.parse(empString);
    //let detailsInfo = console.log(objdetails);




    var unorderedList = document.createElement('ul');

    // Get the array of employee details
    let empdetails = empString.employees;

    // Create a string to hold the salary information
    let empInfo = "";

    for (let index = 0; index < empdetails.length; index++)
    {
        let emp = empdetails[index]; // Get the current employee
        empInfo += `Full Name : ${emp.firstName}   ${emp.lastName}\n` +
            `Age : ${emp.age}\n` +
            `Department : ${emp.department}\n` +
            `Salary : ${emp.salary}\n`;

        // Create a new 'LI' element for each part of the sideList array
        var theList = document.createElement('li');

        // Set the contents of the list seen in "sideList"
        theList.appendChild(document.createTextNode(empInfo));

        // Appened the list to the unorderedList
        unorderedList.appendChild(theList);

    }

    // Append the list to the menu div            ***
    xTag.appendChild(unorderedList);              // ***

    console.log(empInfo);

    // Return the occupied list
    return unorderedList;

}

MainListEmp();

