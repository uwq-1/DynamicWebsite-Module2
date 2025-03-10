/*
    4.  Sort the employees by age in ascending order and
         display the sorted list inside the div 
        with id="demo". 

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


function SortingAge()
{

    // Get the array of employee details
    let empinfo = empString.employees;



    for (let index = 0; index < empinfo.length; index++)
    {
        let emp = empinfo[index]; // Get the current employee
        let ages = empinfo.map(emp => emp.age);
        ages.sort((a, b) => a - b);
        console.log(`Sort in  Ascending order : ${ages}`);
        xTag.innerHTML = `Sort in  Ascending order : ${ages}`;
        //let points2 = ageInfo.toSorted(function (a, b) { return a - b });
        //console.log(points2);
    }

    // Sort the numbers in ascending order:
    //let points2 = points.toSorted(function (a, b) { return a - b })

}


SortingAge();
