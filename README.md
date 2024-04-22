![banner](misc/readme.png)

The theme is keeped as simple as possible on purpose. There are no fancy headers, cards, or stuff like that. 
The fonts in use are Literata and Monaspace.

Tags are intentionally omitted, have a look at the sample coinfiguration at the bottom to remove them. 

## Example website



## Installation

To receive updates, add the theme as a submodule: 
```
git submodule add git@github.com:tomfran/typo.git themes/typo
```

Otherwise you can clone the repo and copy it manually to yout theme folder.

## Configuration

Here is an example configuration:

```toml
baseURL = 'https://example.org/'
languageCode = 'en-us'
disableKinds = ['taxonomy']
title = 'Title'
theme = 'Typo'

googleAnalytics = "G-XXXXXXXXX"


[params]
# Math mode
math = true

# Intro on main page, content in markdown
homeIntro = true
homeIntroTitle = 'Hi!'
homeIntroContent = """
Here is my blog, this supports markdown: 
- a
- b
- c
"""

# Collection to display on home
homeCollectionTitle = 'Posts'
homeCollection = 'posts'

# Pagination size across all website
paginationSize = 100

# Social icons
[[params.social]]
name = "linkedin"
url = "https://www.linkedin.com/in/"

[[params.social]]
name = "medium"
url = "https://medium.com/"

[[params.social]]
name = "github"
url = "https://github.com/"


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
```