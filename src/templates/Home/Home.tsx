'use client'

import { CircularProgress, TextField } from '@mui/material'
import { useState } from 'react'
import { uuid } from 'uuidv4'

import { PokemonCard } from '@/components/app/home'

import { usePokemons } from './use-pokemons'

function filterPokemons(pokemons: {name: string, url: string}[], pokemonName: string): {name: string, url: string}[] {
  return pokemons.filter(pokemon => pokemon.name.includes(pokemonName))
}

export const Home = () => {
  const { isLoading, data } = usePokemons()
  const [pokemonName, setPokemonName] = useState<string>('')

  if (isLoading || !data) {
    return (
      <div className='flex justify-center items-center h-full'>
        <CircularProgress />
      </div>      
    )
  }

  const pokemonsFiltered = filterPokemons(data.results, pokemonName)

  return (
    <div className='flex justify-center items-center flex-col pt-3'>
      <TextField
        id='pokemon-name'
        label='Pokemon name'
        variant='standard'
        value={pokemonName}
        type='text'
        onChange={event => setPokemonName(event.target.value)}
        className='mb-6 text-xs'
      />

      <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
        {pokemonsFiltered.map((pokemon) => (
          <PokemonCard key={uuid()} name={pokemon.name} url={pokemon.url}/>
        ))}
      </div>

    </div>
  )
}
