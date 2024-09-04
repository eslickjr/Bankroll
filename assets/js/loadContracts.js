// Get elements
const mainEl = document.querySelector('main');
const addButtonEl = document.getElementById('add-new');
const tableBodyEl = document.getElementById('table-body');
const tableDeleteBodyEl = document.getElementById('table-delete-body');

// Create a function that builds a table row
function buildRows(contractData, i){
    const tableDeleteRow = document.createElement('tr');
    const tableRow = document.createElement('tr');
    const tdDelEl = document.createElement('td');
    tdDelEl.classList.add('delButCol');
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
    delButtonEl.className += 'delete-button fa';
    delButtonEl.innerHTML = '&#xf014;';
    //do not need id's for now
    //delButtonEl.id = contractData.contractID;

    //add content to the th elements
    tdIdEl.innerText = contractData.contractID;
    tdVendorEl.innerText = contractData.vendor;
    tdValueEl.innerText = contractData.contractValue;
    tdStartEl.innerText = contractData.startDate;
    tdEndEl.innerText = contractData.endDate;

    //adding the columns to the new delete row
    tdDelEl.appendChild(delButtonEl);
    tableDeleteRow.appendChild(tdDelEl);
    //adding row to the existing delete table
    tableDeleteBodyEl.appendChild(tableDeleteRow);
    
    //adding the columns to the new row
    tableRow.appendChild(tdIdEl);
    tableRow.appendChild(tdVendorEl);
    tableRow.appendChild(tdValueEl);
    tableRow.appendChild(tdStartEl);
    tableRow.appendChild(tdEndEl);
    //adding the row to the existing table
    tableBodyEl.appendChild(tableRow);

    delButtonEl.addEventListener('click', function(){
        deleteRow(i)
    });
    // Add event listener to delete a contract when the delete button is clicked
    // Get all delete buttons by class
    /*
    const deleteButtonEls = document.querySelectorAll('.delete-button');

    // Loop through the array and add an event listener to each button
    for (let i=0; i<deleteButtonEls.length; i++){
        deleteButtonEls[i].addEventListener('click', function(event){
            //event.preventDefault();
            //event.target.closest('tr').remove();
            deleteRow(i);
        }, false);
    }
    */
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
            buildRows(contractData[i],i);
        }
    }
}


// Call the renderContractList() function
renderContractList()

// Add a new contract when the 'New Contract' button is clicked
addButtonEl.addEventListener('click', function() {
    redirectPage('./form.html');
});


// // Add sorting functionality
const headerRowChildrenEls = document.querySelectorAll('th');
for(let i=0; i<headerRowChildrenEls.length; i++){
    let sortStatus = true;
    if(!(headerRowChildrenEls[i].innerHTML==='')){
        headerRowChildrenEls[i].addEventListener('click', function(){
            //event.preventDefault();
            //console.log(i);
            //const key = tableBodyEl.rows[i-1].cells[i-1].className;
            //const sortedArray = sortByKey(key);
            //localStorage.setItem('allContractsData', JSON.stringify(sortedArray));
            //console.log(sortedArray);
            //renderContractList();
            headerRowChildrenEls.forEach(header => header.classList.remove('active'));
            headerRowChildrenEls[i].classList.add('active');
            // toggle the dsc class when clicking
            headerRowChildrenEls[i].classList.toggle('dsc', sortStatus);
            // it the header contains the class dsc; remove it after click
            sortStatus = headerRowChildrenEls[i].classList.contains('dsc') ? false : true;
            sortData(headerRowChildrenEls[i].id, sortStatus);
        }, false);
    }
}

function sortData(key, sortStatus){
    const sortedArray = sortByKey(key, sortStatus);
    localStorage.setItem('allContractsData', JSON.stringify(sortedArray));
    //console.log(sortedArray);
    renderContractList();
}

// Remove table data
function removeTableData(){
    for(let i=0; i<tableBodyEl.rows.length; i++){
        if(tableBodyEl.rows[i].id === 'table-header'){
            console.log('true');
        } else{
            tableBodyEl.rows[i].remove();
            tableDeleteBodyEl.rows[i].remove();
            i--;
        }
    }
}
