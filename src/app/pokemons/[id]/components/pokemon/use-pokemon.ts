import { useQuery } from 'react-query'

import type { APIResponsePokemon } from './pokemon-types'

import { api } from '@/services/api'

export function usePokemon({ id }: { id: string }) {
  const query = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      try {
        const { data } = await api.get<APIResponsePokemon>(`pokemon/${id}`)

        return data
      } catch (err) {
        console.log(err)
        return undefined
      }
    },
    retry: false,
  })

  return {
    query,
  }
}
