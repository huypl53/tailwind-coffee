# Event

- All event are triggered from outside to inside element
  > To listen to `onClick()` outside component, get `event` in `document`'s click, then check `element.contains(e.target)`

# Elements

- `element.classList.toggle("className")` // Add or remove className from element

# Style

- bg
- letter spacing:
  - tracking-\*

# Q&A

- If child has width or height that is greater than parent's ones, the margin is calculated for the parent

- Ways to make element center

```css
/* using margin */
margin-left: auto;
margin-right: auto;

/* using flex */
display: flex;
align-items: center;

/* align with parent's postion and align itself */
position: absolute
left: 50% /* 50% parent width */
transform: translate(-50%) /* translate itself by 50% of its border-box * /
```

- Grid elements

```css
/* gap */

/* n-columns */
```

- Animation philosophy

```css
/* @keyframes defines the states of element state by state 
  `animation` defines the way to present @keyframes: timing, how it emerges then disappears
*/
```

- Make a mask above element
  > put a <a/> inside that element. Inside that <a/> put a <div/> with full width and full height
  > Put a block inside an inline?
