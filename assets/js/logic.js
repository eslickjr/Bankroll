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
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to delete this contract?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
    }).then((result) => {
        if (result.isConfirmed) {
            const allContractsData = readContractsData();
            allContractsData.splice(i, 1);
            if (allContractsData.length === 0) {
                noContracts();
            }
            localStorage.setItem('allContractsData', JSON.stringify(allContractsData));
            renderContractList();
            Swal.fire(
                'Deleted!',
                'Your contract has been deleted.',
                'success'
            );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelled',
                'Your contract is safe :)',
                'error'
            );
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
            return ((check < 0) ? -1 : ((check > 1) ? 1 : 0));
        })
        return sortedArray;
    } else if (key === 'contractValue' && !(sortStatus == true)) {
        const sortedArray = originalArray.sort(function (a, b) {
            let x = a[key];
            let y = b[key];
            let check = x - y;
            return ((check > 0) ? -1 : ((check < 1) ? 1 : 0));
        })
        return sortedArray;
    } else if (!(key === 'contractValue') && sortStatus == true) {
        const sortedArray = originalArray.sort(function (a, b) {
            let x = a[key].toUpperCase();
            let y = b[key].toUpperCase();
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        })
        return sortedArray;
    } else {
        const sortedArray = originalArray.sort(function (a, b) {
            let x = a[key].toUpperCase();
            let y = b[key].toUpperCase();
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        })
        return sortedArray;
    }
}
