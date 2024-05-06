![banner](https://raw.githubusercontent.com/tomfran/typo/main/images/banner-light.png)

# Typo, a Hugo theme.

Typo is a theme backed by simplicity, as you can see in the screenshots below. The goal was to have a website centered around content and nothing more.

[![hugo-typo](https://img.shields.io/badge/hugo_themes-@typo-red)](https://themes.gohugo.io/themes/typo/)
[![GitHub Release](https://img.shields.io/github/v/release/tomfran/typo)](https://github.com/tomfran/typo/releases/latest)
[![last-commit](https://img.shields.io/github/last-commit/tomfran/typo)](https://github.com/tomfran/typo/commits/)

**Homepage**

![1](https://raw.githubusercontent.com/tomfran/typo/main/images/1.png)

**Article**

![2](https://raw.githubusercontent.com/tomfran/typo/main/images/2.png)

![3](https://raw.githubusercontent.com/tomfran/typo/main/images/3.png)

---

**Table of content**

- [1 Installation](#1-installation)
- [2 Features](#2-features)
  - [2.1 Header autonumbering](#21-header-autonumbering)
  - [2.2 Appearance preferences](#22-appearance-preferences)
  - [2.3 Dark and light mode images](#23-dark-and-light-mode-images)
  - [2.4 Fonts](#24-fonts)
  - [2.5 Miscellaneous](#25-miscellaneous)
  - [2.6 Extending the theme](#26-extending-the-theme)
- [3 Configuration example](#3-configuration-example)
  - [3.1 post.md](#31-postmd)
  - [3.2 hugo.toml](#32-hugotoml)
- [4 References](#4-references)
- [5 Contributing](#5-contributing)
- [6 Future Works](#6-future-works)

---

## 1 Installation

To receive updates, add the theme as a submodule: 
```
git submodule add --depth=1 git@github.com:tomfran/typo.git themes/typo
```

Otherwise, you can clone the repo and copy it manually to your theme folder.

You then need to set typo as your theme in your [config file](#32-hugotoml).

You can find a repo using this theme [here](https://github.com/tomfran/blog).

## 2 Features

### 2.1 Header autonumbering

You can add auto-numbering to the pages by setting the following parameter in the header of your MD files. The numbering is currently supported by level 3 subheadings.

```
autonumber: true
```

Note that autonumbering starts from h2 tags, hence you need 
to start sections with ## headings. 

```
## First    ->  1 First
### Second  ->  1.1 Second
#### Third  ->  1.1.1 Third
```

### 2.2 Appearance preferences

In your `hugo.toml` file you can specify the preferred theme: 

```
theme = "light | dark | auto"
```

If nothing is set, the default setting is auto.

### 2.3 Dark and light mode images

You can tags to decide if images are displayed in dark or light mode, as GitHub is doing for readmes.

Let's say you have two different versions of an image, setting `#dark` or `#light` does the trick.

```md
![skiplist](skiplist-light.png#light)
![skiplist](skiplist-dark.png#dark)
```

You can of course remove the final tag 
to always show the same image in light and 
dark mode.

### 2.4 Fonts

The fonts in use are [Literata](https://fonts.google.com/specimen/Literata) and [Monaspace Argon](https://github.com/githubnext/monaspace).

### 2.5 Miscellaneous

Various miscellaneous features: 
- Latex blocks overflows on mobile to prevent having strange alignments;
- Code blocks are displayed with ligatures.

### 2.6 Extending the theme

You can easily modify the existing style by placing custom CSS inside `assets/css/custom.css`
This has priority over existing CSS.

## 3 Configuration example

### 3.1 post.md

```
---
title: "Search Engine in Rust"
date: "2024-02-01"
summary: "A search engine overview and Rust implementation."
toc: true
readTime: true
autonumber: true
math: true
---

Your content...
```

### 3.2 hugo.toml

```toml
baseURL = 'https://example.org/'
languageCode = 'en-us'
title = 'Title'
theme = 'Typo'

# Disable tags, actually, they are rendered as a list, but the idea is to disable them.
disableKinds = ['taxonomy']

# Google analytics code
googleAnalytics = "G-xxxxxxxxxx"

[params]
# Appearance
theme = 'auto'

# Intro on main page, content in markdown, if you omit title or content the other can be displayed
homeIntroTitle = 'Hello traveler!'
homeIntroContent = """
Join me on this journey as I explore the ever-evolving landscape of software engineering, 
fueled by curiosity and a relentless drive to innovate. 
Together, let's push the boundaries of what's possible and craft solutions that shape the future.
"""

# Collection to display on home page: 
# in this case we would display content/posts pages
homeCollectionTitle = 'Posts'
homeCollection = 'posts'

# Pagination size across all website, this is the same for homepage and single list page
paginationSize = 100
# Display summaries under post list entries
listSummaries = true
# List entries date format
listDateFormat = '2 Jan 2006'

# Social icons
[[params.social]]
name = "linkedin"
url = "https://www.linkedin.com/in/your-name"

[[params.social]]
name = "medium"
url = "https://medium.com/@your-name"

[[params.social]]
name = "github"
url = "https://github.com/your-name"

# Main menu pages
[[params.menu]]
name = "home"
url = "/"

[[params.menu]]
name = "posts"
url = "/posts"

[[params.menu]]
name = "resume"
url = "/resume"

# giscus conf, for more detail, see https://giscus.app/
[params.giscus]
  enable = true
  repo = ""
  repoid = ""
  category = ""
  categoryid = ""
  mapping = "pathname"
  theme = "light"

# Syntax highlight on code blocks, all styles: 
# https://xyproto.github.io/splash/docs/all.html
# I suggest algol
[markup]
[markup.highlight]
style = 'algol'
```

## 4 References

The SVGs for social icons are taken from [Hugo PaperMod](https://github.com/adityatelange/hugo-PaperMod).

## 5 Contributing

Feel free to write proposals or stuff you'd like to see. If you feel like contributing, PRs are welcome!

Leave a star if you are using the theme, I would really appreciate! :star:

## 6 Future Works

- [ ] Bring SEO and [performance metrics](https://pagespeed.web.dev/) to 100% both on mobile and desktop;
- [ ] Add color palettes; 
- [ ] Add a proper Tags page;
