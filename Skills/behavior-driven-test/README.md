# BDD Testing Skill

## Overview

This skill helps you implement **Behavior-Driven Development (BDD)** testing using frameworks like Cucumber, SpecFlow, Behave, and others. It bridges the gap between business requirements (user stories, acceptance criteria) and automated testing using executable specifications written in plain language.

## 🎯 Key Capabilities

### Core BDD Skills
- ✅ Transform user stories and acceptance criteria into BDD scenarios
- ✅ Write Given-When-Then scenarios in Gherkin syntax
- ✅ Create data-driven tests with Scenario Outlines
- ✅ Generate step definitions for multiple frameworks
- ✅ Map scenarios to acceptance criteria for traceability
- ✅ Optimize test suites for maintainability and speed

### AI-Enhanced Features
- 🤖 AI-assisted scenario generation from requirements
- 🤖 Intelligent test data generation for edge cases
- 🤖 Step definition optimization and consolidation
- 🤖 Redundancy detection across scenarios
- 🤖 Vocabulary consistency checking

### Advanced Patterns
- 📋 API contract testing with BDD
- 📋 Living documentation generation
- 📋 Test pyramid integration guidance
- 📋 DevOps/CI-CD integration

## 🚀 Quick Start

### 1. Using with AI Assistant

```
"Using the BDD Testing Skill, help me convert this user story into BDD scenarios:

User Story: As a customer, I want to add items to my shopping cart 
so that I can purchase multiple products together.

Acceptance Criteria:
- User can add product to empty cart
- Cart displays correct quantity and total price
- User can add same product multiple times
- User receives confirmation when item is added"
```

The AI will generate complete Gherkin scenarios with Given-When-Then structure.

### 2. Generate Step Definitions

```
"Using the BDD Testing Skill, generate Cucumber JavaScript step definitions 
for this scenario:

Scenario: Add item to cart
  Given the user is viewing a product priced at $29.99
  When the user clicks the 'Add to Cart' button
  Then the cart should contain 1 item
  And the cart total should be $29.99"
```

### 3. Optimize Existing Tests

```
"Using the BDD Testing Skill, review these scenarios and suggest improvements:

[paste your scenarios]

Focus on:
- Removing redundancy
- Improving clarity
- Following best practices
- Consolidating duplicate steps"
```

## 📚 Supported Frameworks

| Framework | Language | Best For |
|-----------|----------|----------|
| **Cucumber** | JavaScript/TypeScript | Web & API testing |
| **SpecFlow** | C# (.NET) | .NET applications |
| **Behave** | Python | Python applications |
| **pytest-bdd** | Python | Lightweight Python BDD |
| **Cypress (BDD)** | JavaScript | Modern frontend E2E |
| **Playwright (BDD)** | JavaScript/TypeScript/Python | Cross-browser testing |
| **Serenity BDD** | Java | Enterprise Java projects |

## 🎓 Core Concepts

### The Given-When-Then Structure

```gherkin
Scenario: User successfully logs in
  Given the user is on the login page          # Setup/Precondition
  And the user has valid credentials           # Additional setup
  When the user enters their credentials       # Action
  And clicks the login button                  # Additional action
  Then the user should see the dashboard       # Expected outcome
  And a welcome message should be displayed    # Additional verification
```

### Scenario Outlines (Data-Driven Testing)

```gherkin
Scenario Outline: Validate email format
  Given the user is on the registration page
  When the user enters "<email>" in the email field
  Then the validation message should be "<message>"

  Examples:
    | email              | message                    |
    | user@example.com   | Valid email                |
    | invalid@           | Invalid email format       |
    | @example.com       | Invalid email format       |
    | user@.com          | Invalid email format       |
```

## ✅ Best Practices

### DO:
- ✅ Use business-readable language (avoid technical jargon)
- ✅ Keep scenarios focused on single behavior
- ✅ Write independent scenarios (no order dependencies)
- ✅ Reuse steps across scenarios (target: 3-5 scenarios per step)
- ✅ Use concrete, specific examples
- ✅ Keep scenarios concise (3-5 steps typical)
- ✅ Review scenarios with business stakeholders

### DON'T:
- ❌ Include implementation details ("click button with id='btn-123'")
- ❌ Test multiple behaviors in one scenario
- ❌ Use technical jargon
- ❌ Create dependencies between scenarios
- ❌ Duplicate steps instead of reusing
- ❌ Make scenarios too long (>10 steps)

## 🤖 AI Integration Examples

### Example 1: Generate Scenarios from User Story

**Prompt:**
```
Using the BDD Testing Skill, generate comprehensive scenarios for:

User Story: As a bank customer, I want to transfer money between accounts 
so that I can manage my funds.

Include:
- Happy path
- Insufficient funds error
- Invalid account error
- Edge cases
```

### Example 2: Generate Test Data

**Prompt:**
```
Using the BDD Testing Skill, create a Scenario Outline with test data for 
password validation that covers:
- Valid strong passwords (3 examples)
- Too short (2 examples)
- Missing numbers (2 examples)
- Missing special characters (2 examples)
- Common patterns (2 examples)
```

### Example 3: Optimize Step Definitions

**Prompt:**
```
Using the BDD Testing Skill, analyze these step definitions and suggest 
consolidation opportunities:

[paste your step definitions]

Provide:
- Duplicate/similar steps
- Consolidation suggestions
- Example refactored code
```

