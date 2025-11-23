# Registration Tests
This document outlines the test cases for user registration functionality.
## Test Case 1: Successful registration
- **Description**: Verify that a user can successfully register with valid data.
- **Preconditions**: The registration page is accessible.
- **Steps**:
    1. Navigate to the registration page.
    2. Fill in the registration form with valid data (username, password, email, etc.).
    3. Submit the registration form.
- **Expected Result**: The user is registered successfully.
## Test Case 2: Failed registration - missed field
- **Description**: Verify that user is not able to register because field in the form was not filled.
- **Preconditions**: The registration page is accessible.
- **Steps**:
    1. Navigate to the registration page.
    2. Fill in the registration form by missing one of the fields (username, password, email, etc.).
    3. Submit the registration form.
- **Expected Result**: The user is not able to register.
## Test Case 3: Failed registration - password not matching conditions
- **Description**: Verify that user is not able to register because the filled password does not mach the required conditions.
- **Preconditions**: The registration page is accessible.
- **Steps**:
    1. Navigate to the registration page.
    2. Fill in the registration form by enter password that does not match the conditions (less than 6 characters, does not contain digit and uppercase letter)
    3. Submit the registration form.
- **Expected Result**: The user is not able to register due to enter password that does not match the conditions.