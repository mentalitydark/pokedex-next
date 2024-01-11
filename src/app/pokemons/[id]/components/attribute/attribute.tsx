import { Stack, Typography } from '@mui/material'

import type { AttributeProps } from './attribute-types'

export const Attribute = ({ label, value }: AttributeProps) => {
  return (
    <Stack direction='row' alignItems='center' className='border border-slate-200 rounded-full border-bg-100 px-3'>
      <Typography className='text-lg font-semibold' mr={1}>{label}:</Typography>
      <Typography variant='subtitle1'>{value}</Typography>
    </Stack>
  )
}
