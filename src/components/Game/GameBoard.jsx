import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import GameCard from "./GameCard.jsx";
import PlayAgainButton from "./PlayAgainButton.jsx";
import WinScreen from "./WinScreen.jsx";
import useFetchUrl from "../Hooks/useFetchUrl.js";

/** SHUFFLE LOGIC
 * iT Takes an array of 8 Pokémon, doubles them to 16, and shuffles them
 * using the Fisher-Yates algorithm.
 */
function getDoubleShuffleArray(arr) {
  // Function to duplicate and shuffle the array
  const pairedCards = [...arr, ...arr].map((item) => ({ ...item }));

  // Give unique ids and keys to each item //! Needs to be change in the future, it is not a good to do it like this
  for (let i = 0; i < pairedCards.length; i++) {
    pairedCards[i].id = i + 1;
  }

  // Shuffling the pairedCards array using Fisher-Yates Shuffle Algorithm
  for (let i = pairedCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [pairedCards[i], pairedCards[j]] = [pairedCards[j], pairedCards[i]];
  }
  return pairedCards;
}

// GAME BOARD COMPONENT
function GameBoard() {
  //  ------- State Management && Data Fetching --------
  const [offset] = useState(() => Math.floor(Math.random() * 1000));
  const { data, loading, error } = useFetchUrl(
    `https://pokeapi.co/api/v2/pokemon?limit=8&offset=${offset}`
  );

  const [gameCardsCollection, setGameCardsCollection] = useState([]); // All cards for the game //  { id: '1a', matchId: 1, imageUrl: '...', isFlipped: false, isMatched: false }

  const [flippedCards, setFlippedCards] = useState([]); // Track currently flipped cards | max 2 cards
  const [disabled, setDisabled] = useState(false); // Disable clicking when checking for match or during timeout
  const [initialCards, setInitialCards] = useState([]); // To store the initial set of cards (8 cards)

  // ------ INITIALIZE GAME CARDS ------
  // Transform fetched data into game cards when data is available and starts the game
  useEffect(() => {
    if (!data?.results) return;

    const cards = data.results.map((pokemon) => {
      const id = pokemon.url.split("/").at(-2);

      return {
        name: pokemon.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        isFlipped: false,
        isMatched: false,
      };
    });
    setInitialCards(cards);
    setGameCardsCollection(getDoubleShuffleArray(cards));
  }, [data]);

  // ------- GAME Matching LOGIC -------
  // Runs whenever flippedCards changes, checks if 2 cards are flipped and compares them for match, and updates game state accordingly
  useEffect(() => {
    if (flippedCards.length === 2) {
      setDisabled(true);

      if (flippedCards[0]?.name === flippedCards[1]?.name) {
        // It's a Match, then update the gameCardsCollection to mark these cards as matched
        const openCards = gameCardsCollection.map((card) => {
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
        // No match found, flip the cards back after a short delay
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
        }, 2000);
      }
    }
  }, [flippedCards]);

  // ------- HANDLE USER CLICK ON A CARD -------
  function handleClick(cardDetails) {
    if (cardDetails.isFlipped || cardDetails.isMatched || disabled) return;

    // check length of flippedCards array
    const cardId = cardDetails.id;

    if (disabled) return; // do nothing if clicking is disabled

    // Flip the clicked card by updating its isFlipped property
    const openCards = gameCardsCollection.map((card) => {
      if (card.id === cardId) {
        return { ...card, isFlipped: true };
      }
      return card;
    });

    setFlippedCards((prev) => [...prev, cardDetails]);

    setGameCardsCollection(openCards);
  }

  /** Reset the Game  */
  function resetGame() {
    setGameCardsCollection(getDoubleShuffleArray(initialCards));
    setFlippedCards([]);
    setDisabled(false);
  }

  // ------- RENDERING LOGIC -------
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  if (gameCardsCollection.length > 0) {
    const isWin = gameCardsCollection.every((card) => card.isMatched);

    if (isWin) {
      return <WinScreen onReset={() => resetGame()} />;
    } else {
      return (
        <>
          <Navbar />
          <div className="h-[calc(100vh-(--spacing(24)))] w-full bg-slate-900 flex items-center justify-center p-4 md:p-8 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-7xl h-full">
              {/* Sidebar: Title & Controls */}
              <div className="flex flex-col items-center lg:items-start space-y-6 lg:w-1/4">
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-sm">
                    POKÉMON
                  </h1>
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase">
                    Memory Game
                  </h2>
                </div>
                <PlayAgainButton onClick={() => resetGame()} />
              </div>

              {/* Game Board  */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 shadow-[0_0_50px_rgba(192,38,211,0.2)]">
                <div className="bg-slate-900 rounded-[22px] p-3 md:p-6">
                  <div
                    className="grid grid-cols-4 grid-rows-4 gap-2 md:gap-4 
                       w-[85vw] h-[85vw] 
                       sm:w-[70vw] sm:h-[70vw] 
                       lg:w-[75vh] lg:h-[75vh] 
                       max-w-[600px] max-h-[600px]"
                  >
                    {gameCardsCollection.map((card) => (
                      <GameCard
                        key={card.key}
                        {...card}
                        onClick={() => handleClick(card)}
                        className="w-full h-full object-contain"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default GameBoard;
