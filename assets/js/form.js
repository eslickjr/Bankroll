// TODO: Create a variable that selects the form element
const formEl = document.querySelector('form');
const backButtonEl = document.getElementById('backButton');
const contractValueEl = document.getElementById('contractValue');

//Add event listener to the contract value input to limit the number of decimal places  
contractValueEl.addEventListener('input', function () {
    let t = this.value;
    if (t.indexOf(".") >= 0) {
        this.value = t.slice(0, t.indexOf(".") + 3);
    }
});

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function submitContract() {
    const contractID = document.getElementById('contractId').value.trim();
    const vendor = document.getElementById('vendor').value.trim();
    const contractValue = document.getElementById('contractValue').value.trim();
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const errorMessage = document.getElementById('errorMessage');
    //Form validation
    if (contractID === '') {
        errorMessage.textContent = 'Please enter a contract ID.';
        return;
    } else if (vendor === '') {
        errorMessage.textContent = 'Please enter a vendor.';
        return;
    } else if (contractValue === '') {
        errorMessage.textContent = 'Please enter a contract value.';
        return;
    } else if (isNaN(contractValue)) {
        errorMessage.textContent = 'Please enter a number for the contract value.';
        return;
    } else if (startDate == 'Invalid Date') {
        errorMessage.textContent = 'Please enter a start date for the contract.';
        return;
    } else if (endDate == 'Invalid Date') {
        errorMessage.textContent = 'Please enter an end date for the contract.';
        return;
    } else if (startDate.getTime() > endDate.getTime()) {
        errorMessage.textContent = 'End date must be after start date.';
        return;
    } else {
        const contractInfo = {};
        contractInfo.contractID = contractID;
        contractInfo.vendor = vendor;
        contractInfo.contractValue = contractValue;
        contractInfo.startDate = startDate.toISOString().split('T')[0];
        contractInfo.endDate = endDate.toISOString().split('T')[0];

        storeContractInfo(contractInfo);
        //TODO redirect to the landing page
        // redirectPage('./index.html');
        Swal.fire({
            title: 'Are you sure ?',
            text: 'Do you want to add this contract?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok, add it!',
            cancelButtonText: 'No,Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                successMessage('Contract successfully added!', './index.html');
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Contract not added :)',
                    'error'
                )
            }
        });
    }
}

//Function to display success message and redirect to the landing page
function successMessage(message, redirectUrl) {
    Swal.fire({
        title: 'Success!',
        text: message,
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        redirectPage(redirectUrl);
    });
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    submitContract();
    /*alert('Contract successfully added!');*/
});
// When a user clicks on the 'Back' button, take them back to the contract list screen
backButtonEl.addEventListener('click', function () {
    redirectPage('./index.html');
});