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
parameter: 

```toml
[params]
colorPalette = 'default'
```

Note that omitting the parameter implies using the default palette.

This is the complete list of palettes available: 
- default;
- catpuccin;
- gruvebox;
- eink;
- base16-default;
- base16-eighties;
- base16-ocean;
- base16-mocha;
- base16-cupcake.

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

I strongly recommend enabling breadcrumbs if you do so.

## Code Blocks

**Syntax Highlighting**

The theme supports syntax highlighting.
By default, it uses a slightly modified version of the `bw` theme, defined in `assets/css/syntax-highlighting.css`.
To enable syntax highlighting, add the following to your `hugo.toml`:

```toml
[markup]
[markup.highlight]
noClasses = false
```

The code block background can be changed with the `--code-background-light` and `--code-background-dark` variables in [`custom.css`]({{% relref "advanced-customization.md#custom-css" %}}) or in a [custom color file](#adding-a-custom-color-palette).
Other color schemes, e.g. Monokai, can be applied using [inline styles]: 

```toml
[markup]
[markup.highlight]
noClasses = true
style = 'monokai'
```

Alternatively, you can overwrite the stylesheet with your preferred color scheme using this command:

```shell
hugo gen chromastyles --style monokai > assets/css/syntax-highlighting.css
```

I suggest trying [color schemes](https://xyproto.github.io/splash/docs/all.html) and see what can work for you.

**Line Numbers**

If you want to enable line numbers, use the following, `lineNumbersInTable` is expecially important. 

```toml
[markup]
[markup.highlight]
lineNos = true
lineNumbersInTable = false
```

## Footer Customization

One can decide to hide the footer completely or to change it's content by specifying the following parameters.
Note that if you don't include the following parameters (or leave footerContent empty) the default footer is shown.

```toml
[params]
showFooter = true
footerContent = "Your **custom** md `footer`"
```

[inline styles]: https://neohugo.github.io/content-management/syntax-highlighting/#noclasses