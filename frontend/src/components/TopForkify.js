import Input from '../Utils/Input'
import { Stack } from '@mui/system'
import React from 'react'

import Logo from '../img/logo.png';
import Icon from '../img/icons.svg';

const TopForkify = () => {
  return (
    <Stack direction='row'>
        <Stack width='200px'>
            <img src={Logo} alt='logo' width='100%' height='100%' />
        </Stack>
        <Stack>
            <Input />
        </Stack>
        <Stack>
            <img src={Icon} alt='icon' width='100%' height='100%' />
        </Stack>
    </Stack>
  )
}

export default TopForkify