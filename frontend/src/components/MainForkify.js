import React, { useState } from 'react'
import { Stack } from '@mui/material'
import TopForkify from './TopForkify'
import ShoppingSide from './ShoppingSide'
import RecipeSide from './RecipeSide/RecipeSide'
import ResultSide from './ResultSide/ResultSide'

const MainForkify = () => {
  const [recipeId, setRecipeId] = useState('')

  return (
    <section id="hero" style={{height: '130vh'}}>
        <Stack height='100%'>
          <Stack backgroundColor='#F9F5F3' width='1200px' height='1300px' borderRadius='10px' margin='auto'>
            <TopForkify />
            <Stack direction='row' height='100%'>
              <ResultSide setRecipeId={setRecipeId} />
              <RecipeSide recipeId={recipeId} />
              <ShoppingSide />
            </Stack>
          </Stack>
        </Stack>
    </section>
  )
}

export default MainForkify