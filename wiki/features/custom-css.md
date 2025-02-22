---
title: "Custom CSS"
date: "2024-10-07"
summary: "Custom CSS parameters"
description: "Custom CSS parameters"
toc: false
readTime: false
autonumber: true
math: false
showTags: false
hideBackToTop: true
---

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

