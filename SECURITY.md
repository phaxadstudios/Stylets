# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.x     | ✅ Actively supported |
| 1.x     | ❌ End of life       |

## Reporting a Vulnerability

If you discover a security issue, **please do not open a public GitHub issue**.

Instead, report it privately:

1. Go to the [Security tab](https://github.com/phaxadstudios/stylet/security/advisories)
2. Click **Report a vulnerability**
3. Describe the issue with steps to reproduce

We'll respond within **72 hours** and work with you on a coordinated disclosure.

## Scope

Stylet is a CSS framework with no runtime JavaScript in the core. Security
concerns we care about:

- CSS injection via unbounded custom properties
- XSS risks introduced by example pages
- Supply chain issues in dev dependencies

Issues in **user projects** built with Stylet are out of scope.
