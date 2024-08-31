// Read contract data from local storage
function readContractsData(){
    const allContractsData = JSON.parse(localStorage.getItem('allContractsData') || '[]');
    return allContractsData
}

// Store the contract information to local storage as an array of objects
function storeContractInfo(contractInfo){
    const allContractsData = readContractsData();
    allContractsData.push(contractInfo);
    localStorage.setItem('allContractsData', JSON.stringify(allContractsData));
}

// Create redirect function
function redirectPage(redirectUrl) {
    location.assign(redirectUrl);
} 

// Function to remove a row from the local storage
function deleteRow(i){
    const allContractsData = readContractsData();
    allContractsData.splice(i,1);
    localStorage.setItem('allContractsData', JSON.stringify(allContractsData));
}

// Function to sort an array of objects by key
function sortByKey(key){
    const originalArray = readContractsData();
    const sortedArray = originalArray.sort(function(a,b){
        let x=a[key];
        let y=b[key];
        return ((x<y) ? -1 : ((x>y) ? 1 : 0));
    })
    return sortedArray;
}
