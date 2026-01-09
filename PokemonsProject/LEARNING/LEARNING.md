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

---

## Thinking In React:

source: https://react.dev/learn/thinking-in-react

First, break the UI into a smaller pieces called components.

Next, you need to describe the different states of a component. this means to list all the ways that a component can look depending on the data or user actions. <br>
as an example, a `search bar`can have different states like:

- Empty (when the user has not typed anything yet)
- Typing (when the user is typing something)
- Loading (when the search results are being fetched)
- Error (when there is an error fetching the results)
- Results (when the search results are displayed)
  These are the visual states of the component.

Finally, Finally, you will connect your components together so that the data flows through them. <br>
You connect components by passing data from parent to child using props so the UI stays in sync.

Step by step process to build a React app:

Step 1: Break the UI into a component hierarchy

- a component should ideally only be concerned with one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

![alt text](image.png)

this image shows how to break down a complex UI into smaller components.
The core React mindset: break things into small pieces, pass data through props, and keep logic clean.
What we learn from this image is:

- How to split a UI into React components

- Each part of the app has a clear job

- Data flows top → down (from parent to child)

- You can filter and display data based on user input

- Visual structure helps you plan your code before writing it

Step 2: Build a static version in React

`Building a static version requires a lot of typing and no thinking, but adding interactivity requires a lot of thinking and not a lot of typing.`

To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props.

don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.

You can either build “top down” by starting with building the components higher up in the hierarchy (like FilterableProductTable) or “bottom up” by working from components lower down (like ProductRow). In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up.

There are 2 way to build the static version:

1. top-down: start from the top-level component and work your way down to the leaf component, or start from the parent component and work your way down to the child components.
2. bottom-up: start from the leaf component and work your way up to the top-level component, or start from the child component and work your way up to the parent components.

.
.
.
.
.
.
.
.
.

### ! NOTES ! :

Component Composition and Project Structure.

- One Component per File

- The "Nesting" (Parent -> Child -> Grandchild):
  - Parent Component
    - Child Component
      - Grandchild Component

```javascript
// ONE: The smallest part (The Lightbulb)
function One() {
  return <span>Light is On!</span>;
}

// TWO: The parent (The Lamp)
function Two() {
  return (
    <div>
      <h3>I am a Desk Lamp</h3>
      <One /> {/* Component ONE is nested inside TWO */}
    </div>
  );
}

// THREE: The grandparent (The Living Room)
function Three() {
  return (
    <section>
      <h1>Welcome to my Room</h1>
      <Two /> {/* Component TWO is nested inside THREE */}
    </section>
  );
}
```

in the above example, we have 3 components: One, Two, and Three.

in the example we can see the concept of component composition, where smaller components are combined to create larger, more complex components.

Step 3: Find the minimal but complete representation of UI state

You should only put something in state if your app needs to remember it AND it cannot be calculated from something else.

The 4 pieces of data (simple version)

1. Original list of products

- Does it change? → No
- Is it passed as props? → Yes  
  ➡️ Not state

2. Search text

- Does it change? → Yes
- Can you calculate it from something else? → No  
  ➡️ State

3. Checkbox value

- Does it change? → Yes
- Can you calculate it from something else? → No  
  ➡️ State

4. Filtered list

- Does it change? → Yes, but…
- Can you calculate it from other data? → Yes  
  (You filter the original list using search text + checkbox)
  ➡️ Not state

the rules to determine if something is state or not:<br>
the 3-question checklist. If the answer to any of these is "Yes," it is not state:

Is it passed from a parent via props? If yes, it’s not state.

Does it remain unchanged over time? If yes, it’s not state.

Can you compute it from other state or props? If yes, it’s not state.

Step 4: Identify where your state should live

- After identifying the app’s minimal state data, you need to identify which component is responsible for changing this state, or owns the state. so in simple words, you need to find the component that will manage the state and pass it down to other components as props.

- `Remember`: React uses one-way data flow, passing data down the component hierarchy from parent to child component.

  - - `"data  goes from parent to child only."`

- How to decide which component should own the state:

  1. Identify every component that renders something based on that state.
  2. Find their closest common parent component—a component above them all in the hierarchy
  3. Decide where the state should live:
     a- Often, you can put the state directly into their common parent.
     b- You can also put the state into some component above their common parent.
     c- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

- to detrmine where the state should live, follow these steps:
  - Identify every component that renders something based on that state.

---

What is till need to be learned:

- The parent-child component communication in React.
- https://react.dev/learn
