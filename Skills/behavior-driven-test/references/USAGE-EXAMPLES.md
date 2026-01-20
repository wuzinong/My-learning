# BDD Skill Usage Examples

This document provides practical, copy-paste examples of how to use the BDD Testing Skill with AI assistants.

---

## 📋 Table of Contents

1. [Converting User Stories to BDD Scenarios](#1-converting-user-stories-to-bdd-scenarios)
2. [Generating Step Definitions](#2-generating-step-definitions)
3. [Creating Data-Driven Tests](#3-creating-data-driven-tests)
4. [API Contract Testing](#4-api-contract-testing)
5. [Optimizing Existing Tests](#5-optimizing-existing-tests)
6. [Detecting Redundancy](#6-detecting-redundancy)
7. [Generating Test Data](#7-generating-test-data)
8. [Error Handling Scenarios](#8-error-handling-scenarios)
9. [Integration with CI/CD](#9-integration-with-cicd)
10. [Team Collaboration](#10-team-collaboration)

---

## 1. Converting User Stories to BDD Scenarios

### Example Request

```
Using the BDD Testing Skill, convert this user story into comprehensive BDD scenarios:

**User Story:**
As an e-commerce customer
I want to filter products by price range
So that I can find products within my budget

**Acceptance Criteria:**
- User can set minimum price
- User can set maximum price
- User can filter with both min and max
- User can clear filters
- Results update immediately after filter is applied
- Message shown when no products match filters

Please generate scenarios covering happy paths, edge cases, and error conditions.
```

### Expected Output

AI will generate complete Gherkin scenarios like:

```gherkin
Feature: Product Price Filtering
  As an e-commerce customer
  I want to filter products by price range
  So that I can find products within my budget

  Background:
    Given the product catalog contains:
      | product        | price   |
      | Product A      | $10.00  |
      | Product B      | $25.00  |
      | Product C      | $50.00  |
      | Product D      | $100.00 |

  Scenario: Filter products with minimum price only
    Given the user is viewing the product list
    When the user sets minimum price to $20
    Then the product list should show 3 products
    And "Product A" should not be visible
    And products "Product B", "Product C", "Product D" should be visible

  Scenario: Filter products with maximum price only
    Given the user is viewing the product list
    When the user sets maximum price to $60
    Then the product list should show 3 products
    And "Product D" should not be visible

  Scenario: Filter products with price range
    Given the user is viewing the product list
    When the user sets minimum price to $20
    And the user sets maximum price to $60
    Then the product list should show 2 products
    And only "Product B" and "Product C" should be visible

  Scenario: Clear filters to show all products
    Given the user has filtered products with price range $20 to $60
    When the user clears the filters
    Then all 4 products should be visible

  Scenario: No products match filter criteria
    Given the user is viewing the product list
    When the user sets minimum price to $200
    Then the product list should be empty
    And a message "No products found in this price range" should be displayed

  Scenario: Invalid price range (min > max)
    Given the user is viewing the product list
    When the user sets minimum price to $100
    And the user sets maximum price to $50
    Then an error message "Minimum price cannot be greater than maximum price" should be displayed
    And the filter should not be applied
```

---

## 2. Generating Step Definitions

### Example Request

```
Using the BDD Testing Skill, generate Cucumber JavaScript step definitions for:

Scenario: User successfully adds item to cart
  Given the user is viewing a product priced at $29.99
  When the user clicks the "Add to Cart" button
  Then the cart should contain 1 item
  And the cart total should be $29.99

Use Playwright for browser automation.
```

### Expected Output

```javascript
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is viewing a product priced at ${price}', async function (price) {
  this.productPrice = price;
  await this.page.goto('/products/123'); // Navigate to product page
  await expect(this.page.locator('.product-price')).toHaveText(price);
});

When('the user clicks the {string} button', async function (buttonText) {
  await this.page.click(`button:has-text("${buttonText}")`);
  // Wait for cart update
  await this.page.waitForTimeout(500);
});

Then('the cart should contain {int} item(s)', async function (itemCount) {
  const cartCounter = await this.page.locator('.cart-counter').textContent();
  expect(parseInt(cartCounter)).toBe(itemCount);
});

Then('the cart total should be ${price}', async function (price) {
  await this.page.click('.cart-icon'); // Open cart
  const total = await this.page.locator('.cart-total').textContent();
  expect(total).toBe(price);
});
```

---

## 3. Creating Data-Driven Tests

### Example Request

```
Using the BDD Testing Skill, create a Scenario Outline for email validation that includes:
- 3 valid email formats
- 3 invalid formats (missing @, missing domain, invalid characters)
- 2 edge cases (very long email, email with special characters)

Format as Gherkin with Examples table.
```

### Expected Output

```gherkin
Feature: Email Validation

  Scenario Outline: Validate email address format
    Given the user is on the registration page
    When the user enters "<email>" in the email field
    And the user clicks outside the field
    Then the validation message should be "<message>"
    And the submit button should be "<button_state>"

    Examples: Valid Emails
      | email                          | message              | button_state |
      | user@example.com               | Valid email          | enabled      |
      | john.doe+tag@company.co.uk     | Valid email          | enabled      |
      | user_123@subdomain.example.com | Valid email          | enabled      |

    Examples: Invalid Emails
      | email                  | message                        | button_state |
      | userexample.com        | Email must contain @           | disabled     |
      | user@                  | Email must have domain         | disabled     |
      | user@domain            | Email must have valid domain   | disabled     |

    Examples: Edge Cases
      | email                                                      | message                          | button_state |
      | verylongemailaddressname123456@verylongdomainname.com      | Valid email                      | enabled      |
      | user!#$%@example.com                                       | Invalid characters in email      | disabled     |
```

---

## 4. API Contract Testing

### Example Request

```
Using the BDD Testing Skill, create BDD scenarios for a REST API that manages user resources:

Endpoints:
- POST /api/users (create user)
- GET /api/users/{id} (get user)
- PUT /api/users/{id} (update user)
- DELETE /api/users/{id} (delete user)

Include request/response validation, status codes, and error scenarios.
```

### Expected Output

```gherkin
Feature: User API Management
  As an API consumer
  I want to manage user resources through a REST API
  So that I can integrate user management into my application

  Scenario: Create new user successfully
    Given the API is available
    When I send a POST request to "/api/users" with:
      | field      | value              |
      | name       | John Doe           |
      | email      | john@example.com   |
      | role       | customer           |
    Then the response status should be 201
    And the response should contain a "userId" field
    And the response should include:
      | field      | value              |
      | name       | John Doe           |
      | email      | john@example.com   |
      | role       | customer           |
    And the "createdAt" timestamp should be recent

  Scenario: Create user with missing required field
    Given the API is available
    When I send a POST request to "/api/users" with:
      | field      | value              |
      | name       | John Doe           |
    Then the response status should be 400
    And the response should contain an error message "email is required"
    And the response should include validation errors

  Scenario: Retrieve existing user
    Given a user exists with ID "12345" and name "Jane Smith"
    When I send a GET request to "/api/users/12345"
    Then the response status should be 200
    And the response should include:
      | field      | value              |
      | userId     | 12345              |
      | name       | Jane Smith         |
    And the response should contain "email" and "role" fields

  Scenario: Retrieve non-existent user
    When I send a GET request to "/api/users/99999"
    Then the response status should be 404
    And the response should contain an error message "User not found"

  Scenario: Update existing user
    Given a user exists with ID "12345"
    When I send a PUT request to "/api/users/12345" with:
      | field      | value                   |
      | name       | Jane Smith Updated      |
    Then the response status should be 200
    And the response should include:
      | field      | value                   |
      | name       | Jane Smith Updated      |
    And the "updatedAt" timestamp should be recent

  Scenario: Delete existing user
    Given a user exists with ID "12345"
    When I send a DELETE request to "/api/users/12345"
    Then the response status should be 204
    And the response body should be empty
    And a subsequent GET to "/api/users/12345" should return 404

  Scenario: Unauthorized access
    Given I do not provide authentication credentials
    When I send a POST request to "/api/users" with valid data
    Then the response status should be 401
    And the response should contain "Authentication required"
```

---

## 5. Optimizing Existing Tests

### Example Request

```
Using the BDD Testing Skill, review and optimize these scenarios:

Scenario: User logs in with valid credentials
  Given the user is on the login page
  When the user enters "john@example.com" in the email field
  And the user enters "password123" in the password field
  And the user clicks the submit button
  Then the user should be redirected to dashboard
  And a welcome message should be shown

Scenario: User logs in with invalid email
  Given the user is on the login page
  When the user enters "invalid-email" in the email field
  And the user enters "password123" in the password field
  And the user clicks the submit button
  Then an error message "Invalid credentials" should be shown

Scenario: User logs in with wrong password
  Given the user is on the login page
  When the user enters "john@example.com" in the email field
  And the user enters "wrong-password" in the password field
  And the user clicks the submit button
  Then an error message "Invalid credentials" should be shown

Suggest improvements for clarity, reusability, and following BDD best practices.
```

### Expected Output

AI will suggest optimizations like:

```gherkin
Feature: User Authentication

  Background:
    Given the user is on the login page

  Scenario: Successful login with valid credentials
    When the user logs in with email "john@example.com" and password "password123"
    Then the user should be redirected to the dashboard
    And a welcome message should be displayed

  Scenario Outline: Failed login with invalid credentials
    When the user logs in with email "<email>" and password "<password>"
    Then an error message "<error>" should be displayed
    And the user should remain on the login page

    Examples:
      | email                | password         | error                |
      | invalid-email        | password123      | Invalid credentials  |
      | john@example.com     | wrong-password   | Invalid credentials  |
      | nonexistent@test.com | password123      | Invalid credentials  |
```

**Improvements Made:**
1. ✅ Used Background to eliminate repeated "Given the user is on the login page"
2. ✅ Created reusable step "user logs in with email and password"
3. ✅ Consolidated error scenarios into Scenario Outline
4. ✅ More concise and maintainable
5. ✅ Reduced from 3 scenarios to 2 (with outline covering multiple cases)

---

## 6. Detecting Redundancy

### Example Request

```
Using the BDD Testing Skill, analyze these scenarios for redundancy:

Scenario: Add first item to empty cart
  Given the cart is empty
  When the user adds "Product A" to cart
  Then the cart should have 1 item

Scenario: Add item to cart
  Given the user is viewing "Product A"
  When the user adds it to cart
  Then the cart should contain "Product A"

Scenario: Verify cart count after adding item
  Given the cart is empty
  When the user adds an item
  Then the cart count should increase by 1

Identify overlaps and suggest consolidation.
```

### Expected Output

**Analysis:**
All three scenarios test essentially the same behavior: adding an item to the cart. They have significant overlap.

**Recommended Consolidation:**

```gherkin
Scenario: Add item to empty cart
  Given the cart is empty
  When the user adds "Product A" priced at $29.99 to the cart
  Then the cart should contain 1 item
  And the item should be "Product A"
  And the cart total should be $29.99
  And the cart icon should show badge "1"

Scenario: Add multiple items to cart
  Given the cart contains "Product A"
  When the user adds "Product B" to the cart
  Then the cart should contain 2 items
  And the cart should include both "Product A" and "Product B"
```

**Rationale:**
- First consolidated scenario covers: empty cart → adding item → cart count → cart content
- Second scenario covers the distinct behavior of adding to non-empty cart
- Reduced from 3 redundant scenarios to 2 comprehensive scenarios
- Each scenario now has clear, distinct purpose

---

## 7. Generating Test Data

### Example Request

```
Using the BDD Testing Skill, generate comprehensive test data for password strength validation:

Requirements:
- Minimum 8 characters
- Must contain uppercase letter
- Must contain lowercase letter
- Must contain number
- Must contain special character (!@#$%^&*)

Create Scenario Outline with:
- 3 valid strong passwords
- Test each requirement violation separately
- 2 edge cases
```

### Expected Output

```gherkin
Feature: Password Strength Validation

  Scenario Outline: Validate password strength requirements
    Given the user is creating a new account
    When the user enters "<password>" as their password
    Then the validation result should be "<result>"
    And the validation message should be "<message>"

    Examples: Valid Strong Passwords
      | password          | result  | message                          |
      | P@ssw0rd123       | valid   | Password meets all requirements  |
      | MyS3cure!Pass     | valid   | Password meets all requirements  |
      | C0mpl3x&Strong    | valid   | Password meets all requirements  |

    Examples: Too Short
      | password  | result  | message                                    |
      | P@ss1     | invalid | Password must be at least 8 characters     |
      | Ab1!      | invalid | Password must be at least 8 characters     |

    Examples: Missing Uppercase
      | password     | result  | message                                   |
      | password123! | invalid | Password must contain uppercase letter    |
      | myp@ss123    | invalid | Password must contain uppercase letter    |

    Examples: Missing Lowercase
      | password     | result  | message                                   |
      | PASSWORD123! | invalid | Password must contain lowercase letter    |
      | MYP@SS123    | invalid | Password must contain lowercase letter    |

    Examples: Missing Number
      | password     | result  | message                                   |
      | Password!    | invalid | Password must contain a number            |
      | MyPass@word  | invalid | Password must contain a number            |

    Examples: Missing Special Character
      | password     | result  | message                                   |
      | Password123  | invalid | Password must contain special character   |
      | MyPass1word  | invalid | Password must contain special character   |

    Examples: Edge Cases
      | password                              | result  | message                          |
      | P@ssw0rdP@ssw0rdP@ssw0rdP@ssw0rd123  | valid   | Password meets all requirements  |
      | 12345678Aa!                           | valid   | Password meets all requirements  |
```

---

## 8. Error Handling Scenarios

### Example Request

```
Using the BDD Testing Skill, create error handling scenarios for a payment processing system:

Include scenarios for:
- Insufficient funds
- Expired credit card
- Invalid card number
- Network timeout
- Payment gateway unavailable
- Duplicate transaction prevention

Focus on user experience and system recovery.
```

### Expected Output

```gherkin
Feature: Payment Processing Error Handling
  As a customer
  I want clear error messages when payment fails
  So that I can understand and resolve the issue

  Scenario: Handle insufficient funds
    Given the user has selected items totaling $100
    And the user's payment method has available balance of $50
    When the user attempts to complete the purchase
    Then the payment should be declined
    And an error message "Insufficient funds. Please use a different payment method." should be displayed
    And the user should remain on the payment page
    And the order should remain in pending state
    And the user should be able to try a different payment method

  Scenario: Handle expired credit card
    Given the user has selected items totaling $100
    And the user's credit card expired on "12/2025"
    And the current date is "01/2026"
    When the user attempts to complete the purchase
    Then the payment should be declined
    And an error message "Your credit card has expired. Please update your payment information." should be displayed
    And a link to update payment methods should be provided
    And the cart items should be preserved

  Scenario: Handle invalid card number
    Given the user is on the payment page
    When the user enters credit card number "1234-5678-9012-3456"
    And the user clicks "Pay Now"
    Then the payment should be declined immediately
    And an error message "Invalid card number. Please check and try again." should be displayed
    And the card number field should be highlighted
    And no charge should be attempted

  Scenario: Handle payment gateway timeout
    Given the user has submitted valid payment information
    And the payment gateway is slow to respond
    When the gateway response exceeds 30 seconds
    Then the user should see a message "Payment processing is taking longer than expected"
    And a spinner should continue to show
    And the system should wait up to 60 seconds total
    And if no response after 60 seconds, display "Payment could not be completed. Please try again."
    And the payment should be marked as pending for manual review

  Scenario: Handle payment gateway unavailable
    Given the user attempts to complete a purchase
    And the payment gateway is unavailable
    When the payment is submitted
    Then an error message "Our payment system is temporarily unavailable. Please try again in a few minutes." should be displayed
    And the order should be saved as "payment pending"
    And the user should receive an email with order details
    And an option to "Notify me when payment is available" should be shown

  Scenario: Prevent duplicate transaction
    Given the user has successfully completed a payment
    And the confirmation page is displayed
    When the user clicks the browser back button
    And attempts to submit the payment again
    Then a warning "This order has already been processed" should be displayed
    And no second charge should be made
    And the user should be redirected to their order history
    And the original order details should be shown
```

---

## 9. Integration with CI/CD

### Example Request

```
Using the BDD Testing Skill, provide guidance on integrating BDD tests into our CI/CD pipeline:

Current setup:
- GitHub for source control
- GitHub Actions for CI/CD
- Cucumber with JavaScript
- Tests take 15 minutes to run all scenarios

Help me:
1. Set up parallel execution
2. Run only critical tests on every PR
3. Run full suite nightly
4. Generate reports
5. Handle flaky tests
```

### Expected Output

**CI/CD Integration Strategy:**

```yaml
# .github/workflows/bdd-tests.yml

name: BDD Tests

on:
  pull_request:
    branches: [ main, develop ]
  push:
    branches: [ main ]
  schedule:
    - cron: '0 2 * * *'  # Nightly at 2 AM

jobs:
  smoke-tests:
    name: Smoke Tests (PR)
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run Smoke Tests
        run: npm run test:bdd -- --tags "@smoke"
        
      - name: Generate Report
        if: always()
        run: npm run test:report
        
      - name: Upload Report
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: smoke-test-report
          path: reports/

  critical-tests:
    name: Critical Tests (PR)
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    
    strategy:
      matrix:
        shard: [1, 2, 3, 4]  # Parallel execution across 4 runners
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run Critical Tests (Shard ${{ matrix.shard }}/4)
        run: npm run test:bdd -- --tags "@critical" --parallel ${{ matrix.shard }} --total-shards 4
        
      - name: Upload Results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: critical-tests-shard-${{ matrix.shard }}
          path: reports/

  full-regression:
    name: Full Regression Suite (Nightly)
    runs-on: ubuntu-latest
    if: github.event_name == 'schedule' || github.event_name == 'push'
    
    strategy:
      matrix:
        shard: [1, 2, 3, 4, 5, 6]  # More parallel runners for full suite
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run All Tests (Shard ${{ matrix.shard }}/6)
        run: npm run test:bdd -- --parallel ${{ matrix.shard }} --total-shards 6
        
      - name: Upload Results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: regression-shard-${{ matrix.shard }}
          path: reports/

  report-aggregation:
    name: Aggregate & Publish Reports
    runs-on: ubuntu-latest
    needs: [smoke-tests, critical-tests]
    if: always()
    
    steps:
      - uses: actions/download-artifact@v3
        
      - name: Merge Reports
        run: npm run test:merge-reports
        
      - name: Publish Report
        uses: actions/upload-artifact@v3
        with:
          name: combined-test-report
          path: reports/combined/
          
      - name: Comment PR with Results
        if: github.event_name == 'pull_request'
        uses: actions/github-script@v6
        with:
          script: |
            const report = require('./reports/combined/summary.json');
            const comment = `## BDD Test Results
            
            - ✅ Passed: ${report.passed}
            - ❌ Failed: ${report.failed}
            - ⏭️ Skipped: ${report.skipped}
            - ⏱️ Duration: ${report.duration}
            
            [View Full Report](${report.reportUrl})`;
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            });

  retry-flaky:
    name: Retry Flaky Tests
    runs-on: ubuntu-latest
    needs: [critical-tests]
    if: failure()
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Retry Failed Tests
        run: npm run test:bdd -- --tags "@flaky" --retry 3
```

**package.json scripts:**

```json
{
  "scripts": {
    "test:bdd": "cucumber-js",
    "test:bdd:smoke": "cucumber-js --tags '@smoke'",
    "test:bdd:critical": "cucumber-js --tags '@critical'",
    "test:bdd:parallel": "cucumber-js --parallel",
    "test:report": "node scripts/generate-report.js",
    "test:merge-reports": "node scripts/merge-reports.js"
  }
}
```

**Tagging Strategy:**

```gherkin
@smoke @critical
Scenario: User can log in
  # Core functionality that must always work

@critical @regression
Scenario: User can complete checkout
  # Important but not smoke test

@regression
Scenario: User can filter products by category
  # Full regression coverage

@flaky
Scenario: User receives email notification
  # Known to be flaky due to external dependency
```

---

## 10. Team Collaboration

### Example Request

```
Using the BDD Testing Skill, help me set up a collaborative BDD process for my team:

Team:
- 3 developers
- 1 QA engineer
- 1 product manager

Challenges:
- Scenarios often written after code is complete
- Product manager doesn't review scenarios
- Duplicate steps across different features
- No shared vocabulary

Provide a process and templates for effective collaboration.
```

### Expected Output

**Collaborative BDD Process:**

### Phase 1: Refinement Meeting (Week N)

**Participants:** Product Manager, Developers, QA  
**Duration:** 1-2 hours

**Agenda:**
1. Product Manager presents user story
2. Team discusses acceptance criteria together
3. **Write first draft scenarios collaboratively** (this is key!)
4. Identify questions and edge cases
5. Agree on shared terminology

**Template for Refinement:**

```
USER STORY:
As a [role]
I want to [action]
So that [business value]

ACCEPTANCE CRITERIA:
1. [AC 1]
2. [AC 2]
3. [AC 3]

DRAFT SCENARIOS (Written During Meeting):

Feature: [Feature Name]
  
  Scenario: [Happy path from AC 1]
    Given [precondition]
    When [action]
    Then [outcome]
  
  Scenario: [Error case from AC 2]
    Given [error condition]
    When [action]
    Then [error handling]
  
  Scenario: [Edge case identified in discussion]
    Given [edge case setup]
    When [action]
    Then [expected behavior]

QUESTIONS TO RESOLVE:
- [ ] Question 1
- [ ] Question 2

SHARED VOCABULARY:
- Term 1: Definition
- Term 2: Definition
```

### Phase 2: Scenario Review (Week N)

**Owner:** QA Engineer  
**Reviewers:** Product Manager, Lead Developer

**Checklist:**
```
Scenario Review Checklist:

Business Clarity:
[ ] Can product manager understand without technical knowledge?
[ ] Does each scenario map to an acceptance criterion?
[ ] Are business rules clearly expressed?
[ ] Is the value of each scenario clear?

Technical Feasibility:
[ ] Can this be automated?
[ ] Are preconditions achievable in test environment?
[ ] Do we have necessary test data?
[ ] Are external dependencies identified?

Best Practices:
[ ] Follows Given-When-Then structure?
[ ] Scenarios are independent?
[ ] Uses shared vocabulary from glossary?
[ ] No implementation details?
[ ] 3-5 steps per scenario?

Completeness:
[ ] Happy path covered?
[ ] Error cases covered?
[ ] Edge cases covered?
[ ] All acceptance criteria have scenarios?
```

### Phase 3: Implementation (Week N+1)

**Owner:** Developers  
**Process:**

```gherkin
# Step 1: Run scenarios (they should fail - RED phase)
npm run test:bdd

# Step 2: Implement step definitions
# - Check shared step library first
# - Reuse existing steps where possible
# - Add new steps to shared library

# Step 3: Implement feature code

# Step 4: Run scenarios again (they should pass - GREEN phase)
npm run test:bdd

# Step 5: Refactor if needed

# Step 6: Commit with link to user story
git commit -m "feat: implement user story US-123

BDD scenarios: 
- User can filter products
- User can clear filters
- No products found message

See feature file: features/product-filtering.feature"
```

### Phase 4: Definition of Done

```
Definition of Done Checklist:

Code Complete:
[ ] Feature implemented
[ ] Unit tests written
[ ] Code reviewed

BDD Complete:
[ ] All scenarios from refinement are passing
[ ] Scenarios reviewed by product manager
[ ] Step definitions added to shared library
[ ] Feature file documents current behavior

Ready for Release:
[ ] BDD tests passing in CI/CD
[ ] Acceptance criteria verified
[ ] No regressions in other scenarios
[ ] Documentation updated (if needed)
```

### Shared Step Library Structure

```
project/
├── features/
│   ├── authentication/
│   │   └── login.feature
│   ├── shopping/
│   │   ├── cart.feature
│   │   └── checkout.feature
│   └── admin/
│       └── users.feature
├── step_definitions/
│   ├── shared/
│   │   ├── navigation_steps.js     # Reusable navigation
│   │   ├── form_steps.js           # Reusable form interactions
│   │   ├── assertion_steps.js      # Common assertions
│   │   └── auth_steps.js           # Authentication steps
│   ├── domain/
│   │   ├── cart_steps.js           # Cart-specific steps
│   │   ├── product_steps.js        # Product-specific steps
│   │   └── user_steps.js           # User-specific steps
│   └── README.md                    # Step library documentation
└── support/
    ├── hooks.js
    ├── world.js
    └── glossary.md                  # Shared vocabulary
```

### Shared Vocabulary Document (glossary.md)

```markdown
# BDD Shared Vocabulary

## Authentication & Users
- **User**: A person with an account in the system
- **Customer**: A user with the "customer" role
- **Admin**: A user with the "admin" role
- **Log in**: Process of entering credentials and accessing account
- **Log out**: Process of ending session

## Shopping & Products
- **Product**: An item available for purchase
- **Cart**: Collection of products user intends to purchase
- **Add to cart**: Action of placing product in cart
- **Checkout**: Process of completing a purchase
- **Order**: A completed purchase with payment

## Consistent Phrasing
- Use: "the user clicks the 'Submit' button" (NOT "clicks Submit button" or "presses Submit")
- Use: "should be displayed" (NOT "should appear" or "should show up")
- Use: "the user enters" (NOT "the user types" or "the user inputs")
```

### Weekly Metrics Review

```
Team BDD Metrics Dashboard:

Coverage:
- Stories with BDD scenarios: 47/50 (94%) ✅
- Acceptance criteria covered: 123/130 (95%) ✅

Quality:
- Scenarios per feature: 4.2 avg ✅
- Steps per scenario: 3.8 avg ✅
- Reusability: 4.1 scenarios per step ✅

Execution:
- Test pass rate: 97% ✅
- Execution time: 8 minutes ⚠️ (target: <5 min)
- Failed scenarios this week: 3

Collaboration:
- PM reviewed scenarios: 45/47 (96%) ✅
- Scenarios written before code: 42/47 (89%) ⚠️
- Team BDD proficiency: 7/10 avg

Actions:
- [ ] Optimize 2 slowest scenarios
- [ ] Reminder: write scenarios in refinement, not after coding
```

---

## 💡 Tips for Using These Examples

1. **Copy-Paste Ready**: All examples can be copied and pasted directly into conversations with AI assistants

2. **Customize Context**: Replace placeholder values with your actual:
   - User stories and acceptance criteria
   - Domain terminology
   - Framework preferences
   - Team structure

3. **Iterate**: Start with the AI's first output, then refine by asking follow-up questions

4. **Combine Examples**: Mix and match requests (e.g., "generate scenarios AND step definitions")

5. **Reference the Skill**: Always mention "Using the BDD Testing Skill" to ensure the AI loads the correct context

6. **Be Specific**: The more details you provide, the better the AI's output will match your needs

---

**Version:** 1.1.0  
**Last Updated:** January 20, 2026
