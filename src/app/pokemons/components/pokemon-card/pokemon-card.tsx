'use client'

import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import type { PokemonCardProps } from './pokemon-card-types'

import { capitalizeCase, replaceCharacter } from '@/utils'

export const PokemonCard = ({ name, url }: PokemonCardProps) => {
  const [error, setError] = useState<boolean>(false)

  const pokemonIdRegex = new RegExp(/pokemon\/(?<id>\d*)\//)
  let id = '0'

  const match = url.match(pokemonIdRegex)
  if (match?.groups)
    id = match.groups.id || '0'

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  const fallBackImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <Link href={`/pokemons/${id}`}>
      <div className='
        flex justify-center flex-col items-center border-2 m-2 p-4 rounded-lg cursor-pointer
        hover:shadow-xl
      '>
        <Image
          src={error ? fallBackImageUrl : imageUrl}
          width={96}
          height={96}
          alt={`Image of ${name}`}
          onError={() => setError(true)}
        />
        <Typography variant='body1'>{capitalizeCase(replaceCharacter(name, '-', ' '))}</Typography>
        <Typography variant='overline'>#{id}</Typography>
      </div>
    </Link>
  )
}
