---
title: "Collections"
date: "2024-10-10"
summary: "Collections parameters"
description: "Collections parameters"
toc: false
readTime: false
autonumber: true
math: false
showTags: false
---

Here are some parameters regarding collections, those apply to both the home displayed one and to the dedicated folder pages.

## Pagination

Specify the maximum number of posts per page.

```toml
[params]
paginationSize = 100
```

## Date Format

The date format can be tweaked with a format string.

```toml
[params]
listDateFormat = '2 Jan 2006'
```

## Summary Toggle

Summaries can be turned on and off with this setting.

```toml
[params]
listSummaries = true
```

## Hide List Date

To hide the dates on the list page, add the following to the frontmatter of the collection's `_index.md`:

```toml
[params]
showListDate = false
```