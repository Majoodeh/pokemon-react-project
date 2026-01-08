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

### Usage:

```jsx
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div key="front">
        Front of card
        <button onClick={() => setIsFlipped(true)}>Flip</button>
      </div>

      <div key="back">
        Back of card
        <button onClick={() => setIsFlipped(false)}>Flip</button>
      </div>
    </ReactCardFlip>
  );
}
```

Important rules to remember:

- You must provide 2 children:
  - one for the front of the card (key="front")
  - one for the back of the card (key="back")
- Yo control the flip state using the `isFlipped` prop.
- You can specify the flip direction using the `flipDirection` prop (e.g., "horizontal" or "vertical").

### Props to use:

| Prop Name              | Type     | Description                                                                                                                                                                                                                                                                                                                            |
| ---------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isFlipped`            | boolean  | Controls whether the card is flipped or not. <br> `true` shows the back, `false` shows the front.                                                                                                                                                                                                                                      |
| `flipDirection`        | string   | Specifies the direction of the flip. <br> Can be "horizontal" or "vertical".                                                                                                                                                                                                                                                           |
| `containerStyle`       | object   | Custom styles for the card container.                                                                                                                                                                                                                                                                                                  |
| `cardStyles`           | array    | Array of styles for the front and back cards.                                                                                                                                                                                                                                                                                          |
| `infinite`             | boolean  | If true, allows infinite flipping. what will do is allow the card to be flipped multiple times without any restrictions. so by default, if you set infinite to false, the card will only flip once and then stay in that position. but if you set it to true, you can keep flipping the card back and forth as many times as you want. |
| `flipSpeedFrontToBack` | number   | Sets the speed of the flip animation from front to back (in seconds).                                                                                                                                                                                                                                                                  |
| `flipSpeedBackToFront` | number   | Sets the speed of the flip animation from back to front (in seconds).                                                                                                                                                                                                                                                                  |
| `onFlip`               | function | Callback function that is called when the card is flipped.                                                                                                                                                                                                                                                                             |

---

## Fisher-Yates Shuffle Algorithm

It is an efficient algorithm for shuffling an array randomly.

Logic:

1. Start from the last element of the array and iterate backwards to the second element.
2. For each element at index `i`, generate a random index `j` such that `0 <= j <= i`.
3. Swap the elements at indices `i` and `j`.

4. Start at the end: start with the last element of the array.
5. Pick a random partner (index): generate a random index from 0 to the current index.
6. Swap them: exchange the elements at the current index and the random index.
7. Move backward: You move to the second-to-last item and repeat the process until you reach the beginning.

```javascript
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
```

example arr= [1,2,3,4,5]

- Start with i=4 (value 5), pick random j between 0-4, say j=1 (value 2), swap -> [1,5,3,4,2]
- Next i=3 (value 4), pick random j between 0-3, say j=0 (value 1), swap -> [4,5,3,1,2]
- Next i=2 (value 3), pick random j between 0-2, say j=2 (value 3), swap -> [4,5,3,1,2] (no change)
- Next i=1 (value 5), pick random j between 0-1, say j=1 (value 5), swap -> [4,5,3,1,2] (no change)
- Resulting shuffled array could be [4,5,3,1,2]

so in simple, what this algorithm does is first it picks the last element of the array and then it picks a random element from the array ( that could be the same element that we picked first) and then it swap them. then it moves to the second last element and repeat the process until it reaches the first element of the array.
that means that some elements will be swapped multiple times or not swapped at all. but in the end, the array will be shuffled randomly.
