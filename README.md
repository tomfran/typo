![banner](https://raw.githubusercontent.com/tomfran/typo/main/images/banner-light.png)

# Typo, a Hugo theme.

Typo is a theme backed by simplicity, as you can see in the screenshots below. The goal was to have a website centered around content and nothing more.

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
- [3 Configuration example](#3-configuration-example)
  - [3.1 post.md](#31-postmd)
  - [3.2 hugo.toml](#32-hugotoml)
- [4 References](#4-references)
- [5 Contributing](#5-contributing)

---

## 1 Installation

To receive updates, add the theme as a submodule: 
```
git submodule add git@github.com:tomfran/typo.git themes/typo
```

Otherwise, you can clone the repo and copy it manually to your theme folder.

You can find a repo using this theme [here](https://github.com/tomfran/blog).

## 2 Features

### 2.1 Header autonumbering

You can add auto-numbering to the pages by setting the following parameter in the header of your MD files. The numbering is currently supported by level 3 subheadings.

```
autonumber: true
```

### 2.2 Appearance preferences

In your `hugo.toml` file you can specify the preferred theme: 

```
theme = "light | dark | auto"
```

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
# Math mode
math = true

# Intro on main page, content in markdown, if you omit title or content the other can be displayed
homeIntro = true
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