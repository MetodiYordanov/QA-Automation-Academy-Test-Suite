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
## Test Case 3: Failed registration - field not matching conditions
- **Description**: Verify that user is not able to register because the filled data does not mach the required conditions.
- **Preconditions**: The registration page is accessible.
- **Steps**:
    1. Navigate to the registration page.
    2. Fill in the registration form by enter data that does not match the conditions (too short username, too long password, etc.)
    3. Submit the registration form.
- **Expected Result**: The user is not able to register due to enter data that does not match the conditions.
## Test Case 4: Failed registration - email already used
- **Description**: Verify that user is not able to register because the filled email was already used.
- **Preconditions**: The registration page is accessible.
- **Steps**:
    1. Navigate to the registration page.
    2. Fill in the registration form by enter email that was already used
    3. Submit the registration form.
- **Expected Result**: The user is not able to register due to enter email that was already used.
## Test Case 5: Failed registration - username already used
- **Description**: Verify that user is not able to register because the filled username was already used.
- **Preconditions**: The registration page is accessible.
- **Steps**:
    1. Navigate to the registration page.
    2. Fill in the registration form by enter username that was already used
    3. Submit the registration form.
- **Expected Result**: The user is not able to register due to enter username that was already used.