'use client'

import { QueryClient, QueryClientProvider } from 'react-query'

import type { PropsWithChildren } from 'react'

const queryClient = new QueryClient()

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
