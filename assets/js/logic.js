// Read contract data from local storage
function readContractsData() {
    const allContractsData = JSON.parse(localStorage.getItem('allContractsData') || '[]');
    return allContractsData
}

// Store the contract information to local storage as an array of objects
function storeContractInfo(contractInfo) {
    const allContractsData = readContractsData();
    allContractsData.push(contractInfo);
    localStorage.setItem('allContractsData', JSON.stringify(allContractsData));
}

// Create redirect function
function redirectPage(redirectUrl) {
    location.assign(redirectUrl);
}

// Function to remove a row from the local storage with confirmation
function deleteRow(i) {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this contract!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            const allContractsData = readContractsData();
            allContractsData.splice(i, 1);
            localStorage.setItem('allContractsData', JSON.stringify(allContractsData));
            renderContractList();
            swal("The contract has been deleted!", {
                icon: "success",
            });
        } else {
            swal("Your contract is safe!");
        }
    });
}


// Function to sort an array of objects by key
function sortByKey(key, sortStatus) {
    const originalArray = readContractsData();

    if (key === 'contractValue' && sortStatus == true) {
        const sortedArray = originalArray.sort(function (a, b) {
            let x = a[key];
            let y = b[key];
            let check = x - y;
            return ((check < 0) ? 1 : ((check > 1) ? -1 : 0));
        })
        return sortedArray;
    } else if (key === 'contractValue' && !(sortStatus == true)) {
        const sortedArray = originalArray.sort(function (a, b) {
            let x = a[key];
            let y = b[key];
            let check = x - y;
            return ((check > 0) ? 1 : ((check < 1) ? -1 : 0));
        })
        return sortedArray;
    } else if (!(key === 'contractValue') && sortStatus == true) {
        const sortedArray = originalArray.sort(function (a, b) {
            let x = a[key].toUpperCase();
            let y = b[key].toUpperCase();
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        })
        return sortedArray;
    } else {
        const sortedArray = originalArray.sort(function (a, b) {
            let x = a[key].toUpperCase();
            let y = b[key].toUpperCase();
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        })
        return sortedArray;
    }
}
