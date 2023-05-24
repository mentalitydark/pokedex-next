import { useQuery } from 'react-query'

import { api } from '@/services/api'

interface IAxiosResponse {
  count: number
  next?: string
  previous?: string
  results: {name: string, url: string}[]
}

export function usePokemons () {
  const query = useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse>('pokemon', {
        params: {
          limit: 151,
          offset: 0
        }
      })

      return data
    }
  })

  return query
}
