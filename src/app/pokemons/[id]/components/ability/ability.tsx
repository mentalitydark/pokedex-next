import { Chip, Tooltip } from '@mui/material'

import type { AbilityProps } from './ability-types'

import { capitalizeCase, replaceCharacter } from '@/utils'

export const Ability = ({ name, is_hidden }: AbilityProps) => {
  return (
    <Tooltip title={is_hidden ? 'hidden' : ''}>
      <Chip variant={ is_hidden ? 'filled' :'outlined'} label={capitalizeCase(replaceCharacter(name, '-', ' '))} />
    </Tooltip>
  )
}
