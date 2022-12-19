import { Stack } from '@mui/system'
import React from 'react'
import SingleResult from './SingleResult'

const ResultSide = () => {
  return (
    <Stack flexBasis='25%' backgroundColor='#fff' padding='40px 0'>
        <SingleResult />
        <SingleResult />
        <SingleResult />
        <SingleResult />
        <SingleResult />
        <SingleResult />
        <SingleResult />
        <SingleResult />
    </Stack>
  )
}

export default ResultSide