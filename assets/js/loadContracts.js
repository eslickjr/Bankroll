// Get elements
const mainEl = document.querySelector('main');
const addButtonEl = document.getElementById('add-new');
const tableBodyEl = document.querySelector('tbody');

// Create a function that builds a table row
function buildRows(contractData){
    const tableRow = document.createElement('tr');
    const tdIdEl = document.createElement('td');
    tdIdEl.classList.add('contractID');
    const tdVendorEl = document.createElement('td');
    tdVendorEl.classList.add('vendor');
    const tdValueEl = document.createElement('td');
    tdValueEl.classList.add('contractValue');
    const tdStartEl = document.createElement('td');
    tdStartEl.classList.add('startDate');
    const tdEndEl = document.createElement('td');
    tdEndEl.classList.add('endDate');

    //create the button
    const delButtonEl = document.createElement('BUTTON');
    delButtonEl.className += 'delete-button';
    //do not need id's for now
    //delButtonEl.id = contractData.contractID;

    //add content to the th elements
    tdIdEl.innerText = contractData.contractID;
    tdVendorEl.innerText = contractData.vendor;
    tdValueEl.innerText = contractData.contractValue;
    tdStartEl.innerText = contractData.startDate;
    tdEndEl.innerText = contractData.endDate;

    //adding the columns to the new row
    tableRow.appendChild(delButtonEl);
    tableRow.appendChild(tdIdEl);
    tableRow.appendChild(tdVendorEl);
    tableRow.appendChild(tdValueEl);
    tableRow.appendChild(tdStartEl);
    tableRow.appendChild(tdEndEl);
    //adding the row to the existing table
    tableBodyEl.appendChild(tableRow);

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
}

// Create a function that handles the case where there are no contracts
function noContracts(){
    console.log("executed properly");
}

// Create a function that renders the list of contracts if they exist or call the noContracts function
function renderContractList() {
    removeTableData();
    const contractData = readContractsData();
    if(contractData == ''){
        noContracts();
    } else {
        for (let i=0; i<contractData.length; i++){
            buildRows(contractData[i]);
        }
    }
}

// Add sorting functionality
const headerRowChildrenEls = document.querySelectorAll('th');
for(let i=0; i<headerRowChildrenEls.length; i++){
    if(!(headerRowChildrenEls[i].innerHTML==='')){
        headerRowChildrenEls[i].addEventListener('click', function(event){
            event.preventDefault();
            console.log(i);
            const key = tableBodyEl.rows[i-1].cells[i-1].className;
            const sortedArray = sortByKey(key);
            localStorage.setItem('allContractsData', JSON.stringify(sortedArray));
            console.log(sortedArray);
            renderContractList();
        }, false);
    }
}


// Call the renderContractList() function
renderContractList()
    

// Remove table data
function removeTableData(){
    const tableData=document.querySelector('tbody');
    for(let i=0; i<tableData.rows.length; i++){
        if(tableData.rows[i].id === 'table-header'){
            console.log('true');
        } else{
            tableData.rows[i].remove();
            i--;
        }
    }
}

// Add a new contract when the 'New Contract' button is clicked
addButtonEl.addEventListener('click', function() {
    redirectPage('./form.html');
});