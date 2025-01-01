---
title: "Appearance"
date: "2024-10-12"
summary: "Appearance parameters"
description: "Appearance parameters"
toc: false
readTime: false
autonumber: true
math: false
showTags: false
---

Typo has a built-in dark and light mode, you can decide the default one and control images on both modes.

## Choosing a Theme

By default the mode in use is auto, if you want, you can hard-code a color scheme.

```toml
[params]
theme = 'auto | light | dark'
```

## Choosing a Color Palette

Typo has the possibility to specify the color palette to use in the theme. The default one is black and white, 
but they can easily be added. 

The color palettes are stored under `assets/css/colors/*` and the one in use can be specified with the following 
patameter: 

```toml
[params]
colorPalette = 'default'
```

Note that omitting the parameter implies using the default palette.

This is the complete list of palettes available: 
- default;
- catpuccin;
- gruvebox;
- eink.

More are to come. 

## Adding a Custom Color Palette

You can add a custom color palette by creating a new file under `assets/css/colors/*` named after your wanted palette name. 
Use another one as base and define the required parameters.

You can then use your new palette, by using its file name in the `colorPalette` site param.

## Hide Header Mode

You can choose to hide the header on every page apart from the homepage with this parameter.

```toml
[params]
hideHeader = true
```

I strongly reccoment enabling [breadcrumbs](#72-breadcrumbs) if you do so.

## Note on Syntax Highlighting

Some color schemes seems to be broken using this theme, for instance, the default one, Monokai, is not well displayed, as pointed out in [this issue](https://github.com/tomfran/typo/issues/17).
I suggest to try [color schemes](https://xyproto.github.io/splash/docs/all.html) and see what can work for you.

```toml
[markup]
[markup.highlight]
style = 'algol'
```

## Footer Customization

One can decide to hide the footer completely or to change it's content by specifiying the following parameters.
Note that if you don't include the following parameters (or leave footerContent empty) the default footer is shown.

```toml
[params]
showFooter = true
footerContent = "Your **custom** md `footer`"
```
