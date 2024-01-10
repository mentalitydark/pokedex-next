'use client'

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Button, IconButton, Tooltip } from '@mui/material'
import { useRouter } from 'next/navigation'

import { Pokemon } from './components'

export default function Page({ params }: { params: { id: string }}) {
  const router = useRouter()

  const previousPokemonEvent = () => {
    const id = parseInt(params.id)

    router.push(`/pokemons/${id-1}`)
  }

  const nextPokemonEvent = () => {
    const id = parseInt(params.id)

    router.push(`/pokemons/${id+1}`)
  }

  const homeEvent = () => {
    router.push('/pokemons')
  }
  
  return (
    <div className='flex justify-center items-center flex-col pt-3 mt-4'>
      <div className='w-4/5'>
        <div className='flex flex-row justify-between mb-4'>
          <Tooltip title='Previous Pokemon'>
            <IconButton size='large' color='primary' onClick={previousPokemonEvent} disabled={parseInt(params.id) <= 1}>
              <KeyboardArrowLeft />
            </IconButton>
          </Tooltip>
          <Tooltip title='Home page'>
            <Button size='large' color='primary' onClick={homeEvent}>
              Home
            </Button>
          </Tooltip>
          <Tooltip title='Next Pokemon'>
            <IconButton size='large' color='primary' onClick={nextPokemonEvent} disabled={parseInt(params.id) >= 1024}>
              <KeyboardArrowRight />
            </IconButton>
          </Tooltip>
        </div>
        <Pokemon id={params.id} />
      </div>
    </div>
  )
}