## 📊 Team Adoption Roadmap

### Phase 1: Foundation (2-4 weeks)
- Train team on BDD and Given-When-Then
- Create first 10-15 scenarios for high-priority features
- Set up test execution locally
- Review with stakeholders

**Success:** Team can write basic scenarios, tests run locally

### Phase 2: Expansion (1-2 months)
- Build centralized step library
- Integrate into CI/CD pipeline
- Create scenarios for all new features
- Track metrics (coverage, reusability)

**Success:** 50+ scenarios, CI/CD integration, 3+ scenarios per step

### Phase 3: Optimization (Ongoing)
- Use AI to detect redundancies
- Optimize execution speed
- Generate living documentation
- Maintain 90%+ coverage

**Success:** 90%+ coverage, 95%+ pass rate, <5 min execution

## 📈 Key Metrics to Track

| Metric | Description | Target |
|--------|-------------|--------|
| **Coverage %** | % of acceptance criteria with scenarios | 90%+ |
| **Step Reusability** | Scenarios per step definition | 3-5 |
| **Pass Rate** | % of scenarios passing | 95%+ |
| **Execution Time** | Time to run full suite | <10 min |
| **Team Adoption** | % of developers using BDD | 100% |

## 🔗 Domain-Specific Examples

The skill includes ready-to-use templates for:
- **E-Commerce**: Shopping cart, checkout, product catalog
- **Banking**: Transfers, loans, account management
- **Healthcare**: Appointments, medical records
- **SaaS**: Authentication, user management, subscriptions
- **APIs**: CRUD operations, contract testing

## 📖 Additional Resources

This skill package includes:
- **BDD Implementation Guide**: Comprehensive implementation instructions
- **BDD Quick Reference**: Fast lookup for syntax and patterns
- **BDD Scenarios Examples**: 25+ ready-to-use templates
- **BDD AI Integration Prompts**: 15 practical AI prompt examples

## 🤝 How to Use This Skill

### With GitHub Copilot
```
"Using the BDD Testing Skill in the skill folder, [your request]"
```

### With ChatGPT/Claude
```
"I'm using a BDD Testing Skill. Here's the context: [paste skill description]

Now help me [your request]"
```

### As Team Reference
- Share this README with your team
- Use the JSON file for tool integration
- Reference examples during code reviews
- Follow the adoption roadmap

## 🎯 Example Workflows

### Workflow 1: New Feature Development
1. Receive user story with acceptance criteria
2. Ask AI to generate BDD scenarios (using this skill)
3. Review scenarios with product owner
4. Generate step definitions for your framework
5. Implement step logic
6. Run tests (should fail initially - red)
7. Implement feature code
8. Tests pass (green)
9. Refactor as needed

### Workflow 2: Test Suite Optimization
1. Export current scenarios and steps
2. Ask AI to analyze for redundancies (using this skill)
3. Review consolidation suggestions
4. Refactor step by step
5. Run tests to ensure no regressions
6. Measure improvement in execution time and maintainability

### Workflow 3: Team Onboarding
1. Share this README
2. Run through Given-When-Then examples together
3. Have new team member write first scenario with AI assistance
4. Review and provide feedback
5. Pair on implementing step definitions
6. Graduate to independent scenario writing

## 🆘 Common Challenges & Solutions

### Challenge: "Scenarios become outdated"
**Solution:** 
- Link scenarios to user stories in your tracking system
- Review scenarios during refinement meetings
- Use AI to suggest updates when requirements change
- Treat feature files as living documentation

### Challenge: "Too many duplicate steps"
**Solution:**
- Use AI to analyze and consolidate steps
- Create centralized step library
- Establish naming conventions
- Regular code reviews for step definitions

### Challenge: "Tests are too slow"
**Solution:**
- Run in parallel (most frameworks support this)
- Use tags to run subsets (@smoke, @critical)
- Mock external dependencies where appropriate
- Focus BDD on integration/E2E, not unit tests

## 📝 Example Request Templates

### Generate Scenarios
```
Using the BDD Testing Skill, generate scenarios for:
- User story: [description]
- Acceptance criteria: [list]
- Include: happy path, error cases, edge cases
```

### Create Step Definitions
```
Using the BDD Testing Skill, create [framework] step definitions for:
[paste scenario]
```

### Review & Improve
```
Using the BDD Testing Skill, review these scenarios for:
- BDD best practices compliance
- Clarity and maintainability
- Missing test cases
[paste scenarios]
```

### Optimize Test Suite
```
Using the BDD Testing Skill, analyze this test suite:
- [paste summary or scenarios]
Suggest: consolidation, improved reusability, faster execution
```

---

## 🎉 Getting Started in 5 Minutes

1. **Choose a simple user story** from your backlog
2. **Ask AI** (using this skill): "Convert this user story to BDD scenarios: [paste story]"
3. **Review the scenarios** - are they readable by non-technical people?
4. **Generate step definitions** for your framework
5. **Run your first BDD test!**

Remember: BDD is about **collaboration and shared understanding**, not just testing. The scenarios you write should be valuable to product owners, developers, and testers alike.

---

**Version:** 1.1.0  
**Last Updated:** January 20, 2026  
**Author:** AI Workshop
