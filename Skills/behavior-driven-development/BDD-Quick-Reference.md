# BDD Quick Reference Card

## Essential Gherkin Keywords

| Keyword | Purpose | Example |
|---------|---------|---------|
| `Feature` | Describes a business capability | `Feature: Shopping Cart` |
| `Scenario` | Single behavior test case | `Scenario: Add item to cart` |
| `Given` | Setup/precondition | `Given the user is logged in` |
| `When` | Action/trigger | `When the user clicks add button` |
| `Then` | Expected outcome | `Then the item should be in cart` |
| `And` | Additional step (any type) | `And the total should update` |
| `But` | Negative assertion | `But the price should not change` |
| `Scenario Outline` | Parameterized scenario | `Scenario Outline: Login with <user>` |
| `Examples` | Test data for outline | `Examples:` with data table |
| `Background` | Shared setup for all scenarios | Setup steps run before each scenario |
| `@tag` | Organize/filter tests | `@smoke`, `@critical`, `@wip` |

## Given-When-Then Structure

```
Scenario: [Clear behavior description]
  Given [initial context]        ← State BEFORE action
    And [additional context]     ← More setup if needed
  When [action taken]            ← What the user DOES
    And [additional action]      ← More actions if needed
  Then [expected outcome]        ← What SHOULD happen
    And [additional assertion]   ← More verifications if needed
```

## Scenario Outline Template

```gherkin
Scenario Outline: [Generic description with variables]
  Given [context with <variable>]
  When [action with <variable>]
  Then [outcome is <expected>]
  
  Examples:
    | variable      | expected   |
    | first_value   | first_result  |
    | second_value  | second_result |
    | third_value   | third_result  |
```

## Common Scenario Patterns

### Pattern 1: Happy Path (Success Case)
```gherkin
Scenario: Successful operation
  Given [valid preconditions]
  When [valid action]
  Then [success outcome]
```

### Pattern 2: Error Handling
```gherkin
Scenario: Handle error condition
  Given [setup]
  When [invalid action]
  Then [error message appears]
  And [system remains stable]
```

### Pattern 3: State Change
```gherkin
Scenario: State transition
  Given [initial state]
  When [trigger action]
  Then [new state achieved]
```

### Pattern 4: Business Rule
```gherkin
Scenario: Apply business rule
  Given [preconditions met]
  When [action taken]
  Then [business rule applied]
  And [expected outcome]
```

## Step Definition Syntax by Language

### JavaScript (Cucumber)
```javascript
const { Given, When, Then } = require('@cucumber/cucumber');

Given('user has {int} items', (count) => { /* ... */ });
When('user clicks button', () => { /* ... */ });
Then('result should be {string}', (expected) => { /* ... */ });
```

### Python (Behave)
```python
@given('user has {count:d} items')
def step_user_has_items(context, count):
    # implementation

@when('user clicks button')
def step_click_button(context):
    # implementation

@then('result should be {expected}')
def step_verify_result(context, expected):
    # implementation
```

### C# (SpecFlow)
```csharp
[Given(@"user has (\d+) items")]
public void GivenUserHasItems(int count) { }

[When(@"user clicks button")]
public void WhenUserClicksButton() { }

[Then(@"result should be (.*)")]
public void ThenResultShouldBe(string expected) { }
```

## Best Practices at a Glance

✅ **DO**
- Use active voice and third person
- Keep scenarios focused (1 behavior per scenario)
- Make scenarios independent
- Reuse steps across scenarios
- Use concrete values and examples
- Organize by business capability
- Keep scenarios concise (3-5 steps typical)
- Review with business stakeholders

❌ **DON'T**
- Include technical implementation details
- Mix multiple behaviors in one scenario
- Use technical jargon in scenarios
- Create dependencies between scenarios
- Write overly broad scenarios
- Test UI instead of behavior
- Duplicate steps
- Make scenarios too long or complex

## Common Tags and Usage

| Tag | Purpose | Example |
|-----|---------|---------|
| `@smoke` | Quick sanity tests | `@smoke` |
| `@critical` | High priority tests | `@critical` |
| `@regression` | Detect regressions | `@regression` |
| `@wip` | Work in progress | `@wip` |
| `@skip` | Skip test execution | `@skip` |
| `@slow` | Long-running tests | `@slow` |
| `@api` | API-related tests | `@api` |
| `@ui` | UI-related tests | `@ui` |
| `@auth` | Authentication-related | `@auth` |

## File Organization Structure

```
project/
├── features/
│   ├── user_management/
│   │   ├── authentication.feature
│   │   ├── profile.feature
│   │   └── registration.feature
│   ├── shopping/
│   │   ├── cart.feature
│   │   ├── checkout.feature
│   │   └── products.feature
│   └── admin/
│       └── dashboard.feature
├── step_definitions/
│   ├── auth_steps.js
│   ├── cart_steps.js
│   └── user_steps.js
├── support/
│   ├── hooks.js
│   └── helpers.js
└── package.json
```

