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