import React from 'react'
import { Stack } from '@mui/material'
import TopForkify from './TopForkify'
import RecipeSide from './RecipeSide'
import ResultSide from './ResultSide'
import ShoppingSide from './ShoppingSide'

const MainForkify = () => {
  return (
    <section id="hero" style={{height: '130vh'}}>
        <Stack height='100%'>
          <Stack backgroundColor='#F9F5F3' width='1200px' height='1300px' borderRadius='10px' margin='auto'>
            <TopForkify />
            <Stack direction='row' height='100%'>
              <ResultSide />
              <RecipeSide />
              <ShoppingSide />
            </Stack>
          </Stack>
        </Stack>
    </section>
  )
}

export default MainForkify