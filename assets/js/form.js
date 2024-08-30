// TODO: Create a variable that selects the form element
const formEl = document.querySelector('form');
const backButtonEl = document.getElementById('back-button');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function submitContract(){
    const contractID = document.getElementById('contractId').value.trim();
    const vendor = document.getElementById('vendor').value.trim();
    const contractValue = document.getElementById('contractValue').value.trim();
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const errorMessage = document.getElementById('errorMessage');

    if(contractID==='' || vendor==='' || contractValue==='' || startDate==='' || endDate===''){
        errorMessage.textContent = 'All fields must be filled out to create a new contract.'
    } else{
        const contractInfo = {};
            contractInfo.contractID = contractID;
            contractInfo.vendor = vendor;
            contractInfo.contractValue = contractValue;
            contractInfo.startDate = startDate;
            contractInfo.endDate = endDate;

        storeContractInfo(contractInfo);
        //TODO redirect to the landing page
        redirectPage('./index.html');
    }
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', function(event){
    event.preventDefault();
    submitContract();
});

// When a user clicks on the 'Back' button, take them back to the contract list screen
backButtonEl.addEventListener('click', function() {
    redirectPage('./index.html');
});