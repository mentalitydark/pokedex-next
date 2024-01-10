'use client'

import { MenuItem, TextField } from '@mui/material'

import { PokemonsList } from '@/app/pokemons/components'
import { Select } from '@/components'

import { usePokemonPage } from './use-pokemon-page'

export const PokemonPage = () => {
  const {
    pokemonName,
    onChangeNameEvent,
    generation,
    onChangeSelectEvent,
    limit,
    offset
  } = usePokemonPage()

  return (
    <div className='flex justify-center items-center flex-col pt-3 mt-4'>
      <div className='flex flex-row justify-between w-1/2 max-md:flex-col max-md:items-center max-md:w-full max-md:px-4'>
        <TextField
          id='pokemon-name'
          type='text'
          label='Search pokemon by name...'
          variant='standard'
          className='w-1/2 max-md:w-full max-md:!mb-4'
          value={pokemonName}
          onChange={onChangeNameEvent}
        />
        <Select
          id='pokemon-generation'
          label='Generation of Pokemons'
          variant='standard'
          className='w-1/4 max-md:w-full'
          value={generation}
          onChange={onChangeSelectEvent}
        >
          <MenuItem value={0}>Generation I</MenuItem>
          <MenuItem value={1}>Generation II</MenuItem>
          <MenuItem value={2}>Generation III</MenuItem>
          <MenuItem value={3}>Generation IV</MenuItem>
          <MenuItem value={4}>Generation V</MenuItem>
          <MenuItem value={5}>Generation VI</MenuItem>
          <MenuItem value={6}>Generation VII</MenuItem>
          <MenuItem value={7}>Generation VIII</MenuItem>
          <MenuItem value={8}>Generation IX</MenuItem>
        </Select>
      </div>
      <PokemonsList pokemonName={pokemonName} limit={limit} offset={offset} />
    </div>
  )
}
