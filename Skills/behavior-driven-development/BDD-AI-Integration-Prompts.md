# BDD Skill: AI Integration Prompts & Examples

## Overview
This file provides practical examples of how to use the refined BDD Skill with AI tools to enhance your testing practices.

## AI-Assisted Scenario Generation

### Prompt Example 1: Edge Case Identification
```
I'm building a payment system with the following requirements:
- Accept credit card payments
- Process refunds
- Handle international transactions
- Prevent fraud

Please generate comprehensive BDD scenarios that cover:
1. Happy path scenarios
2. Edge cases and boundary conditions
3. Error handling and recovery
4. Security considerations
5. Performance requirements

Format as Gherkin feature files.
```

**What the AI delivers**: 20-30 comprehensive scenarios covering success, failures, edge cases, and recovery paths

### Prompt Example 2: Specific Feature Enhancement
```
I have these existing scenarios for user registration:
- User can register with valid email
- User receives confirmation email
- User cannot register with duplicate email

Please suggest additional scenarios we might be missing, including:
- Invalid email formats
- Long email addresses (255+ characters)
- Special characters in email
- Rapid registration attempts
- Email verification timeout
- Password strength validation
- Terms acceptance requirements
```

**What the AI delivers**: 15+ additional scenarios filling gaps in coverage

## Intelligent Test Data Generation

### Prompt Example 3: Email Validation Test Data
```
I need test data for comprehensive email validation testing.
Generate 50 diverse test email addresses that cover:
- Valid standard emails
- Valid with special characters (./+)
- Valid with subdomains
- Invalid formats (missing @, dots, etc.)
- Boundary cases (very long, special chars)
- International domain names
- Edge cases from real-world scenarios

Format as a Scenario Outline with Examples table.
```

**What the AI delivers**: Parameterized scenario with 50 varied test cases

### Prompt Example 4: Password Validation Data
```
Create comprehensive test data for password strength validation:
- Valid strong passwords (various patterns)
- Too short passwords
- No numbers
- No uppercase
- No lowercase
- No special characters
- Common patterns (password123, etc.)
- Edge cases

Generate 30 test cases in Scenario Outline format.
```

**What the AI delivers**: Test data covering all validation rules and edge cases

## Step Definition Optimization

### Prompt Example 5: Consolidation Analysis
```
I have 47 step definitions. Here's a summary of what they do:
[Paste step summary]

Please analyze for:
1. Duplicate or near-duplicate steps that could be consolidated
2. Common patterns that could be abstracted
3. Steps that could use parameterization
4. Suggested refactoring priorities
5. Estimated reduction in unique steps

Provide specific consolidation recommendations with examples.
```

**What the AI delivers**: Detailed analysis with consolidation roadmap and code examples

### Prompt Example 6: Shared Library Design
```
My team has developed these step definitions across 5 different projects.
I want to create a shared step library.

[Paste representative steps from each project]

Please:
1. Identify common patterns
2. Suggest shared step categories
3. Recommend abstraction level
4. Design shared step library structure
5. Show migration path from project-specific to shared steps

Format recommendations as code examples.
```

**What the AI delivers**: Shared library architecture with migration strategy

## Scenario Redundancy Detection

### Prompt Example 7: Coverage Analysis
```
I have 120 scenarios for my e-commerce system. 
I'm concerned about redundancy and overlap.

Here are my scenarios:
[Paste scenario list or descriptions]

Please:
1. Identify potential overlaps
2. Find truly redundant scenarios
3. Suggest consolidation
4. Identify coverage gaps
5. Recommend optimal scenario count (Target: 15-20% reduction)

Provide specific consolidation examples.
```

**What the AI delivers**: Redundancy analysis with consolidation recommendations

## Natural Language Consistency

### Prompt Example 8: Vocabulary Standardization
```
My team has written 85 scenarios over 6 months. 
Our vocabulary is inconsistent.

Examples of inconsistency:
- Some use "user", others use "customer"
- Mix of "login" and "log in"
- Mix of "should", "must", "will"
- Different past/present tenses

Here are samples:
[Paste representative scenarios]

Please:
1. Identify vocabulary inconsistencies
2. Recommend standard terms
3. Suggest refactored scenarios using standard terms
4. Create a style guide reference
5. Suggest which scenarios need updating first
```

**What the AI delivers**: Vocabulary guide with refactored examples and style guide

## Acceptance Criteria Mapping

### Prompt Example 9: Gap Analysis
```
Here are my acceptance criteria from the requirements:

AC-1.1: User can register with valid email
AC-1.2: Email validation prevents invalid formats
AC-1.3: User receives confirmation email within 1 minute
AC-1.4: Users cannot register with duplicate email
AC-2.1: Passwords must meet strength requirements
AC-2.2: Account lockout after 5 failed attempts

Here are my current scenarios:
[Paste scenario list]

Please:
1. Map existing scenarios to acceptance criteria
2. Identify unmapped criteria (gaps)
3. Identify unmapped scenarios (possibly unnecessary)
4. Suggest scenarios for missing criteria
5. Flag any misalignments

Format as traceability matrix.
```

**What the AI delivers**: Gap analysis with recommendations for complete coverage

## API Contract Testing

### Prompt Example 10: Contract Definition
```
I'm building a REST API for user management.

Endpoints:
- POST /api/users (create user)
- GET /api/users/{id} (get user)
- PUT /api/users/{id} (update user)
- DELETE /api/users/{id} (delete user)

Please generate comprehensive BDD scenarios that:
1. Define request/response contracts
2. Specify status codes
3. Document required fields
4. Show field validation rules
5. Cover error scenarios
6. Include security considerations

Format as Gherkin feature files for API contract testing.
```

**What the AI delivers**: Complete API specification as executable scenarios

