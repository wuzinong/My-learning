# BDD Scenarios - Ready-to-Use Examples

This file contains reusable BDD scenario templates for common use cases across different domains.

## 1. E-COMMERCE DOMAIN

### Feature: Product Catalog
```gherkin
Feature: Product Catalog Browse
  As a customer
  I want to search and filter products
  So that I can find items I'm interested in

  Scenario: Search for products by keyword
    Given the product catalog contains 100 products
    When the user searches for "laptop"
    Then the results should show only laptop products
    And the product count should be greater than 0

  Scenario Outline: Filter products by price range
    Given the user is viewing the product list
    When the user sets the price filter from $<min> to $<max>
    Then only products within the price range should be displayed
    
    Examples:
      | min  | max   |
      | 100  | 500   |
      | 1000 | 2000  |

  Scenario: View product details
    Given the user has found a product
    When the user clicks on the product
    Then the product details page should display
    And the product information should be complete
```

### Feature: Shopping Cart
```gherkin
Feature: Shopping Cart Management
  As a customer
  I want to manage items in my shopping cart
  So that I can prepare my purchase

  Scenario: Add item to cart
    Given the user is viewing a product priced at $49.99
    When the user adds the product to the cart
    Then the cart should contain 1 item
    And the cart total should be $49.99

  Scenario: Update item quantity
    Given the cart contains 1 item
    When the user changes the quantity to 3
    Then the cart should contain 3 items
    And the cart total should be updated accordingly

  Scenario: Remove item from cart
    Given the cart contains 2 items totaling $99.98
    When the user removes 1 item
    Then the cart should contain 1 item
    And the cart total should be recalculated

  Scenario: View empty cart
    Given the user's shopping cart is empty
    When the user views the cart
    Then a message should indicate the cart is empty
    And the user should see product recommendations
```

### Feature: Checkout Process
```gherkin
Feature: Checkout and Payment
  As a customer
  I want to complete my purchase securely
  So that my order is confirmed

  Scenario: Complete checkout successfully
    Given the user has items in their cart totaling $99.99
    And the user is logged in
    When the user proceeds to checkout
    And the user enters valid shipping address
    And the user selects a shipping method
    Then the order review should display correct totals
    And the user should be able to proceed to payment

  Scenario: Apply coupon code
    Given the user is on the checkout page
    And the user has a valid coupon code
    When the user enters the coupon code
    Then the discount should be applied
    And the total should be reduced by the coupon amount

  Scenario: Payment failure handling
    Given the user is on the payment page
    When the user enters an invalid credit card
    And the payment is processed
    Then an error message should be displayed
    And the user should be able to retry payment
```

## 2. HEALTHCARE DOMAIN

### Feature: Patient Appointment Booking
```gherkin
Feature: Appointment Booking System
  As a patient
  I want to book appointments with available doctors
  So that I can receive medical care at a convenient time

  Scenario: View available appointment slots
    Given the patient is logged into the system
    When the patient searches for appointments with Dr. Smith
    Then available appointment slots should be displayed
    And each slot should show the date and time

  Scenario: Successfully book an appointment
    Given the patient is viewing available appointments
    And Dr. Smith has availability on January 25, 2026 at 2:00 PM
    When the patient books the appointment
    Then a confirmation message should be displayed
    And a confirmation email should be sent to the patient
    And the appointment should appear in the patient's calendar

  Scenario: Cancel appointment
    Given the patient has a booked appointment
    When the patient requests to cancel the appointment
    Then the appointment should be marked as cancelled
    And the appointment slot should become available again
    And a cancellation confirmation should be sent
```

### Feature: Medical Records
```gherkin
Feature: Medical Records Management
  As a patient
  I want to access my medical records
  So that I can stay informed about my health

  Scenario: View medical history
    Given the patient is logged in
    When the patient accesses their medical records
    Then a list of previous visits should be displayed
    And each record should show the date, doctor, and diagnosis

  Scenario: Download medical records
    Given the patient is viewing their medical records
    When the patient requests to download the records
    Then the records should be prepared in PDF format
    And a download link should be provided

  Scenario: Share records with another provider
    Given the patient is viewing their records
    When the patient selects records to share
    And the patient enters another provider's email
    Then the provider should receive a secure link
    And the patient should receive a confirmation
```

