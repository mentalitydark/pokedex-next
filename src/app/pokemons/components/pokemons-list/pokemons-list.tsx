'use client'

import { CircularProgress } from '@mui/material'
import { useEffect } from 'react'
import { v4 } from 'uuid'

import type { PokemonsListProps } from './pokemons-list-types'

import { PokemonCard } from '@/app/pokemons/components/pokemon-card'

import { filterPokemon } from './pokemons-list-funcs'
import { usePokemonsList } from './use-pokemons-list'

export const PokemonsList = ({ pokemonName, limit, offset }: PokemonsListProps) => {
  const { query } = usePokemonsList({ limit: limit || 151, offset: offset || 0 })

  useEffect(() => {
    query.refetch()
  }, [limit, offset])

  if (query.isLoading) {
    return (
      <div className='mt-6 flex justify-center items-center h-full'>
        <CircularProgress />
      </div>
    )
  }

  if (!query.data?.results) {
    return (
      <div className='mt-6 flex justify-center items-center h-full'>
        <span>Pokemons not found</span>
      </div>
    )
  }

  const pokemonsFiltered = filterPokemon(query.data.results, pokemonName)

  return (
    <div className='mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
      {pokemonsFiltered.map((pokemon) => (
        <PokemonCard key={v4()} name={pokemon.name} url={pokemon.url}/>
      ))}
    </div>
  )
}
