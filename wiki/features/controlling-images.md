---
title: "Controlling Images"
date: "2024-10-11"
summary: "Controlling Images parameters"
description: "Controlling Images parameters"
toc: false
readTime: false
autonumber: true
math: false
showTags: false
---

## Dark and Light Mode Images

Sometimes images don't look good in both light and dark mode. You can annotate the import path with a special tag to ensure an image is only shown on a specific color scheme.

```md
![sstable](sstable-l.webp#light)
![sstable](sstable-d.webp#dark)
```

In the above example, the light image is a transparent background with dark lines, while the dark one has light ones.

If you omit the `#dark` or `#light` tags an image is always shown.

## Images Sizing

There exist two tags to control sizing:
- `#small`: the image takes 80% of the original scale.
- `#full`: the image takes up all the available screen width.

You can also specify a caption using the following form: 

```
![alt text](path.png#dark#small "Caption text")
```

I understand everyone could want a different scale for small images, you can override the default small class in your custom CSS:

```css
.img-small img {
 scale: 80%;
}
```

[Here](https://tomfran.github.io/posts/hugo-images/) you can find a blog post showing different tags combinations.

## Adding new Image Tags

All tags are assumed to be related to an image class, which applies styling for the figure environment.

You can add a new one, provided you add a class named `img-<tag_name>`.

Feel free to have a look at existing ones to have a grasp on how they work.
