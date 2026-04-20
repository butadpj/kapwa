# Design Principles

Kapwa is a design system for civic websites that should feel clear, respectful, useful, and trustworthy.

The full internal principles document is written for the BetterGov team. This public version keeps the same intent but explains it in a way that adopters, contributors, and partner teams can use quickly.

## What Kapwa Optimizes For

### Accessibility

Public websites should work for people with different devices, abilities, languages, bandwidth limits, and levels of digital confidence.

Kapwa components should support semantic HTML, readable contrast, keyboard access, responsive layouts, and patterns that do not assume ideal network or device conditions.

### Clarity

People should understand what a page is for, what action they can take, and what happens next.

Kapwa favors plain language, scannable layouts, direct calls to action, visible hierarchy, and error messages that help people recover.

### Consistency

Familiar patterns help people trust what they are using.

Kapwa uses shared tokens, reusable components, and predictable interaction states so teams do not redesign the same civic patterns from scratch.

### Respect

Government and civic technology should treat people with dignity.

Kapwa avoids hostile copy, unnecessary friction, careless data collection, disruptive interactions, and visual patterns that make important tasks harder than they need to be.

### Simplicity

Simple does not mean empty. It means every element has a job.

Kapwa should help teams build pages that load quickly, explain themselves clearly, and avoid decoration or complexity that gets in the way of public service.

### Transparency

Trust depends on information people can verify.

Kapwa encourages visible dates, source links, content ownership, confirmation states, and clear status messaging so people can understand where information came from and whether it is current.

### Adaptability

Civic websites change as policies, services, teams, and technology change.

Kapwa uses tokens, modular components, and documented patterns so the system can evolve without forcing every consuming team to rebuild everything manually.

## How These Principles Shape The System

These principles are not just content values. They affect how Kapwa is built:

- tokens make visual decisions reusable and easier to update
- components capture accessible, consistent interface patterns
- Storybook shows component behavior, variants, and states
- docs explain how to adopt, contribute, and extend the system
- package distribution keeps future fixes and design updates easier for consumers to receive

For the technical model behind the token system, read [Token Architecture](/principles/token-architecture).
