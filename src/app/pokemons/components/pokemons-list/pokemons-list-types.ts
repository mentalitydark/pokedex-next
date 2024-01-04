export interface Pokemon {
  name: string
  url: string
}

export interface APIResponsePokemons {
  count: number
  next?: string
  previous?: string
  results: Pokemon[]
}

export interface UsePokemonsListProps {
  limit?: number
  offset?: number
}

export interface PokemonsListProps {
  pokemonName: string
  limit?: number
  offset?: number
}
