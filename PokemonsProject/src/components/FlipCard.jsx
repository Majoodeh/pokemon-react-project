import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import pokeballImg from "../imgs/pokeball.avif";
import charmanderImg from "../imgs/charmander.png";

const mockPokemons = {
  name: "Bulbasaur",
  type: ["Grass", "Poison"],
  total: 318,
  hp: 45,
  attack: 49,
};
function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]); // an array of 2 items length, to keep track of the 2 flipped cards
  const [matchedCards, setMatchedCards] = useState([]); // an array to keep track of matched cards

  function handleClick(e) {
    // what will this function do?
    // 1.Toggle the flipped state
    // 2. check if it is first or second card clicked
    // 3. if second card, check if it matches the first card
    // 4. if match, keep them flipped, else flip them back after a delay
    // 4.1 keep them flipped by setting a state variable 'isMatched' to true
    // 4.2 flip them back by setting a timeout to change 'isFlipped' back to false
    // 5. reset the state variables for the next turn
    //6. disable clicking on other cards when two cards are already flipped and waiting for the timeout to flip back. or isFixed is true.
    //7. array to keep track of flipped cards
    //8. array to keep track of matched cards[2 elements]
    //* ********************

    const target = e.currentTarget;

    // check length of flippedCards array
    if (flippedCards.length >= 2) {
      return; // do nothing if already 2 cards are flipped
    }

    // change the isFlipped state
    setIsFlipped(!isFlipped);

    // add the card to the FlippedCards array
    setFlippedCards((prev) => [...prev, target.getAttribute("name")]);

    // check if there are 2 cards flipped
    if (flippedCards.length === 2) {
      // check if the cards names match
      if (flippedCards[0] === flippedCards[1]) {
      }
    }
  }

  return (
    <div
      className="flex justify-center items-center h-screen"
      name={mockPokemons.name}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          key="front"
          className="relative w-60 h-60 min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px] rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white"
          onClick={() => setIsFlipped(true)}
        >
          {/* THE IMAGE: 'absolute' + 'inset-0' forces it to stay inside the box */}
          <img
            src={pokeballImg}
            alt="Small card"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* THE SHADOW */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.1,
            }}
          ></div>
        </div>

        {/* back side of the card */}

        <div
          key="back"
          className="relative w-60 h-60 min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px] rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white"
          onClick={() => setIsFlipped(false)}
        >
          {/* THE IMAGE: 'absolute' + 'inset-0' forces it to stay inside the box */}
          <img
            src={charmanderImg}
            alt="Small card"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* THE SHADOW */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.1,
            }}
          ></div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default FlipCard;

//?   <button onClick={() => setIsFlipped(true)}>Flip</button>
// Logic
// onclick on the card, to toggle isFlipped state
// there will be an array that its liength is only 2, and when a card is clicked, we push its name to the array. first element is the first card and the second element is the 2nd card.
// when the array length is 2, we compare the two elements, if they are the same, we keep them flipped, else we flip them back after a short delay.
// how to keep them flipped?
// I am thinking of using another state variable called isFixed, and i will add a condition to the flip logic, if isFixed is true, we dont flip the cards back. or we fixed on the back side.
// everthing we happen in the onClick function.
// we check if the array length is less than 2, if yes, we push the card name to the array and flip the card.
// if the array length is 2, we compare the two elements. if they are the same, we set isFixed to true, else we set a timeout to flip them back after a short delay (maybe 1 second), and then we clear the array for the next turn.
// also add disable clicking on other cards when two cards are already flipped and waiting for the timeout to flip back. or isFixed is true.
//! when should the game finish?
// I use another state variable called matchedCards, which is start with 0. every time there is a match, I increment this variable by 1. when matchedCards reaches totalMatches (half of the total number of cards), we show a message that the game is finished.
// what else should i consider?
// Reset button to restart the game.
//
// I
