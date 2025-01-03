---
title: "Setup"
date: "2024-10-12"
summary: "How to setup a Hugo's website using Typo as a theme."
description: "Getting started with Typo theme"
toc: false
readTime: false
autonumber: true
math: false
showTags: false
hidePagination: true
---

## Installation

Below are the ways to get started with the Typo theme.

### Getting Started

First of all, create a new Hugo project as follows:

```bash
hugo new site <your site name> --config toml
```

### Downloading the Theme

Themes are contained in the `/themes` directory, there are different ways to get Typo there

**Submodule - Recommended**

```bash
git submodule add --depth=1 https://github.com/tomfran/typo.git themes/typo
git submodule update --init --recursive
```

**Hugo module**

Installing Typo as a Hugo module requires Go to be installed in your development environment.

```bash
# Initialize your project as a Hugo module
hugo mod init <module_name>
# Install the theme
hugo mod get github.com/tomfran/typo
```

Then add the following to `hugo.toml`:

```toml
[module]
[[module.imports]]
path = "github.com/tomfran/typo"
```

Finally, remove the `theme = 'typo'` parameter from `hugo.toml`.

**Cloning**

```bash
git clone https://github.com/tomfran/typo themes/typo --depth=1
```

You need to keep it updated manually by pulling.

**Manual download a release**

Finally, you can manually download a [release](https://github.com/tomfran/typo/releases) and unzip it into the appropriate folder.

## Sample Config

Use those to get started with the theme. You can find a complete overview of the available features [here](https://tomfran.github.io/typo-wiki/features/).

[Here](https://github.com/tomfran/tomfran.github.io) you can find a repo using this theme.

### Site Config

Here is a sample `hugo.toml` config to get started with the theme.

```toml
baseURL = 'https://example.org/'
languageCode = 'en-us'
title = 'My website'
theme = 'typo'

[taxonomies]
tag = 'tags'

# Google analytics code
googleAnalytics = "G-xxxxxxxxx"

[params]
# Meta description
description = "A Tech Blog"

# Appearance settings
theme = 'auto'
colorPalette = 'default'
hideHeader = false

# Intro on main page, content is markdown
homeIntroTitle = 'Hi!'
homeIntroContent = """
I am an Italian Software Engineer with a strong foundation in computer science and a passion for solving complex problems.
I am interested in a range of topics, including algorithms, distributed systems, databases, and information retrieval.
"""

# Collection to display on home
homeCollectionTitle = 'Posts'
homeCollection = 'posts'

# Lists parameters
paginationSize = 100
listSummaries = true
listDateFormat = '2 Jan 2006'

# Breadcrumbs
breadcrumbs = true

# Social icons
[[params.social]]
name = "linkedin"
url = "https://www.linkedin.com/in/user/"

[[params.social]]
name = "medium"
url = "https://medium.com/@user"

[[params.social]]
name = "github"
url = "https://github.com/user"

# Main menu pages
[[params.menu]]
name = "home"
url = "/"

[[params.menu]]
name = "posts"
url = "/posts"

[[params.menu]]
name = "about"
url = "/about"

# Syntax highligth on code blocks
[markup]
[markup.highlight]
style = 'algol'

# Giscus comments
[params.giscus]
enable = false
repo = "user/repo"
repoid = "repoId"
category = "General"
categoryid = "categoryId"
mapping = "pathname"
theme = "preferred_color_scheme"
```

### Post Config

Sample post config.

```markdown
---
title: "Log-Structured Merge Tree"
date: "2023-11-12"
summary: "An LSM Tree overview and Java implementation."
description: "An LSM Tree overview and Java implementation."
toc: true
readTime: true
autonumber: true
math: true
tags: ["database", "java"]
showTags: false
hideBackToTop: false
---
```

## Support

If you use the theme or found it useful you can support me by leaving a star :star: to Typo's Github repository or opening issues and PRs with fixes or new features.