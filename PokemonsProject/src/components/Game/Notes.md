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
