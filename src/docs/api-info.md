# API INFORMATION:

1. Pokemon endpoint:

`https://pokeapi.co/api/v2/pokemon/{id or name}`

- Example: https://pokeapi.co/api/v2/pokemon/1/
- Example: https://pokeapi.co/api/v2/pokemon/pikachu

- This endpoint provides detailed information about a specific Pokémon, including its stats, abilities, types, and sprites.

-This gives you: [ name, sprites, stats, types, abilities, moves, height/weight ] everything you need for a Pokémon card or list

2. Pokémon list (pagination)
   `https://pokeapi.co/api/v2/pokemon?limit={number}&offset={number}`

- Example: https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
- This endpoint provides a paginated list of Pokémon with their names and URLs to their detailed information.

3. Types (for filters):

- `https://pokeapi.co/api/v2/type`

This gives you a list of all Pokémon types, which can be used for filtering.:
[fire, water, grass, electric, etc.]

### Images api:

- `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png`

- for the card game:
  `sprites.other["official-artwork"].front_default` gives a better image for cards.
- Example: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png (Pikachu)
