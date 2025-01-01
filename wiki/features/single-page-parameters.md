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

You can speficy the post meta description as follows: 

```md
description: "Your Description"
```

## Date Format

You can decide the date format to apply to single posts by setting the following param in the toml file: 

```toml
[params]
singleDateFormat = '2 January 2006'
```
