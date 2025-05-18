---
title: "Single Page Parameters"
date: "2024-10-09"
summary: "Single Page Parameters parameters"
description: "Single Page Parameters parameters"
toc: false
readTime: false
autonumber: true
math: false
showTags: false
---

The following parameters apply to single pages, they are meant to be inserted in the `.md` files introductions, apart from the date format.

## Author

You can specify an author name to display and avatar path to use. Here is an example 
using an image from /static: 

```md
author: "Francesco"
authorAvatarPath: "/avatar.jpeg"
```

## Table of Contents

Show a table of contents at the beginning of the post.

```md
toc: true
```

## Sections Auto-numbering

Auto-number headings.

```md
autonumber: true
```

Note that headings should start from level two.

## Math Rendering

Enable math rendering.

```md
math: true
```

You may encounter issues rendering complex equations.
This is due to a [known issue](https://discourse.gohugo.io/t/one-of-several-latex-equations-is-not-rendered-by-katex/47790). 

A possible workaround is to wrap your equation in `rawhtml` tags: 

```
<rawhtml>
$$
...
$$
</rawhtml>
```

> You must wrap the rawhtml tag in {{ ... }}, omitted due to rendering constraints.

## Tags

Create tags associated with the post and decide to show them.

```md
tags: ["database", "java"]
showTags: false
```

## Display Read Time

Choose to display reading time.

```md
readTime: true
```

## Hide Back to Top

Choose to display back to top at the end of the page.

```md
hideBackToTop: true
```

## Hide Pagination Controls

Choose to display pagination controls at the end of the page.

```md
hidePagination: true
```

## Meta Description

You can specify the post meta description as follows: 

```md
description: "Your Description"
```

## Fediverse

You can include a [fediverse handle](https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/) in your posts.

```md
fediverse: "@username@instance.url"
```

## Date Format

You can decide the date format to apply to single posts by setting the following param in the toml file: 

```toml
[params]
singleDateFormat = '2 January 2006'
```