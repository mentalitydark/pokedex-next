import { Stack, Typography } from '@mui/material'

import type { AttributeProps } from './attribute-types'

export const Attribute = ({ label, value }: AttributeProps) => {
  return (
    <Stack direction='row' spacing={.5} alignItems='center'>
      <Typography variant='h6' mr={4}>{label}:</Typography>
      <Typography variant='subtitle1'>{value}</Typography>
    </Stack>
  )
}
