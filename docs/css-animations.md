# CSS Animations Learnt

## Marquee Effect
### Basics

This was implemented in the index page (the main page) in the **Cat Portfolito**.

Three step process:
1. Duplicate content you want to scroll through
2. Animate a translation of the content (X coordinate or Y coordinate)
3. Loop it infinetly (connect to have smooth transition)

Due note to hide overflow.

### CSS Code

There will be two divs in your html code. The outer will be called "wrapper" (the box of this effect) and the inner one will be called "tracker" (where the actual animation will be).

For the wrapper:
```css
.wrapper {
    overflow: hidden;
}
```
This make sures that in the box where the animation will occur will does not show any content outside of the desired box (whether the width is `width: 100%` or another value).

For the tracker:
```css
.tracker {
    display: flex;
    width: max-content;
    animation: scroll 10s linear infinite;
}
```

First, we decide to display our content horizontally (besides each other) rather than the default "stacked on top of another" display that HTML has; we do this using `display: flex;`

Since this is where the actual animation will take place, we don't want to delete any overflow (as it will be used). So, instead of having a set width, we'll tell that the width will be as big as the content needs to be: `width: max-content`.

Lastly, we call the scroll animation (which we'll define up next) that lasts 10s constantly (linearly, rather than fading out/in). This animation is told to be infinite. All this is in the one line of CSS `animation: scroll 10s linear infinite`.

Now, a function needs to be called for the scroll. You need to define what 'scroll' means to you. For the Marquee Effect, it means a horizontal translation to the right. So, this can be described as the content in the tracker translating through the X-coordinate. 

```css
@keyframes scroll {
    from { transform: translateX(0) }
    to { transform: translate(-50%) }
}
```

Now, if you followed the steps and this CSS code, you should have the Marquee Effect!