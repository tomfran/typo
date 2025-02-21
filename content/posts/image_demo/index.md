+++
title = 'Image_demo'
date = 2025-02-20T21:31:26+01:00
draft = false
+++

These are PNG and JPG versions of [this image](https://tomfran.github.io/posts/hugo-images/dark.webp) from your blog, as well as the original version loaded as an external resource (third image). Feel free to experiment in this MD file with the new tags:

- `#eager`
- `#lazy`
- `#nowebp`
- `#nocompress`

The detailed workings are explained below.

![](dark.png "First image, loaded \"eager\" by default")

![](dark.jpg "Second image, loaded \"lazy\" by default")

![](https://tomfran.github.io/posts/hugo-images/dark.webp "Third image, an external resource, also loaded lazily")

By default, the first image gets a `loading="eager"` tag. This is to prevent [Cumulative Layout Shifts](https://web.dev/articles/cls), where the content shifts while resources are being loaded. The following images get a `loading="lazy"` tag, to be loaded later.

This can be overridden with `#lazy` and `#eager` tags, to force one of those modes. A good rule of thumb is to load all images that are visible on load eagerly, the rest lazily.If the image resource is external (starting with `http://` or `https://`) or an SVG, then that's it. The image will be loaded unaltered, in full.

Local resources, however, get a special treatment.

The main content width is now set to 720px. The body width is padded with `var(--main-padding)` on both sides. This makes sure the content always has a known width. By default the images are resized to a width of 720px using the [Lanczos](https://gohugo.io/content-management/image-processing/#resampling-filter) resampling filter, and converted to WEBP.

```toml
{{ $imgResource = $imgResource.Resize "720x webp q75 Lanczos" }}
```

This dramatically reduces image sizes without needing to convert them beforehand.

> The original first two images are 1.5Mb and 4.8MB, respectively. With resizing and image compression, the images are ~18.2kb each.

The converted images are stored in the `resources/_gen` folder, as well as copied into `public/posts/image_demo/`. It is not always desirable to compress images, of course. Sometimes you want visitors to download an image at original resolution or format, or not force small images to fill the screen. The compression can be disabled with the `#nowebp` tag, the resizing with `#noresize`.

Normally I would opt for explicit image conversions, e.g. with a `#webp` tag, or `#resize`. In this case, however, the gains are so large that I'm leaning towards compressing by default. Once an author sees that the quality or format is not as desired, they can always switch it off.

For more fine-grained control, I could imagine setting the compression quality with a tag `#qX`, with `1<X<100`, e.g. `q50` for higher compression, or `q90` for better quality. The default is, for now, hard-coded to `q75`.
