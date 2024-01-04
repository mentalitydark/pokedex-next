import type { SelectProps as _SelectProps } from '@mui/material'
import type { ReactNode } from 'react'

export interface SelectProps extends _SelectProps<string> {
  children: ReactNode
}
