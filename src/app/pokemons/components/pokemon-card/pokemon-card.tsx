'use client'

import { Typography } from '@mui/material'
import Image from 'next/image'

import type { PokemonCardProps } from './pokemon-card-types'

import { capitalizeCase, replaceCharacter } from '@/utils'

export const PokemonCard = ({ name, url }: PokemonCardProps) => {
  const pokemonIdRegex = new RegExp(/pokemon\/(?<id>\d*)\//)
  let id = '0'

  const match = url.match(pokemonIdRegex)
  if (match?.groups)
    id = match.groups.id || '0'
  
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <div className='
      flex justify-center flex-col items-center border-2 m-2 p-4 rounded-lg cursor-pointer
      hover:shadow-xl
    '>
      <Image src={imageUrl} width={96} height={96} alt={`Image of ${name}`} />
      <Typography>{capitalizeCase(replaceCharacter(name, '-', ' '))}</Typography>
    </div>
  )
}
