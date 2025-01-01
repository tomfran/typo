---
title: "Header"
date: "2024-10-13"
summary: "Header parameters"
description: "Header parameters"
toc: false
readTime: false
autonumber: true
math: false
showTags: false
---

To pick pages to include in the header you must add the following elements:

```toml
[[params.menu]]
name = "home"
url = "/"

[[params.menu]]
name = "posts"
url = "/posts"
```

There exists an optional new tab parameter, to choose wether menu items are opened in a new tab or not. 

```toml
[[params.menu]]
name = "posts"
url = "/posts"
newTab = true
```