## 3. BANKING DOMAIN

### Feature: Money Transfer
```gherkin
Feature: Account-to-Account Transfer
  As a customer
  I want to transfer money between my accounts
  So that I can manage my funds efficiently

  Scenario: Transfer funds between own accounts
    Given the user has Account A with balance $1,000
    And the user has Account B with balance $500
    When the user initiates a transfer of $300 from Account A to Account B
    Then Account A should have balance $700
    And Account B should have balance $800
    And a transaction record should be created

  Scenario: Transfer to external account
    Given the user has verified an external account
    When the user initiates a transfer of $200
    And the user confirms the transfer
    Then the transfer should be processed
    And a confirmation notification should be sent

  Scenario: Decline transfer for insufficient funds
    Given the user's account has balance $100
    When the user attempts to transfer $200
    Then the transfer should be declined
    And an error message should explain insufficient funds
```

### Feature: Loan Application
```gherkin
Feature: Loan Application Process
  As a customer
  I want to apply for a loan
  So that I can access funds for my needs

  Scenario: Submit loan application
    Given the user is eligible for a loan
    When the user submits a loan application
    And the user enters the loan amount of $10,000
    And the user selects a loan term of 60 months
    Then the application should be received
    And the user should receive a reference number

  Scenario: Check application status
    Given the user has submitted a loan application
    When the user checks the application status
    Then the current status should be displayed
    And an estimated decision date should be shown

  Scenario: Receive loan approval
    Given the user's loan application is approved
    When the user accepts the loan terms
    Then the loan amount should be transferred to the account
    And loan documents should be sent
```

## 4. SAAS / USER AUTHENTICATION

### Feature: User Registration
```gherkin
Feature: User Registration
  As a new user
  I want to create an account
  So that I can access the application

  Scenario: Successful registration with valid data
    Given the user is on the registration page
    When the user enters a valid email address
    And the user enters a strong password
    And the user confirms the password
    And the user accepts the terms and conditions
    Then the account should be created
    And the user should receive a confirmation email

  Scenario Outline: Validate email format
    Given the user is on the registration page
    When the user enters "<email>" as the email address
    Then the validation result should be "<result>"
    
    Examples:
      | email                    | result   |
      | valid@example.com        | valid    |
      | invalid.email@           | invalid  |
      | user@domain.co.uk        | valid    |
      | @example.com             | invalid  |

  Scenario: Password strength validation
    Given the user is entering a password
    When the user enters a password with only lowercase letters
    Then the system should indicate the password is weak
    And suggestions for a stronger password should be shown
```

### Feature: User Login
```gherkin
Feature: User Authentication
  As a user
  I want to log into my account
  So that I can access my data

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters their email address
    And the user enters their password
    And the user clicks the login button
    Then the user should be authenticated
    And the user should be redirected to the dashboard

  Scenario: Login with incorrect password
    Given the user is on the login page
    When the user enters their email address
    And the user enters an incorrect password
    Then an error message should be displayed
    And the user should remain on the login page

  Scenario: Account lockout after failed attempts
    Given the user has failed to login 5 times
    When the user attempts to login again
    Then the account should be temporarily locked
    And the user should see a message to reset their password
```

### Feature: Password Reset
```gherkin
Feature: Password Reset
  As a user
  I want to reset my forgotten password
  So that I can regain access to my account

  Scenario: Reset password via email
    Given the user has forgotten their password
    When the user requests a password reset
    And the user enters their email address
    Then a reset link should be sent to their email
    And the link should be valid for 24 hours

  Scenario: Complete password reset
    Given the user has received a password reset link
    When the user clicks the reset link
    And the user enters a new password
    And the user confirms the new password
    Then the password should be updated
    And the user should be able to login with new password
```

