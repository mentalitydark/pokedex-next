'use client'

import { Typography } from '@mui/material'
import Image from 'next/image'

import { textToCamelCase } from '@/functions'

interface PokemonCardProps {
  name: string,
  url: string
}

export const PokemonCard = ({ name, url }: PokemonCardProps) => {
  let id = '0'

  const matchId = url.match(/pokemon\/(?<id>\d*)\//)
  if (matchId?.groups)
    id = matchId.groups.id
  
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <div className='
      flex justify-center flex-col items-center border-2 m-2 p-4 rounded-lg cursor-pointer
      hover:shadow-xl
    '>
      <Image src={imageUrl} width={96} height={96} alt={`Image of ${name}`} />
      <Typography>{textToCamelCase(name)}</Typography>
    </div>
  )
}
