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

## Custom Fonts

Typo ships with a preset selection of Fonts by default which is used across the theme. You are free to bring your own fonts or load from Google Fonts. To make sure Typo can load them optimally, follow the instructions below.

### Configure font names

Create the file `assets/custom.css` if not already created in your Hugo site project and add the following:

```css
:root {
    --font-body: 'body-font';
    --font-mono: 'mono-font';
}
```

Replace `body-font` and `mono-font` above with the correct name of your fonts.

### Loading local fonts (skip this if using Google Fonts)

Typo can preload your local font files if you configure them appropriately.

1. Create `assets/themes/fonts` directory within your Hugo site project and copy over your custom fonts into this directory.
2. Create `assets/css/fonts.css` file and define [`@font-face` rules](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) for your custom fonts. You can refer to font paths like `/fonts/some-font-file-name.extension`.
3. Run/build your project.

You will see that the built site has `<link rel="preload">` tags added for your font files and the contents of your `assets/css/fonts.css` would have been injected inside a `<style>` tag placed inside the `<head>`.

### Loading Google Fonts / 3rd Party Fonts

We recommend copying the `<link>` embed code from Google Fonts or similar third-party font hosting services for your chosen fonts and placing them inside `layouts/partials/hooks/head_start.html` within your Hugo site project. These typically included relevant optimizations and CSS `@font-face` definitions.

Additionally, **you must** also create an empty `assets/themes/fonts.css` file so that the default theme fonts are not preloaded and loaded.

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

## Note on Syntax Highlighting

The theme supports syntax highlighting, and you can specify the theme as follows: 

```toml
[markup]
[markup.highlight]
style = 'algol'
```

`algol` is the recommended theme, and for it to work, the background-color of the code 
elements is enforced.
This has the side effect of breaking other color schemes, e.g. Monokai. 

You can make them work by removing `!important` from the background color of the code pre elements.

I suggest trying [color schemes](https://xyproto.github.io/splash/docs/all.html) and see what can work for you.

## Footer Customization

One can decide to hide the footer completely or to change it's content by specifying the following parameters.
Note that if you don't include the following parameters (or leave footerContent empty) the default footer is shown.

```toml
[params]
showFooter = true
footerContent = "Your **custom** md `footer`"
```
