# Learning Notes

This document contains notes and resources I've gathered while learning and working on the PokemonsProject. It serves as a reference for concepts, tools, and techniques that I've found useful throughout the development process.

## react-card-flip package

- This package is used to create card flip animations in React applications.
- It allows you to easily implement a flip effect for components, which is particularly useful for games like Memory Match.

### Core Ideas:

this package provides a `ReactCardFlip` component that wraps around two child components:

1.  the front and
2.  the back of the card.

When the `isFlipped` prop is set to true, the card flips to show the back component; when false, it shows the front component.

    - back ==> isFlipped = true
    - front ==> isFlipped = false

```jsx
<ReactCardFlip isFlipped={true or false}>
 <FrontComponent />
 <BackComponent />
</ReactCardFlip>

```

### Installation:

To install the package, use npm or yarn:

```bash
npm install react-card-flip
# or
npm install --save react-card-flip
```
