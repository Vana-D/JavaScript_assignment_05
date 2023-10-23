/*
    Project: Assignment 05: The Employee Management System (Add Employee)
    Date: 10/23/23
    Author: Van Do
*/


// CREATE VARIABLES
let empId;
let empName;
let empExt;
let empEmail;
let empDept;
let empSubmit;

//  HELPER FUNCTION TO RETURN FORM ELEMENTS
const $ = (id) => document.getElementById(id);

// GET THE DOM ELEMENTS
empId       = $('id');
empName     = $('name');
empExt      = $('ext');
empEmail    = $('email');
empDept     = $('department');
empSubmit   = $('submit');

//  EVENT LISTENER THAT HANDLES FORM'S SUBMISSION 
empSubmit.addEventListener("click", (e)  => {
    e.preventDefault();
    console.log(`ID: ${empId.value}`);
    console.log(`Name: ${empName.value}`);
    console.log(`Extension: ${empExt.value}`);
    console.log(`Email: ${empEmail.value}`);
    console.log(`Department: ${empDept.value}`);
});







