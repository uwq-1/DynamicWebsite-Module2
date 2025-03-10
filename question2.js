/*

Question 2: Form Design and Validation (15 Marks) 
Design a payment form with the following fields: 
• 
Billing Information 
o First Name (Required) 
o Last Name (Required) 
o Email (Required, must be a valid email format) 
o Address (Required) 
• 
Payment Method 
o Radio buttons for selecting payment type (Credit Card, PayPal) 
o If "PayPal" is selected, disable the credit card fields. 
• 
Credit Card Details (Only if Credit Card is selected) 
o Card Number (Required, numeric) 
o Expiry Date (Required, MM/YY format) 
o CVV (Required, 3-digit number) 
• 
Shipping Information 
o Checkbox: "Same as billing information" 
o If unchecked, show additional fields for shipping information (street address, 
state/province, country, zip) 
Tasks: 
1. Implement the form using HTML and CSS. 
2. Use JavaScript to validate all required fields and display custom error messages if they 
are left empty. 


*/


/*
Postal Code in Jamaica
Reference : https://en.youbianku.com/Jamaica#   
*/


document.addEventListener("DOMContentLoaded", function ()
{

    let billsForm = document.getElementById("billingForm");
    let shippingForm = document.getElementById("shippingForm");
    let selectCheckbox = document.getElementById('shipping-test');

    let shippingFields = document.getElementById("shippingFields");


    let isValid = true;
    const errorMessage = document.getElementById('error-message');
    const shippingErrors = document.getElementById('shippingErrorMessage');

    // Function to show/hide shipping fields based on checkbox status
    function toggleShippingFields()
    {
        if (selectCheckbox.checked)
        {
            shippingFields.style.display = "none"; // Hide if checked
        } else
        {
            shippingFields.style.display = "block"; // Show if unchecked
        }
    }

    // Initial check when the page loads
    toggleShippingFields();

    // Event listener for the checkbox
    selectCheckbox.addEventListener('change', toggleShippingFields);

    function validateEmail(email)
    {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }





    billsForm.addEventListener("submit", (e) =>
    {
        e.preventDefault();

        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let userEmail = document.getElementById("email");
        let userAddress = document.getElementById("address");


        let checkRadio = document.querySelector(
            'input[name="drones"]:checked');

        let checkBox = document.querySelector('input[name="user-shipping"]:checked');

        let checkedCard = document.getElementById("cardNumber");
        let checkCardDate = document.getElementById("expirationDate");


        const nameRegex = /^[a-zA-Z]{1,30}$/;
        if (!nameRegex.test(firstName.value))
        {
            errorMessage.textContent = "First Name must be 1-30 letters"
            isValid = false;
        }

        if (!nameRegex.test(lastName.value))
        {
            errorMessage.textContent = "Last Name must be 1-30 letters"
            isValid = false;
        }


        // References on Validate Email Address 
        // https://www.geeksforgeeks.org/javascript-program-to-validate-an-email-address/
        if (validateEmail(userEmail.value))
        {
            errorMessage.textContent = ""; // Clear previous error message
            alert('Email is valid!');
        } else
        {
            errorMessage.textContent = 'Please enter valid email address';
            isValid = false;
        }

        if (userAddress == "")
        {
            errorMessage.textContent = "Please enter your address";
            alert("Ensure you input a value in Address field!");
        }



        if (checkRadio != null)
        {
            alert(`Payment Method Value : ${checkRadio.value}`);
            console.log("Payment Method Value : ", checkRadio.value);
        }


        if (checkRadio)
        {
            alert(`Payment Method Value : ${checkRadio.value}`);
            console.log("Payment Method Value : ", checkRadio.value);

            // Disable or enable the card fields based on the selected payment method
            if (checkRadio.value === "paypal")
            {
                checkedCard.disabled = true;  // Disable Card Number
                checkCardDate.disabled = true; // Disable Expiration Date
            } else
            {
                checkedCard.disabled = false;  // Enable Card Number
                checkCardDate.disabled = false; // Enable Expiration Date
            }
        }


        document.querySelectorAll('input[name="drones"]').forEach((radio) =>
        {
            radio.addEventListener('change', (e) =>
            {
                if (e.target.value === "paypal")
                {
                    checkedCard.disabled = true;  // Disable Card Number
                    checkCardDate.disabled = true; // Disable Expiration Date
                } else
                {
                    checkedCard.disabled = false;  // Enable Card Number
                    checkCardDate.disabled = false; // Enable Expiration Date
                }
            });
        });



        if (isValid)
        {
            alert("Form submitted successfully!");
        }





    })

    shippingForm.addEventListener("submit", (e) =>
    {
        e.preventDefault();

        let shippingAddress = document.getElementById("shippingAddress");
        let zipCode = document.getElementById("shippingZipCode");
        let shippingState = document.getElementById("shippingState");

        isValid = true;
        shippingErrors.textContent = "";  // Clear previous error messages

        // Only validate if shipping info is required
        if (!selectCheckbox.checked)
        {

            const nameRegex = /^[a-zA-Z]{1,30}$/;
            if (!nameRegex.test(shippingState.value))
            {
                shippingErrors.textContent = "Shipping State must be 1-30 letters"
                isValid = false;
            }

            if (shippingState.value === "")
            {
                shippingErrors.textContent = "Please enter Shipping State"
                isValid = false;
            }

            if (shippingAddress.value === "")
            {
                shippingErrors.textContent = "Please enter Shipping Address"
                isValid = false;
            }

            const codesRegex = /^\d{5}(-\d{4})?$/; // Accepts "12345" or "12345-6789"
            /* if (codesRegex.test(zipCode.value))
            {
                shippingErrors.textContent = "Shipping Zip Code allows US only"
                isValid = false;
            } */

            if (zipCode.value != null)
            {
                console.log(`Zip Code value : ${zipCode.value}`);
            }



            if (!zipCode)
            {
                shippingErrors.textContent += "Please enter Shipping Zip Code";
                isValid = false;
            } else if (!codesRegex.test(zipCode.value))
            {
                shippingErrors.textContent += "Shipping Zip Code allows US only";
                isValid = false;
            }



            if (isValid)
            {
                // If valid, show success message
                alert("Shipping form submitted successfully!");
            }
        }



    });


});