## 5. API TESTING

### Feature: REST API CRUD Operations
```gherkin
Feature: User API
  As an API consumer
  I want to perform CRUD operations on users
  So that I can manage user data

  Scenario: Create a new user
    Given the API server is running
    When a POST request is sent to /api/users
    And the request body contains valid user data
    Then the response status code should be 201
    And the response should contain the created user with an ID

  Scenario: Retrieve user by ID
    Given a user exists with id "123"
    When a GET request is sent to /api/users/123
    Then the response status code should be 200
    And the response should contain the user details

  Scenario: Update user information
    Given a user exists with id "123"
    When a PUT request is sent to /api/users/123
    And the request body contains updated user data
    Then the response status code should be 200
    And the user information should be updated

  Scenario: Delete user
    Given a user exists with id "123"
    When a DELETE request is sent to /api/users/123
    Then the response status code should be 204
    And the user should no longer exist

  Scenario: Handle not found errors
    Given a user with id "999" does not exist
    When a GET request is sent to /api/users/999
    Then the response status code should be 404
    And the response should contain an error message
```

## 6. DATA VALIDATION

### Feature: Form Validation
```gherkin
Feature: User Input Validation
  As a system
  I want to validate user input
  So that data integrity is maintained

  Scenario Outline: Validate phone number format
    Given the user enters "<phone>" in the phone field
    When the form validation runs
    Then the validation result should be "<result>"
    
    Examples:
      | phone         | result  |
      | 555-123-4567  | valid   |
      | 5551234567    | valid   |
      | 123           | invalid |
      | abc-def-ghij  | invalid |

  Scenario: Validate required fields
    Given the user is on the registration form
    When the user submits the form without entering required fields
    Then error messages should be displayed
    And the submission should be prevented

  Scenario: Real-time validation feedback
    Given the user is entering an email address
    When the user types an invalid email
    Then visual feedback should indicate the error
    And the user should see a suggestion for correction
```

## 7. NOTIFICATIONS AND ALERTS

### Feature: Email Notifications
```gherkin
Feature: Order Notification System
  As a customer
  I want to receive notifications about my orders
  So that I stay informed

  Scenario: Send order confirmation email
    Given the user has completed a purchase
    When the order is processed successfully
    Then an order confirmation email should be sent
    And the email should contain the order details

  Scenario: Send shipping notification
    Given an order is ready to ship
    When the order is dispatched
    Then a shipping notification should be sent
    And the email should include tracking information

  Scenario: Send delivery confirmation
    Given an order has been shipped
    When the order is delivered
    Then a delivery confirmation email should be sent
```

## 8. SEARCH AND FILTERING

### Feature: Advanced Search
```gherkin
Feature: Product Search with Filters
  As a customer
  I want to search and filter products
  So that I can find exactly what I need

  Scenario: Search by multiple criteria
    Given the user is on the search page
    When the user enters "smartphone" in the search box
    And the user filters by price range $200-$800
    And the user filters by brand "Samsung"
    Then the results should show only Samsung smartphones in the price range

  Scenario: Save search preferences
    Given the user has applied search filters
    When the user saves the search
    Then the search should be saved with the applied filters
    And the user should be able to access it later
```

---

## How to Use These Examples

1. **Copy and Modify**: Use these scenarios as templates for your own features
2. **Combine Multiple**: Mix scenarios from different domains to match your needs
3. **Extend**: Add additional scenarios for edge cases specific to your system
4. **Reference**: Use as examples when writing new scenarios
5. **Train Teams**: Share with your team to establish scenario writing standards

## Tips for Customization

- Replace generic terms with your actual system/domain terminology
- Add specific data values relevant to your business
- Include edge cases and error scenarios
- Organize scenarios by business workflow
- Use tags to categorize scenarios (e.g., @critical, @regression, @smoke)

---

**Remember**: These are templates. Always customize them to match your specific requirements, system behavior, and business rules!
