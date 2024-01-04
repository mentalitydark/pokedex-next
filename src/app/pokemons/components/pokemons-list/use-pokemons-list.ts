import { useQuery } from 'react-query'

import type { APIResponsePokemons, UsePokemonsListProps } from './pokemons-list-types'

import { api } from '@/services/api'

export function usePokemonsList({ limit, offset }: UsePokemonsListProps = {}) {
  const query = useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const { data } = await api.get<APIResponsePokemons>('pokemon', {
        params: {
          limit: limit || 151,
          offset: offset || 0
        }
      })

      return data
    }
  })

  return {
    query
  }
}