## Common Step Definition Patterns

### Data Setup
```gherkin
Given the user exists with the following details:
  | field    | value           |
  | email    | user@example.com |
  | name     | John Doe        |
  | role     | admin           |
```

### Complex Data
```gherkin
Given the user enters the following information:
  """
  Name: John Smith
  Email: john@example.com
  Address: 123 Main St
  """
```

### Parameterized Step
```gherkin
When the user "<action>" on the "<element>" "<target>"
  | action | element | target    |
  | clicks | button  | Submit    |
  | hovers | link    | Dashboard |
```

## Running Scenarios

### Command Line Examples

```bash
# Run all scenarios
cucumber

# Run specific feature file
cucumber features/login.feature

# Run scenarios with tag
cucumber --tags @smoke

# Run specific scenario
cucumber features/login.feature:5

# Run with parallel execution
cucumber --parallel 4

# Generate reports
cucumber --format html:report.html
```

## Anti-Pattern Examples

### ❌ Too Technical
```gherkin
Scenario: Login
  When the user clicks #login-btn
  And enters "admin" in #username-field
  And presses keyCode 9
```

### ✅ Business-Focused
```gherkin
Scenario: User successfully logs in
  When the user enters valid credentials
  Then the user should access their dashboard
```

### ❌ Multiple Behaviors
```gherkin
Scenario: User signup and purchase
  When the user signs up
  And creates a payment method
  And makes a purchase
```

### ✅ Single Behavior
```gherkin
Scenario: User completes purchase
  Given the user has payment method
  When the user completes checkout
  Then the order should be confirmed
```

## Assertions Common Patterns

```gherkin
# Presence/Absence
Then the success message should be displayed
Then the error should not appear

# Equality
Then the total should be $99.99
Then the status should be "completed"

# Visibility
Then the user should see the dashboard
Then the confirmation should not be visible

# Navigation
Then the user should be redirected to home
Then the page should load

# State
Then the account should be locked
Then the item should be out of stock

# Content
Then the email should contain the order details
Then the response should include the user ID
```

## Feature File Template

```gherkin
Feature: [Feature Title]
  As a [user type]
  I want to [action]
  So that [business value]

  Background:
    Given [shared setup]
    And [additional setup]

  Scenario: [Specific behavior]
    Given [precondition]
    When [action]
    Then [outcome]

  Scenario: [Alternative behavior]
    Given [different precondition]
    When [similar action]
    Then [different outcome]

  Scenario Outline: [Parameterized behavior]
    Given [context with <param>]
    When [action with <param>]
    Then [outcome is <result>]

    Examples:
      | param  | result |
      | value1 | res1   |
      | value2 | res2   |
```

## Useful Resources

- **Cucumber Official Docs**: https://cucumber.io/docs
- **Gherkin Reference**: https://cucumber.io/docs/gherkin/
- **BDD Best Practices**: Community guidelines and patterns
- **Framework Documentation**: 
  - SpecFlow: https://specflow.org/
  - Behave: https://behave.readthedocs.io/
  - Cypress: https://cypress.io/

## AI-Enhanced BDD Quick Tips

| Technique | Use Case | Benefit |
|-----------|----------|---------|
| AI Scenario Generation | From requirements → comprehensive scenarios | Identifies forgotten edge cases |
| Step Reusability Analysis | Review existing steps | Reduce duplication, improve maintenance |
| Test Data Generation | Creating Scenario Outline examples | Better boundary coverage |
| Redundancy Detection | Overlapping scenario detection | Faster test execution |
| NLP Consistency Check | Vocabulary alignment across scenarios | Easier team understanding |

## DevOps Integration Checklist

- [ ] Run BDD scenarios in CI/CD pipeline
- [ ] Tag scenarios for selective execution by pipeline stage
- [ ] Generate traceability reports linking scenarios to requirements
- [ ] Enable parallel scenario execution for faster feedback
- [ ] Archive and trend test results over time
- [ ] Integrate scenario results into dashboard/metrics
- [ ] Set up notifications for failing scenarios

## Team Adoption Roadmap

**Phase 1: Foundation** (Weeks 1-4)
- Train team on BDD concepts
- Create style guide and conventions
- Set up testing framework
- Start with critical user journeys

**Phase 2: Expansion** (Weeks 5-12)
- Increase scenario coverage
- Build centralized step library
- Integrate with CI/CD pipeline
- Involve business stakeholders

**Phase 3: Optimization** (Weeks 13+)
- Implement AI-assisted generation
- Analyze and consolidate steps
- Establish metrics and dashboards
- Continuous team improvement

---

**Quick Tip**: Always ask yourself: "Can a non-technical person understand this scenario?" If not, rewrite it!
