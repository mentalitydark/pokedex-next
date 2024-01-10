import { Chip, CircularProgress, Divider, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { v4 } from 'uuid'

import type { PokemonProps } from './pokemon-types'

import { Ability, Attribute } from '@/app/pokemons/[id]/components'
import { capitalizeCase, leftFillNumber, replaceCharacter } from '@/utils'

import { usePokemon } from './use-pokemon'

export const Pokemon = (props: PokemonProps) => {
  const { query: { data, isLoading } } = usePokemon(props)

  if (isLoading)
    return (
      <div className='mt-6 flex justify-center items-center h-full'>
        <CircularProgress />
      </div>
    )
  
  if (!data)
    return (
      <div className='mt-6 flex justify-center items-center h-full'>
        <span>Pokemon not found</span>
      </div>
    )

  const imageUrl = data.sprites.other['official-artwork'].front_default || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
  const imageIsOfficialArtwork = Boolean(data.sprites.other['official-artwork'].front_default)

  return (
    <div className='flex justify-center flex-col'>
      <Stack direction='row' spacing={1} mb={4} alignItems='center' justifyContent='center'>
        <Typography align='center' variant='h3'>{capitalizeCase(replaceCharacter(data.name, '-', ' '))}</Typography>
        <Typography className='text-slate-400' align='center' variant='h3' fontStyle='italic'>#{leftFillNumber(data.id, 4)}</Typography>
      </Stack>
      <div className='grid grid-cols-2'>
        <div className='flex justify-center items-center'>
          <Image
            src={imageUrl}
            width={imageIsOfficialArtwork ? 96 * 2 : 96}
            height={imageIsOfficialArtwork ? 96 * 2 : 96}
            alt={`Image of ${data.name}`}
          />
        </div>
        <div>
          <div className='grid grid-cols-3 bg-slate-50 p-4 rounded-md border border-slate-400'>
            <Attribute label='Height' value={`${data.height/10} m`} />
            <Attribute label='Weight' value={`${data.weight/10} Kg`} />
            {
              data.stats.map(({ base_stat, stat }) =>
                <Attribute
                  key={v4()}
                  label={capitalizeCase(replaceCharacter(stat.name, '-', ' '))}
                  value={base_stat}
                />)
            }
          </div>
          <Stack direction='row' spacing={2} alignItems='center' my={4}>
            <Typography variant='h6'>Type</Typography>
            <Stack direction='row' spacing={1} alignItems='center' divider={<Divider orientation='vertical' flexItem />}>
              {
                data.types.map(({ type }) => <Chip key={v4()} label={capitalizeCase(replaceCharacter(type.name, '-', ' '))} />)
              }
            </Stack>
          </Stack>
          <Stack direction='row' spacing={2} alignItems='center'>
            <Typography variant='h6'>Abilities</Typography>
            <Stack direction='row' spacing={1} divider={<Divider orientation='vertical' flexItem />}>
              {
                data.abilities.map(({ ability, is_hidden }) => <Ability key={v4()} name={ability.name} is_hidden={is_hidden} />)
              }
            </Stack>
          </Stack>
        </div>
      </div>
      <div>
        <Typography variant='h6'>Moves</Typography>
        <Stack spacing={{ xs: 1, sm: 2 }} direction='row' useFlexGap flexWrap='wrap' >
          {
            data.moves.map(({ move }) => <Chip key={v4()} label={capitalizeCase(replaceCharacter(move.name, '-', ' '))} />)
          }
        </Stack>
      </div>
    </div>
  )
}
