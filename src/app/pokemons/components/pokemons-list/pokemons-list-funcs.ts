import type { Pokemon } from './pokemons-list-types'

export function filterPokemon(data: Pokemon[], name: string): Pokemon[] {
  return data.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
}
