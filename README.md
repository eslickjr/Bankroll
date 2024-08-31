# Group-Project-1

##  Task

In this Project,we need to create a two-page website where users will input and view contracts.It includes building a contract-form,dynamically adding ,sorting and deleting contracts.

## User Story

As a user, I want to be able to view a list of contracts in a table format. I should be able to:

View a list of contracts with details including Contract ID, Vendor Name, Contract Value, Start Date, and End Date.

Sort the contracts by any of these columns in ascending or descending order by clicking the table headers.

Delete any contract from the list using a delete button.

Add new contracts through a form accessible via a button on the main page.


## Acceptance Criteria


View Contracts

A table is displayed with columns for Contract ID, Vendor Name, Contract Value, Start Date, and End Date.

Existing contracts are listed with their details.

Sort Contracts

Clicking on any table header sorts the table rows based on the column clicked.

Sorting toggles between ascending and descending order with each click.

Delete Contracts

Each row in the table has a "Delete" button.
Clicking the "Delete" button removes the corresponding row from the table.
The table updates to reflect the deletion immediately.
Add New Contracts

when we click on "add new contract" button it should redirect to a form page where users can enter new contract details.

The form should include fields for Contract ID, Vendor Name, Contract Value, Start Date, and End Date.

The form validates inputs and displays error messages if necessary (e.g., Contract ID must be a number, start and end dates must be valid).

Submitting the form should add the new contract to the list and should redirect back to the main page.