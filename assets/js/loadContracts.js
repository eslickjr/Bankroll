// Get elements
const mainEl = document.querySelector('main');
const addButtonEl = document.getElementById('addNew');
const tableBodyEl = document.getElementById('tableBody');

// Create a function that builds a table row
function buildRows(contractData, i){
    const tableRow = document.createElement('tr');
    const tdIdEl = document.createElement('td');
    tdIdEl.classList.add('contractID');
    const idDelEl = document.createElement('BUTTON');
    const idSpanEl = document.createElement('span');
    idDelEl.className += 'deleteButton fa btn btn-danger';
    idDelEl.innerHTML = '&#xf014;';
    const tdVendorEl = document.createElement('td');
    tdVendorEl.classList.add('vendor');
    const tdValueEl = document.createElement('td');
    tdValueEl.classList.add('contractValue');
    const tdStartEl = document.createElement('td');
    tdStartEl.classList.add('startDate');
    const tdEndEl = document.createElement('td');
    tdEndEl.classList.add('endDate');

    //add content to the th elements
    idSpanEl.innerText = contractData.contractID;
    tdVendorEl.innerText = contractData.vendor;
    tdValueEl.innerText = contractData.contractValue;
    tdStartEl.innerText = contractData.startDate;
    tdEndEl.innerText = contractData.endDate;
    
    //adding the span and delete button to id row
    tdIdEl.appendChild(idDelEl);
    tdIdEl.appendChild(idSpanEl);
    //adding the columns to the new row
    tableRow.appendChild(tdIdEl);
    tableRow.appendChild(tdVendorEl);
    tableRow.appendChild(tdValueEl);
    tableRow.appendChild(tdStartEl);
    tableRow.appendChild(tdEndEl);
    //adding the row to the existing table
    tableBodyEl.appendChild(tableRow);

    idDelEl.addEventListener('click', function(){
        deleteRow(i)
    });
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
            if (headerRowChildrenEls[i].classList.contains('bi-arrow-up-square')) {headerRowChildrenEls[i].classList.remove('dsc')}
            
            headerRowChildrenEls.forEach(header => {
                    header.classList.remove('bi-arrow-up-square-fill');
                    header.classList.remove('bi-arrow-down-square-fill');
                    header.classList.add('bi-arrow-up-square');
                    header.children[1].innerHTML = '<path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>';
            });

            // toggle the dsc class when clicking
            sortStatus = headerRowChildrenEls[i].classList.toggle('dsc');
            // it the header contains the class dsc; remove it after click
            if (sortStatus === true) {
                 headerRowChildrenEls[i].classList.remove('bi-arrow-up-square-fill');
                 headerRowChildrenEls[i].classList.add('bi-arrow-down-square-fill');
                 headerRowChildrenEls[i].classList.remove('bi-arrow-up-square');
                 headerRowChildrenEls[i].children[1].innerHTML = '<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0"/>';
            } else {
                headerRowChildrenEls[i].classList.add('bi-arrow-up-square-fill');
                headerRowChildrenEls[i].classList.remove('bi-arrow-down-square-fill');
                headerRowChildrenEls[i].classList.remove('bi-arrow-up-square');
                headerRowChildrenEls[i].children[1].innerHTML = '<path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0"/>';
            }

            sortData(headerRowChildrenEls[i].id, sortStatus);
        }, false);
    }
}

function sortData(key, sortStatus){
    const sortedArray = sortByKey(key, sortStatus);
    localStorage.setItem('allContractsData', JSON.stringify(sortedArray));
    renderContractList();
}

// Remove table data
function removeTableData(){
    for(let i=0; i<tableBodyEl.rows.length; i++){
        if(tableBodyEl.rows[i].id === 'tableHeader'){
            console.log('true');
        } else{
            tableBodyEl.rows[i].remove();
            i--;
        }
    }
}
