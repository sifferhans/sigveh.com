---
title: Masonry Layout with CSS
description: Masonry layout is one of the most requested CSS features, but did you know we can already do it? Kinda.
categories: [css]
date: 2022-08-11
---

One time I was exploring different kinds of layouts for HTML content, I found out about the masonry grid. I first saw it on Pinterest, and it looked so cool and fluid, like a game of Tetris for images. I started researching how it could be done, it couldn't be that difficult, right? CSS was powerful enough to make this work, right? Well, not quite.

## What is masonry?

Masonry layout is a type of grid layout where the items are placed out in the inline direction. When they wrap to the next line, the items will automatically fill in any gaps left by the first row of items. This is in stark contrast to how CSS grids work today, where the second row of items does not bleed into the first.

Todays CSS grid solution doesn't have the ability to dynamically place items in the spaces left by the previous row, at least not without some amount of javascript involved in the process. Thus, I present to you the solution to all of the aforementioned problems; [CSS columns](https://developer.mozilla.org/en-US/docs/Web/CSS/columns).

## The solution

CSS columns have been around for a good while now. And while the property has mostly been used for typography and textual content, it can just as well be used for laying out images or cards in a layout similar to masonry.

```css
.masonry {
  columns: 3;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Pay attention to the direction the items are laid out in. Using grid, the items are placed in the inline direction. With columns however, the items are placed in the block direction. It looks like a masonry layout, but it doesn't quite function like one. Remember, masonry layouts are still supposed to be laid out in the inline direction; from left to right.

## Conclusion

As you can see, we can already get veeery close to masonry layouts with pure CSS, and if you just like the look of the Tetris-ish nature of the masonry layout, you can most likely just use CSS columns and be as happy as ever. But if you are dependant on the inline flow of masonry layout, you are just gonna have to get some javascript involved for now.

[There are, however, plans in motion to get masonry layouts natively supported in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout). The spec is only supported in Firefox at the moment, but we can only hope the other browsers jump on the masonry-train soon enough.
