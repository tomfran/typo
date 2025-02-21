---
title: "Other Parameters"
date: "2024-10-08"
summary: "Other Parameters parameters"
description: "Other Parameters parameters"
toc: false
readTime: false
autonumber: true
math: false
showTags: false
---

Miscellaneous settings.

## Home Meta Description

You can specify the homepage meta description with the following parameter:

```toml
[params]
description = "Your description"
```

## Breadcrumbs

Show breadcrumbs on pages.

```toml
[params]
breadcrumbs = true
```

## Comments

Enable comments on your posts using [Giscus](https://giscus.app/).

```toml
[params.giscus]
enable = false
repo = "your/repo"
repoid = "id"
category = "category"
categoryid = "categoryId"
mapping = "pathname"
theme = "preferred_color_scheme" 
```

Tip: use `preferred_color_scheme` theme to have a consistent dark and light appearance.

You can decide to hide the comments section on certain pages, using the following parameter on the page itself:

```md
disableComment: true
```


## Umami

You can include [Umami](https://umami.is/) in your website as follows: 

```toml
[params.umami]
enable = true
websiteId = "unique-website-id"
jsLocation = "http://example.org/umami.js"
```

## Favicons

The following favicons are included in the head of the website: 
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `android-chrome-192x192.png`
- `apple-touch-icon.png`

You must override the existing one in your static folder. 

You can also specify a subdirectory of /static if you prefer 
using the following param: 

```toml
[params]
faviconPath = 'your-path'
```

You can easily generate favicons using [this website](https://realfavicongenerator.net/) starting from your image.
[Here](https://github.com/tomfran/tomfran.github.io/tree/main/static) you can see an example of icons overriding default ones.

## Mermaid Diagrams

Mermaid diagrams are supported, just follow [this reference](https://gohugo.io/content-management/diagrams/#mermaid-diagrams) to use them. You can set Mermaid's light- and dark themes in your config; they switch with your blog's light/dark state. These are the defaults:

```toml
[params]
mermaidTheme = "default"
mermaidDarkTheme = "dark"
```
