if the first card is clicked , just wait for the second card.
if the 2nd card is clicked, compare both cards.
if they match, keep them flipped and add to matchedCards array.
if they don't match, flip them back after a short delay.

logic to keep them flipped if they match:

- use the isMatched state to keep track if the card is matched or not.
- when both cards are flipped, check if they match.
- if they match, set isMatched to true for both cards.
- or set set isFlipped to true for both cards after a delay.
- to set to true there are 2 options:

  - to left isFlipped state in each card component. but the problem is how to acces both crads in order to change that, beacuse click happens in one card only.
  - my idea is to return an object instead of an array when comparing the 2 cards. one is the name of the card and thats how we could and the other is the id of the card component. then we can use that id to find the card component and change its state.
    ex: matchedCards = [ { name: 'pikachu', id: 'card1' }, { name: 'pikachu', id: 'card2' } ]
    then we can use the id to find the card component and change its state.

  - after that if they matched , i add them to an array called matchedCards.
  - all elements of this array has isFlipped = true.

  ***

  Hirarchy of components:

  3 pages:

  - Home page: landing page with a welcome message and a start button to go to the Pokedex page.
  - Pokedex page: displays a grid of Pokemon cards. each card is a FlipCard component.
  - Pokemon Detail page: displays detailed information about a specific Pokemon.
  - Game page: displays the memory match game with FlipCard components.

hierarchy of components:

1. HomePage

   - Navbar
   - WelcomeMessage
   - GoToPokedexButton
   - GoToGameButton

2. PokedexPage

   - Navbar
   - MainLayout
     - - FiltersBar (Search Bar, Filters by Type, etc.)
       - CardsGrid
         - PokemonCard ( Name, Image, Type, etc. )
           -

3. PokemonDetailPage
   - Navbar
   - PokemonDetail ( Stats, Abilities, Moves, etc. )
4. GamePage

   - Navbar

   # Project Structure: Pokémon Daily Friend

## 1. Global Components (Shared)

- **Navbar**: The anchor of the site. Provides consistent navigation and builds trust through familiarity.
- **Footer**: Contains copyright and links; provides a "grounding" feel to the page.

## 2. Page: HomePage

_The "Welcome Center" – friendly, inviting, and clear._

- **WelcomeMessage**: A warm greeting that explains the site's purpose.
- **HeroSection**: A visually pleasing image of a Pokémon to set a friendly tone.
- **NavigationCards**:
  - **GoToPokedexButton**: Directs user to the Pokémon list.
  - **GoToGameButton**: Directs user to the Flip Card game.

## 3. Page: PokedexPage (The Catalog)

_The "Journal" – organized, easy to search, and helpful._

- **MainLayout**: The container for the Pokedex content.
- **FiltersBar**:
  - **SearchBar**: Text input for finding specific Pokémon.
  - **TypeFilter**: Dropdown or buttons to filter by element (Fire, Water, etc.).
- **CardsGrid**: A responsive layout (CSS Grid/Flexbox) to hold the cards.
- **PokemonCard**:
  - Visuals: Name, ID, Image, Type Badges.
  - Style: Soft borders and clear typography to maintain the "friendly" brand.

## 4. Page: GamePage (The Activity)

_The "Mental Break" – engaging, fun, and reliable._

- **ScoreBoard**: Tracks matches and moves.
- **GameBoard (Logic Manager)**: The "brain" that controls the game rules.
  - **CardsGrid**: The physical layout of the game cards.
  - **FlipCard**: The individual card component.
    - **FrontSide**: The "Pokéball" cover.
    - **BackSide**: The hidden Pokémon image.
