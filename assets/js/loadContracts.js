// Get elements
const mainEl = document.querySelector('main');
const addButtonEl = document.getElementById('add-new');
const tableBodyEl = document.querySelector('tbody');

// Create a function that builds a table row
function buildRows(contractData){
    const tableRow = document.createElement('tr');
    const thIdEl = document.createElement('th');
    const thVendorEl = document.createElement('th');
    const thValueEl = document.createElement('th');
    const thStartEl = document.createElement('th');
    const thEndEl = document.createElement('th');

    //create the button
    const delButtonEl = document.createElement('BUTTON');
    delButtonEl.className += 'delete-button';
    //do not need id's for now
    //delButtonEl.id = contractData.contractID;

    //add content to the th elements
    thIdEl.innerText = contractData.contractID;
    thVendorEl.innerText = contractData.vendor;
    thValueEl.innerText = contractData.contractValue;
    thStartEl.innerText = contractData.startDate;
    thEndEl.innerText = contractData.endDate;

    //adding the columns to the new row
    tableRow.appendChild(delButtonEl);
    tableRow.appendChild(thIdEl);
    tableRow.appendChild(thVendorEl);
    tableRow.appendChild(thValueEl);
    tableRow.appendChild(thStartEl);
    tableRow.appendChild(thEndEl);
    //adding the row to the existing table
    tableBodyEl.appendChild(tableRow);
}

// Create a function that handles the case where there are no contracts
function noContracts(){
    console.log("executed properly");
}

// Create a function that renders the list of contracts if they exist or call the noContracts function
function renderContractList() {
    const contractData = readContractsData();
    if(contractData == ''){
        noContracts();
    } else {
        for (let i=0; i<contractData.length; i++){
            buildRows(contractData[i]);
        }
    }
}

// Call the renderContractList() function
renderContractList()

// Add a new contract when the 'New Contract' button is clicked
addButtonEl.addEventListener('click', function() {
    redirectPage('./form.html');
});

// Add event listener to delete a contract when the delete button is clicked
// Get all delete buttons by class
const deleteButtonEls = document.querySelectorAll('.delete-button');

// Loop through the array and add an event listener to each button
for (let i=0; i<deleteButtonEls.length; i++){
    deleteButtonEls[i].addEventListener('click', function(event){
        event.preventDefault();
        event.target.closest('tr').remove();
        deleteRow(i);
    }, false);
}