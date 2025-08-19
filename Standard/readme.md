https://markdownlivepreview.com/
https://github.com/dnvgl/SolutionPackage/blob/ai-code-review-prompt/.github/template-copilot-instructions.md#11--a012021---broken-access-control

Front End code standards and best practices

TODO: Folder structure WAT, Use cdn by default

**Key Concepts**

**Maintainability**

Software should be easy to update, refactor, or extend.

Guidelines:

- Software should be easy to update, refactor, or extend.
- Use modular, reusable components with clear responsibilities.
- Avoid tightly coupling components and logic.
- Apply DRY (Don’t Repeat Yourself) principle.
- Enforce consistent coding standards with ESLint + Prettier.
- Apply naming conventions, folder structures, and documentation for clarity.

Practices:

- Prefer custom hooks over repeated logic.
- Keep logic separate from UI (e.g., services, utils, API layers).High Performance

- Use type definitions to catch future regressions.

**Efficiency**

Deliver features quickly while consuming minimal time and developer effort.

Guidelines:

- Use component libraries (VUI, VUI/util) and raise request to VUI team if some of the key components are missing or lack of functionalities.
- Avoid premature optimization—profile performance first.
- Use tools like React Profiler or Lighthouse to identify bottlenecks.
- Favor efficient algorithms and memorization for intensive UI updates.

Practices:

- Use useMemo, useCallback, React.memo wisely.
- Debounce expensive functions (e.g., search inputs).
- Split code with React.lazy or route-level chunking.

**Correctness**

Front-end should meet all functional specs and behave as expected.

Guidelines:

- Follow design specs strictly and validate with designers.
- Use TypeScript to catch type errors and ensure prop contracts.
- Write comprehensive unit/integration tests.
- Validate form inputs properly (e.g., using zod, react-hook-form).
- Having strong mindset of what kind of code should be techdebt

Practices:

- Add input sanitization and edge case handling.
- Treat undefined/null states explicitly.

**Reliability**

UI should behave consistently under valid and invalid conditions.

Guidelines:

- Handle all API states: loading, error, empty, success.
- Use error boundaries in React to prevent app crashes.
- Validate user input on both client and server.
- Retry or back-off strategies for flaky network requests.
- Hosting resources on CDN

Practices:

- Use try/catch in async calls.
- Avoid assumptions about data structure (e.g., always check existence).

**Scalability**

Should support growing data, complexity, and users.

Guidelines:

- Use scalable architecture (feature-based folders, hooks, context).
- Lazy-load components and split bundles.
- Apply caching strategies with SWR or React Query.
- Use pagination or virtual lists for large datasets.
- Use feature flags for unfinished features

Practices:

- Break large monolithic components into atomic units(consider splitting into smaller modules if more then 300 lines).
- Avoid using single global context/state for everything—partition as needed.

**Security**

Safeguard the app and its users from malicious behaviors.

Guidelines:

- Never store sensitive data (e.g., tokens) in local storage if possible—prefer HttpOnly cookies.
- Escape or sanitize dynamic HTML to prevent XSS.
- Use HTTPS, CSP headers, and Subresource Integrity (SRI).
- Use input validation to avoid injection attacks.
- Avoid CSRF attacks

Practices:

- Disable autocomplete on sensitive fields (autocomplete="off").
- Sanitize user-generated content (e.g., when rendering rich text).
- Use helmet on backend, and sanitize error messages.
- Use rel="noopener noreferrer" when handing links

**Usability & Reusability**

Design UI to be accessible, responsive, and intuitive. Code should be designed to avoid duplication by enabling reuse across different parts of the application.

Guidelines:

- Follow WCAG standards and use semantic HTML.
- Ensure UI elements are keyboard accessible.
- Implement responsive design using flex/grid or utility frameworks.
- Use tooltips, placeholders, and progressive disclosure (modals, accordions).
- Use meaningful variable and function names.
- Prefer readability over clever tricks.
- Establish and follow common style guide for code and UI.
- Name components, props, and CSS classes predictably.

Practices:

- Provide meaningful alt texts, labels, and ARIA attributes.
- Use a consistent design system (font, spacing, button sizes, etc.).
- Use media queries to support multiple devices.
- Use consistent formatting, spacing, and bracket styles (Prettier/ESLint).
- Group related logic together and remove dead code
- Use relative units (rem, %) instead of fixed px.
- Use flexible layouts (Flexbox, CSS Grid).
- Build atomic, composable components.
- Write custom hooks for shared logic.
- Store reusable utilities (e.g., formatters, validators) in a common library.
- Maintain a design system or component library (internal or external).
- Follow "Separation of Concerns" – split UI, logic, and data.
- Organize files by feature or domain.
- Avoid large monolithic components

**High Performance**

Guidelines:

- Defer non-critical resources
- Use code splitting and lazy loading.
- Compress and cache assets.
- Avoid render-blocking styles and scripts

**Testability**

Code should be easy to test at multiple levels.

Guidelines:

- Write pure functions and stateless components when possible.
- Separate data fetching and presentation logic.
- Mock API layers for deterministic tests.
- Use CI to enforce testing at pull request level.

Practices:

- Ensure every new feature has a corresponding test.
- Aim for test coverage on edge cases and failure states.

**Documentation**

Code should be self-explanatory, and supported by formal documentation.

Guidelines:

- Write JSDoc or TSDoc for complex utilities or hooks.
- Add README.md files to reusable modules or packages.
- Use Storybook to document UI components if applicable.
- Document API interfaces and response shapes.

Practices:

- Comment _why_, not _what_.
- Keep code clean and descriptive to reduce documentation burden.
