---
title: "Advanced Customization"
date: "2024-10-07"
summary: "Advanced customization options"
description: "Advanced customization options"
toc: false
readTime: false
autonumber: true
math: false
showTags: false
hideBackToTop: true
---

## Custom CSS

The theme supports custom css, you can override anything you want by redefining classes in the `assets/css/custom.css` file.

For instance, changing the main width can be done as follows: 

```css
:root {
    --main-width: 1024px; /* overrides default of 780px */
}
```

Note that backward incompatible changes in the CSS will likely not happen, but there might be cases in the future where 
backward compatibility is not possible. If you are overriding a huge amount of CSS I suggest you forking the project instead of 
defining it here.

## Hooks

Hooks allow to customize layouts by injecting custom code at specific points in the layout.
Hooks are defined in the `layouts/partials/hooks` directory.
The following hooks are currently available:

- `head_start` is inserted at the beginning of the `<head>` tag.
- `head_end` is inserted at the end of the `<head>` tag.
- `body_end` is inserted at the end of the `<body>` tag.
- `footer_start` is inserted at the beginning of the footer.

To create a hook, add a file named `<hook_name>.html` in the `layouts/partials/hooks` directory. The file should contain the code you want to inject at that point in the layout.
For example, to preload a font, you can create a file named `head_start.html` in the `layouts/partials/hooks` directory with the following content:

```html
<link rel="preload" href="/fonts/Literata/Literata-Light.woff2" type="font/woff2" as="font" crossorigin>
```

The full context is passed to the hook, so any variables available in the page context can be used in the hook.