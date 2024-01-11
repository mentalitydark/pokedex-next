export interface PokemonProps {
  id: string
}

export interface APIResponsePokemon {
  id: number
  height: number
  base_experience: number
  weight: number
  name: string
  order: number
  types: Type[]
  stats: Stat[]
  sprites: Sprites
  species: NamedAPIResource
  moves: Move[]
  forms: NamedAPIResource[]
  abilities: Ability[]
}

interface NamedAPIResource {
  name: string
  url: string
}

interface Type {
  slot: number
  type: NamedAPIResource
}

interface Stat {
  base_stat: number
  effort: number
  stat: NamedAPIResource
}

interface Sprites {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
  other: Other
}

interface Other {
  dream_world: {
    front_default?: string
    front_female?: string
  }
  home: {
    front_default?: string
    front_female?: string
    front_shiny?: string
    front_shiny_female?: string
  }
  'official-artwork': {
    front_default: string
    front_shiny: string
  }
  showdown: {
    back_default?: string
    back_female?: string
    back_shiny?: string
    back_shiny_female?: string
    front_default?: string
    front_female?: string
    front_shiny?: string
    front_shiny_female?: string
  }
}

interface Move {
  move: NamedAPIResource
}

interface Ability {
  ability: NamedAPIResource
  is_hidden: boolean
  slot: number
}

