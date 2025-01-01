---
title: "Homepage"
date: "2024-10-14"
summary: "Homepage parameters"
description: "Homepage parameters"
toc: false
readTime: false
autonumber: true
math: false
showTags: false
---

The homepage offers minimal customization options, you can specify an intro, a collection to display, and social icons.

## Intro Section

By setting those two parameters in your `hugo.toml` config you can control the text to display after the header on the homepage. Note that the body is interpreted as markdown.

```toml
[params]
homeIntroTitle = 'Hi!'

homeIntroContent = """
I am an Italian Software Engineer with a strong foundation in computer science and a passion for solving complex problems. 
I am interested in a range of topics, including algorithms, distributed systems, databases, and information retrieval.
"""
```

Note that you can omit one of the two if you want.

## Social Icons

You can include social icons after the intro like follows.

```toml
[[params.social]]
name = "linkedin"
url = "https://www.linkedin.com/in/user/"

[[params.social]]
name = "medium"
url = "https://medium.com/@user"
```

If some icons are missing, feel free to open a request or a PR.
## Display a Collection

You can decide to include a collection in your homepage:

```toml
[params]
homeCollectionTitle = 'Posts'
homeCollection = 'posts'
```

The above example includes the `/posts` collection. Note that you can omit the title if you prefer.
