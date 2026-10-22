# Touchstone 4 — North Star Bakery: integrate into the existing project

**Do not replace the original four HTML pages or existing stylesheet.** Add `touchstone4.js` and `touchstone4.css` to the same directory as the existing HTML files (or adjust relative paths).

## Products page
Add this block just before the footer:

```html
<section id="bakery-favorites" aria-labelledby="favorites-heading">
  <h2 id="favorites-heading">Save Your Bakery Favorites</h2>
  <p>Choose the baked goods you love. Your selections will be remembered on this device.</p>
  <div id="favorite-options" class="favorite-options"></div>
  <h3>My Favorites</h3>
  <ul id="favorite-list"></ul>
  <p id="favorites-status" role="status" aria-live="polite"></p>
</section>
```

## Contact and Pre-Orders page
Keep your **existing form and all its existing fields**. Add `data-bakery-validated-form` to its opening `<form>` tag. On its existing name and email fields, add `id`, `data-validate`, and `required` attributes; for example:

```html
<label for="customer-name">Name</label>
<input id="customer-name" name="name" type="text" required data-validate data-minlength="2" aria-describedby="customer-name-error">
<span id="customer-name-error" class="field-error" aria-live="polite"></span>
<label for="customer-email">Email</label>
<input id="customer-email" name="email" type="email" required data-validate aria-describedby="customer-email-error">
<span id="customer-email-error" class="field-error" aria-live="polite"></span>
```

Ensure the IDs on the `<span>` elements match the IDs on your **actual existing inputs** plus `-error`. If you have a message or pre-order details field, add `data-validate data-minlength="10" required` and a matching `<span>` for its error. Add `<p role="status" aria-live="polite"></p>` inside the form. Do not create a second form. If the original form has no `action`, this demonstration intentionally does not transmit orders.

## Shared file references
On both affected pages, inside `<head>` add `<link rel="stylesheet" href="touchstone4.css">`. Before `</body>` add `<script src="touchstone4.js" defer></script>`. Keep all original stylesheet and media references.

## Test and publish
1. Open Products, add a favorite and check that the list and button change.
2. Refresh Products; confirm the same favorite remains. Remove it and refresh again.
3. On Contact and Pre-Orders, try empty name/email, an invalid email, and a one-character name. Verify field-level messages and blocked submission. Fix them without losing other entries.
4. Test navigation and media at mobile and desktop widths. Open the browser console to check for errors.
5. Commit the updated files to the **existing** GitHub repository and verify its public GitHub Pages preview. Capture actual screenshots of (1) saved favorite, (2) at least two validation errors, (3) favorite after refresh.
6. Insert those screenshots into the provided Touchstone 4 document. The repository and live preview links are not independently verified in this package.
