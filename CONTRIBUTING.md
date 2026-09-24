# Contributing to Stylet

Thanks for wanting to help! Here's how.

---

## Ways to Contribute

- 🐛 **Report bugs** — open an issue with a minimal reproduction
- 💡 **Suggest features** — open an issue describing the use case
- 📝 **Improve docs** — typos, unclear explanations, missing examples
- 🎨 **Add components** — buttons, cards, form elements
- 🎬 **Add animations** — new motion presets
- 🧪 **Test in browsers** — report rendering issues

---

## Guidelines

### For CSS changes

- **Use design tokens.** Never hardcode colors, spacing, or durations. Use `var(--st-*)`.
- **One concern per PR.** Small, focused changes get merged faster.
- **Follow the naming pattern:** `.block`, `.block-element`, `.block--modifier`.
- **Respect `prefers-reduced-motion`** for anything animated.
- **Test in light and dark mode.**
- **No vendor prefixes** — Lightning CSS adds them automatically at build.

### For documentation

- Use plain English. Avoid jargon.
- Include a **live code example** where possible.
- Keep lines under 100 chars.

---

## Adding a Component

1. Add styles to `src/components.css` inside `@layer components { ... }`
2. Add a demo to `examples/landing.html`
3. Document it in the README
4. Add an entry to `CHANGELOG.md` under "Unreleased"

---

## Adding an Animation

1. Add to `src/animations.css` inside `@layer animations { ... }`
2. Wrap motion in `@media (prefers-reduced-motion: no-preference)` **only if you want it opt-in**. Otherwise, the global reset handles it.
3. Add an example to `examples/landing.html`

---

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

