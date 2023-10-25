# Assignment 05 

## The Employee Management System (Add Employee)

In this assignment you have been tasked with creating the front-end ‘Add Employee’ web form for an Employee Management System. You will be tasked with creating a form that resembles the following design:

![image](https://github.com/Vana-D/COMP690-Assignment05/assets/111786588/c1587b3f-47d0-44a9-8c7b-9300066f0950)

### General Considerations

#### When building out the form, keep the following in mind:

  - Use Bootstrap for the primary styling of the form.
  - Style the form tag to look like my design. You are free to use your own colors here.
  - Within the form, create six form elements. The specs for these elements are outlined below.
  - Make sure to add labels for each input and select element.
  - Add a Submit button that when clicked, will call a JavaScript function that will process your code.


### Form Element Design

| Input Type | Element ID | Required? | Max Length | Values/Options |
| ------------- | ------------- | ------------- | ------------- | ------------- | 
| text | id  | Yes | 8 |   |
| text | name |  Yes  | None |   | 
| text | ext | Yes | 4  |  |
| email | email | Yes  |  | 
| select  | department | Yes | N/A | Administrative, Engineering, Executive, Marketing, Quality Assurance, Sales |
| submit | submit | N/A | N/A  | Add Employee | 


### The JavaScript
Once the user fills out the form, the submission of the form should be processed through a JavaScript handler and the results should be displayed in the console window (exactly the same way it is outlined in “The Result” section below. When building out your JavaScript code consider the following:

  - You’ll need to handle the load event of the window object. Otherwise, you’ll receive an error when the page loads.
  - Within the load handler create a helper function that you can use to process the selection of the form and each form element within the form.
  - Create an event listener that handles the form’s submission. This will be attached to the form itself, not the submit button.
  - Within the handler for the form’s submission, you’ll need to cancel the default behavior of the form. Remember, the form will want to submit by default. You want to prevent this so that you can display the values of the form elements within the console window without the form trying to submit to a non-existent action.
  - Collect all of the values from the form elements and display them within the console window.

### A couple of things to consider:
  - Use only arrow functions in your code.
  - Make your code as concise as possible. There shouldn’t be more than 15 lines of code in the script.


## The Result
![image](https://github.com/Vana-D/COMP690-Assignment05/assets/111786588/39f764a6-3c59-4dc9-a949-839aad674193)
