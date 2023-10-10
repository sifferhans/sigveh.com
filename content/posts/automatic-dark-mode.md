---
title: Automatic Dark Mode
description: Dark mode is the new hot thing, but did you know you can let the browser take care of it?
categories: [css]
date: 2023-10-10
---

**Dark mode** is a concept which has gained a lot of traction the last few years, as users want more control over their web-surfing experience. As more and more people implement darker versions of their products and websites, an expectation is established amongst every user that we should be able to choose which path to walk; the light or the dark. That last statement might be a bit exaggerated, but I trust I got the point across.

## Dark mode, the easy way

If your dark mode implementation needs to closely align to your branding, or if it has entirely different content than it's light counterpart, this tip might not work as well as you'd want it to. But if your plan is to change a few colors and call it a day, this might be the shortest path to the goal for you.

```css
html {
  color-scheme: light dark;
}
```

This simple block of CSS makes the browser align to your systems color-scheme preferences, and some of the colors on the site will change accordingly. If no other css rules have been applied to specify background color or text color, the browser will use appropriately contrasted colors for both.

I created a simple [css reset](https://github.com/sigveh/css) with this built-in, if that is of interest.