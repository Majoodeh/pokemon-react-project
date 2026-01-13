# Notes

`PROBLEM`: first problem is that the logic or handleClick is inside the card comomnent wich make the card doesnt see the logic or what happens in the other cards.
and as it is said in thinkin in react it is better to put the states in the common parent component. So I have moved the logic to the List component and passed the handleClick function as a prop to the Card component. Now when a card is clicked it calls the handleClick function from the List component
`SOLUTION`: make a new component GameBoard.jsx and move the logic there and import the Card component and use it there. becausei need a common parent component to hold the states and logic of the game.

- inside this component I will import the Card component and use it to render the cards.
  `- I will add an array of pokemons to be used in the game.`
- I will add the logic to handle the game inside this component.
- I will pass the necessary props to the Card component to make it work.
- I will also add a reset button to reset the game.
  `- I will also add arrays [flippedCards and matchedCards] to keep track of the flipped and matched cards.`

`PROBLEM`: when clicking a card, i get its name but that will not be enough to identify as if

`PROBLEM`: problem with the logic of flipping the cards and keeping them flipped when matched.
`SOLUTION`: How to "Keep them Flipped". Instead of a isFixed variable inside the card, think of it like this: A card should show its "Back" (the Pokémon) if:

- It is one of the two cards currently being clicked (flippedCards.includes(id)).

- OR it has already been matched in the past (matchedCards.includes(id)).

Match Logic: (Card1.name === Card2.name) AND (Card1.id !== Card2.id)

- If both conditions are true, add their ids to matchedCards array.



_______

example on how to pass a function as a prop from parent to child component:
Parent Component:
```jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
function ParentComponent() {
  const [message, setMessage] = useState('Hello from Parent!');

  const handleClick = () => {
    alert(message);
  };

  return (
    <div>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}
export default ParentComponent;
```
Child Component:
```jsx
import React from 'react';
function ChildComponent({ onButtonClick }) {
    return (
        <div>
        <button onClick={onButtonClick}>Click Me!</button>
        </div>
    );
    }
export default ChildComponent;
```

the function `handleClick` is defined in the ParentComponent needs to know which card was clicked. this can be happened by passing the card's id or name as an argument to the handleClick function when calling it from the Card component.


a wrapper function: it is a function that "wraps" another function to add some additional functionality or to modify its behavior. In this case.
simple example:
```jsx
function ParentComponent() {
  const handleClick = (cardId) => {
    console.log(`Card with ID ${cardId} was clicked!`);
  };

  return (
    <div>
      <ChildComponent onCardClick={handleClick} />
    </div>
  );
}
function ChildComponent({ onCardClick }) {
  const cards = [{ id: 1, name: 'Card 1' }, { id: 2, name: 'Card 2' }];

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id} onClick={() => onCardClick(card.id)}>
          {card.name}
        </div>
      ))}
    </div>
  );
}
```
In this example, the ParentComponent defines a handleClick function that takes a cardId as an argument. The ChildComponent receives this function as a prop named onCardClick. When rendering the cards, the ChildComponent uses a wrapper function () => onCardClick(card.id) to call the onCardClick function with the specific card's id when a card is clicked.

in my words: the handlClick function has an argument cardId.
when we use onClick={() => onCardClick(card.id)} in the ChildComponent, we are creating a new function that, when executed (i.e., when the card is clicked), will call the onCardClick function (which is actually handleClick from the ParentComponent) with the specific card's id as an argument. This way, the ParentComponent knows exactly which card was clicked based on the id passed to handleClick.