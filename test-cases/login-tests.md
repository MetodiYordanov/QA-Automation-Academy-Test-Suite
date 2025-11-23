# Login Tests
This document outlines the test cases for user login functionality.
## Test Case 1: Successful login - with username
- **Description**: Verify that a user can successfully login with valid username.
- **Preconditions**: The login page is accessible.
- **Steps**:
    1. Navigate to the login page.
    2. Fill in the login form with valid data by using username.
    3. Submit the login form.
- **Expected Result**: The user is logged in successfully.
## Test Case 2: Successful login - with email
- **Description**: Verify that a user can successfully login with valid email.
- **Preconditions**: The login page is accessible.
- **Steps**:
    1. Navigate to the login page.
    2. Fill in the login form with valid by using email.
    3. Submit the login form.
- **Expected Result**: The user is logged in successfully.
## Test Case 3: Failed login - missed field
- **Description**: Verify that a user is not able to login when one of the fields is missed.
- **Preconditions**: The login page is accessible.
- **Steps**:
    1. Navigate to the login page.
    2. Fill in the login form by missing one of the fields.
    3. Submit the login form.
- **Expected Result**: The user is not able to login.
## Test Case 4: Failed login - wrong credentials
- **Description**: Verify that a user is not able to login with wrong credentials.
- **Preconditions**: The login page is accessible.
- **Steps**:
    1. Navigate to the login page.
    2. Fill in the login form using wrong credentials.
    3. Submit the login form.
- **Expected Result**: The user is not able to login.