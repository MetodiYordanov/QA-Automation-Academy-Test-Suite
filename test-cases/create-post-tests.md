# Create Post Tests
This document outlines the test cases for create post functionality.
## Test Case 1: Successfully created post - public
- **Description**: Verify that a user can successfully create public post.
- **Preconditions**: User is logged in.
- **Steps**:
    1. Navigate to the new post page.
    2. Upload picture and write caption.
    3. Select public toggle button.
    4. Publish the post.
- **Expected Result**: The user created new public post succesfully.
## Test Case 2: Successfully created post - private
- **Description**: Verify that a user can successfully create private post.
- **Preconditions**: User is logged in.
- **Steps**:
    1. Navigate to the new post page.
    2. Upload picture and write caption.
    3. Select private toggle button.
    4. Publish the post.
- **Expected Result**: The user created new private post succesfully.
## Test Case 3: Fail creating post - no image uploaded
- **Description**: Verify that a user cannot create post if image is not uploaded.
- **Preconditions**: User is logged in.
- **Steps**:
    1. Navigate to the new post page.
    2. Write caption.
    3. Publish the post.
- **Expected Result**: The user is not able to create new post without uploading image.
## Test Case 4: Fail creating post - no caption written
- **Description**: Verify that a user cannot create post if caption is not written.
- **Preconditions**: User is logged in.
- **Steps**:
    1. Navigate to the new post page.
    2. Upload image.
    3. Publish the post.
- **Expected Result**: The user is not able to create new post without writing caption.