# Contract Tracking by the Bankrollers

## Deployed application
[text](https://eslickjr.github.io/Bankroll/)

## Task

In this project, we will create a two page website where users will input and view contracts. The 'main' index.html page will render a list of contracts that they are tracking from local storage. The analyst will be able to sort the table in ascending/descending order by clicking on a column header. The analyst can add contracts to the table by clicking a button that takes them to the form.html page. The analyst can then fill in the information on the form and submit the new contract. If the analyst does not want to create a new contract, they can simply return to the main page by clicking a back button. The analyst should also have the ability to delete a contract and remove it from local storage.

## User Story

```md
As a financial analyst, I want to be able to create a list of contracts that my company has with suppliers so that I can help my business partners set budgets and forecast expenses.

```

## Acceptance Criteria

```md
GIVEN a list of contracts
WHEN I load the app,
THEN I am sent to that Contract Tracking page that contains a sortable table with a Contract ID, Vendor Name, Contract Value ($), Start Date, and End Date
WHEN there are no contracts in my list
THEN the console fires a message indicating that there are no contracts in local storage
WHEN there are contracts in the list 
THEN I can sort the contracts in ascending/descending order by clicking on the column header
WHEN I want to enter a new contract I can by clicking on a 'New Contract' button
THEN I am routed to the Contract Input Form page
WHEN I enter new contract information
THEN data validation checks are performed on all of the fields
WHEN I want to submit a contract
THEN I am asked to confirm
WHEN I do not want to create a new contract
THEN I can click on the back button and return to the Contract Tracking page
WHEN I want to delete a contract
THEN I can by clicking on the delete button next to the row that I want to delete
```


## Description
This application will allow an analyst to create a list of contracts to help them create and forecast budgets for their business partners. The analyst can add contracts to the list by clicking the '+ New Contract' button at which point they are taken to the Contract Input Form page. On this page they can enter an alphanumeric Contract ID, and alphanumeric Vendor name, a positive Contract Value number limited to two decimal places, a Start Date for the contract, and an End date for the contract that cannot be before the Start Date. 

After submitting the Contract Input Form, the analyst should be taken back to the Contract Tracking page. They should be able to delete the contract if they wish by clicking the trash can icon next to the contract that they would like to delete. They should also be able to sort the table of contracts by clicking on the column header. The arrow icon next to the column header name will indicate if the table is sorted in ascending/descending order. The picture below shows a list of contracts sorted in descending order by value.

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.