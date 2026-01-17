import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import GameCard from "./GameCard.jsx";
import { mockPokemons } from "../../data/pokemonsDataShorList.js";
import PlayAgainButton from "./PlayAgainButton.jsx";
import WinScreen from "./WinScreen.jsx";

// Utility function to duplicate and shuffle the array
function getDoubleShuffleArray(arr) {
  // this function will take the pokemon array and then return a new array with each pokemon duplicated and shuffled randomly
  const pairedCards = [...arr, ...arr].map((item) => ({ ...item })); // map,because without it it will copy the refernce only and changing one will change the other also and both will share the same id ..

  // Give unique ids and keys to each item
  for (let i = 0; i < pairedCards.length; i++) {
    pairedCards[i].id = i + 1;
    pairedCards[i].key = i + 1;
  }
  //! Imoortant code, just comment it to test the game easily DONT DELETE
  // Shuffling the pairedCards array using Fisher-Yates Shuffle Algorithm
  /*  for (let i = pairedCards.length - 1; i > 0; i--) { //! DONT DELETE THIS CODE 
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i //! DONT DELETE THIS CODE
    [pairedCards[i], pairedCards[j]] = [pairedCards[j], pairedCards[i]]; //! DONT DELETE THIS CODE
  } */
  return pairedCards;
}

//! GameBoard Component
function GameBoard() {
  const [gameCardsCollection, setGameCardsCollection] = useState(() =>
    getDoubleShuffleArray(mockPokemons)
  ); //  gameCardsCollection is an array that holds all the cards for the game board
  // gameCardsCollection will hold the cards for the game board. its structure:
  //  { id: '1a', matchId: 1, imageUrl: '...', isFlipped: false, isMatched: false }
  const [flippedCards, setFlippedCards] = useState([]); // an array that holds the currently flipped cards, max length is 2
  const [disabled, setDisabled] = useState(false); // a boolean to disable clicking when checking for a match

  // console.log("gameCardsCollection", gameCardsCollection);

  //Check if all cards are matched

  // check flipped cards for match
  useEffect(() => {
    if (flippedCards.length === 2) {
      setDisabled(true);

      if (flippedCards[0]?.name === flippedCards[1]?.name) {
        console.log("Match!");

        const openCards = gameCardsCollection.map((card) => {
          //* DONT FORGET: what map does is that it maps through each item in the array, so you need always to tell it what to do with each item even if it doesnt match the condition
          if (
            flippedCards[0].id === card.id ||
            flippedCards[1].id === card.id
          ) {
            return { ...card, isMatched: true };
          } else {
            return card;
          }
        });
        setGameCardsCollection(openCards);
        setDisabled(false);
        setFlippedCards([]);
      } else {
        console.log("No Match!");
        const openCards = gameCardsCollection.map((card) => {
          if (
            flippedCards[0].id === card.id ||
            flippedCards[1].id === card.id
          ) {
            return { ...card, isFlipped: false };
          } else {
            return card;
          }
        });
        setTimeout(() => {
          setGameCardsCollection(openCards);
          setFlippedCards([]);
          setDisabled(false);
        }, 1000);
      }
    }
  }, [flippedCards]);

  //? Handle card click
  function handleClick(cardDetails) {
    //? I think that i need to add a condition in case i want to flip the first card back, because now when i click on the first card, it flips but there is no way to clean the cards from the flippedCards array if i want to flip it back alone.
    console.log("cardDetails", cardDetails);

    console.log("flippedCards", flippedCards);
    console.log(
      "flippedCardsAttri",
      flippedCards[0]?.name,
      "2",
      flippedCards[1]?.name
    );
    // console.log("cardId", cardId);
    // const cardAisFlipped = cardDetails.isFlipped;
    // console.log("cardAisFlipped", cardAisFlipped);

    // check length of flippedCards array
    const cardId = cardDetails.id;
    //2 conditions to ignore the clickon a card if (1) clicking is disabled because the card is already matched or (2) the card is already flipped
    if (disabled) return; // do nothing if clicking is disabled
    // if (flippedCards.find((card) => card.id === cardId)) return; // do nothing if the card is already flipped
    console.log("disabled", disabled);

    // to flip the card when clicking on it

    const openCards = gameCardsCollection.map((card) => {
      // console.log("Card in map 101", card);
      if (card.id === cardId) {
        // card.isFlipped = true;
        card.isFlipped = !card.isFlipped;
      }
      return card;
    });

    setFlippedCards((prev) => [...prev, cardDetails]);
    // console.log("flippedCards", flippedCards);

    // console.log("card", openCards);
    setGameCardsCollection(openCards);

    // console.log(gameCardsCollection);
  }

  /** Reset the Game  */
  function resetGame() {
    setGameCardsCollection(getDoubleShuffleArray(mockPokemons));
    setFlippedCards([]);
    setDisabled(false);
  }

  if (gameCardsCollection.length > 0) {
    const isWin = gameCardsCollection.every((card) => card.isMatched);

    if (isWin) {
      return <WinScreen onReset={() => resetGame()} />;
    } else {
      return (
        <>
          <Navbar />
          <div>GameBoard</div>
          <div className="grid grid-cols-4 gap-4 p-4">
            {gameCardsCollection.map((card) => {
              return (
                <GameCard
                  // key={card.key}
                  {...card}
                  onClick={() => handleClick(card)}
                />
              );
            })}
          </div>
          <PlayAgainButton onClick={() => resetGame()} />

          {/* {isWin ? <WinScreen onReset={() => resetGame()} /> : null} */}
        </>
      );
    }
  } else {
    return <div>Game Is Loading ...</div>; //! Needs to be changed later ....
  }
}

export default GameBoard;
