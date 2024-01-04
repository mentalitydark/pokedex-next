import { type ChangeEventHandler, useState } from 'react'

import type { SelectChangeEvent } from '@mui/material'

export function usePokemonPage() {
  const [pokemonName, setPokemonName] = useState<string>('')
  const [generation, setGeneration] = useState<string>('0')

  const onChangeNameEvent: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setPokemonName(event.target.value)
  }

  const onChangeSelectEvent = (event: SelectChangeEvent) => {
    setGeneration(event.target.value)
  }

  const generations = [151, 100, 135, 107, 156, 72, 88, 96, 119]

  const limit = generations[parseInt(generation) || 0]

  const offset = generations.slice(0, parseInt(generation) || 0).reduce((prev, cur) => prev + cur, 0)

  return {
    pokemonName,
    onChangeNameEvent,
    generation,
    onChangeSelectEvent,
    limit,
    offset
  }
}
