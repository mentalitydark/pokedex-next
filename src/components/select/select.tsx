'use client'

import { FormControl, InputLabel, Select as _Select } from '@mui/material'
import { v4 } from 'uuid'

import type { SelectProps } from './select-types'

export const Select = ({ children, label, className, ...props }: SelectProps) => {
  const labelId = v4()

  return (
    <FormControl className={className}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <_Select
        labelId={labelId}
        label={label}
        {...props}
      >
        {children}
      </_Select>
    </FormControl>
  )
}
