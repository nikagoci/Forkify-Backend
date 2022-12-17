import React from 'react'
import { Stack } from '@mui/material'
import TopForkify from './TopForkify'

const MainForkify = () => {
  return (
    <section id="hero" style={{height: '130vh'}}>
        <Stack height='100%'>
          <Stack backgroundColor='#F9F5F3' width='1200px' height='1100px' borderRadius='10px' margin='auto'>
            <TopForkify />
          </Stack>
        </Stack>
    </section>
  )
}

export default MainForkify