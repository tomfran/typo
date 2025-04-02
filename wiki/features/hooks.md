---
title: "Hooks"
date: "2024-10-06"
summary: "Layout hooks"
description: "Layout hooks"
toc: false
readTime: false
autonumber: true
math: false
showTags: false
---

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