## Test Pyramid Optimization

### Prompt Example 11: Pyramid Analysis
```
My team is executing 500 BDD scenarios, taking 45 minutes.
I want to optimize the test pyramid.

Current distribution:
- 250 E2E scenarios (database, UI, external APIs)
- 150 integration scenarios (with real database)
- 100 unit-level scenarios (mocked services)

Please recommend:
1. Ideal scenario counts by level (Target: balanced execution time)
2. Which scenarios could be pushed to unit/integration level
3. Which must remain E2E
4. Expected execution time after optimization
5. Mocking strategy for each level
6. Execution parallelization approach
```

**What the AI delivers**: Pyramid optimization roadmap with expected improvements

## Team Adoption Roadmap

### Prompt Example 12: Implementation Planning
```
My team of 12 developers is new to BDD.
We have 8 weeks to adopt BDD practices.

Current state:
- 2 developers familiar with BDD
- 200 existing manual test cases
- Legacy code with minimal tests
- Daily sprints

Please create a detailed 8-week roadmap that includes:
1. Week-by-week training and implementation phases
2. Initial quick wins (high-impact, low-effort)
3. Metrics to track success
4. Common pitfalls to avoid
5. Team roles and responsibilities
6. Tool setup and configuration
7. Governance (style guides, code review)

Prioritize practical adoption over perfection.
```

**What the AI delivers**: Phased adoption plan with weekly milestones and success metrics

## Common Challenge Resolution

### Prompt Example 13: Solving Duplicate Steps
```
My team has consolidated 150 step definitions down to 50,
but we're hitting a wall with further consolidation.

The remaining 50 steps fall into these categories:
[Describe remaining patterns]

The consolidation is making some steps too generic/hard to read.

Please help me decide:
1. How many unique steps is "healthy"? (Team of 10)
2. What consolidation trade-offs should we accept?
3. How do we balance clarity vs. reusability?
4. Specific consolidation recommendations
5. When to accept similarity without consolidation
```

**What the AI delivers**: Expert guidance on consolidation trade-offs and decisions

### Prompt Example 14: Performance Optimization
```
Our BDD test suite takes 35 minutes to run.
We need faster feedback in CI/CD.

Current setup:
- 120 scenarios
- All use real database (no mocking)
- Executed sequentially
- Include external API calls

Constraints:
- Can't remove important coverage
- Database setup is complex
- Some scenarios need real API data

Please recommend:
1. Scenarios to move to unit/integration level
2. Which external APIs to mock
3. Parallelization strategy
4. Fast smoke test suite (5 minutes)
5. Full suite (for nightly builds)
6. Expected time reductions

Provide specific recommendations with estimated impact.
```

**What the AI delivers**: Performance optimization strategy with expected improvements

## Metrics & Dashboard Setup

### Prompt Example 15: Success Measurement
```
We want to measure the success of our BDD implementation across our organization.

Teams: 4 teams, 30 developers total
Current state: Early adoption phase

Please recommend:
1. Key metrics to track by team
2. Target values for each metric
3. Dashboard layout and visualization
4. Baseline measurements
5. Success criteria for each phase (0-3 months, 3-6 months, 6-12 months)
6. Red flags that indicate problems
7. Tools and implementation approach

Also provide:
- Sample metric calculation formulas
- Data collection methods
- Reporting frequency and audience
```

**What the AI delivers**: Comprehensive metrics framework with implementation guidance

## Usage Tips

### Best Practices for AI Prompts
1. **Be specific**: Provide context, constraints, and expectations
2. **Include examples**: Show what you currently have
3. **Define output format**: Specify Gherkin, JSON, tables, etc.
4. **State constraints**: Budget, time, technology limitations
5. **Ask for reasoning**: Request explanations with recommendations
6. **Iterate**: Refine results through follow-up prompts

### Prompt Template
```
Context: [Describe your situation]
Current state: [What you have now]
Goal: [What you want to achieve]
Constraints: [Budget, time, technology limits]
Output format: [Gherkin, JSON, table, etc.]
Specific requirements: [Detailed needs]

Please provide:
1. [First deliverable with explanation]
2. [Second deliverable with reasoning]
3. [Third recommendation with impact analysis]
```

### When to Use AI vs. Manual

**Use AI for**:
- Edge case identification
- Test data generation
- Redundancy detection
- Step consolidation suggestions
- Coverage gap analysis
- Consistency checking
- Performance recommendations

**Use Manual for**:
- Understanding domain nuances
- Validating AI recommendations
- Team collaboration and discussion
- Final scenario refinement
- Business rule interpretation
- Traceability decisions

## Combining AI Recommendations with Team Discussion

### Collaborative Process
1. **AI generates** initial scenarios/recommendations
2. **Team reviews** for domain accuracy and completeness
3. **Team refines** based on business knowledge
4. **Team implements** with validation
5. **AI assists** with formatting and consolidation
6. **Team validates** against actual system behavior

### Quality Assurance Checklist
- [ ] AI output reviewed for technical accuracy
- [ ] Domain knowledge applied to recommendations
- [ ] Business rules properly represented
- [ ] Scenarios are independent and atomic
- [ ] Language is business-readable
- [ ] No technical implementation details
- [ ] Proper Given-When-Then structure
- [ ] Consistent vocabulary and terminology
- [ ] Traceability to requirements confirmed
- [ ] Team consensus achieved

## Conclusion

The refined BDD Skill, combined with AI tools, creates a powerful approach to developing and maintaining comprehensive, maintainable test suites. Use these prompts as starting points and adapt them to your specific context and needs.

Remember: **AI is a tool to enhance human expertise, not replace it.** Always apply team knowledge and business understanding to validate and refine AI-generated recommendations.
