
//HOT LOADER
import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
setConfig({ logLevel: 'debug' })
import React, { Fragment, useState, useEffect } from 'react'
//CSS
import styled, { createGlobalStyle } from 'styled-components'
import _games from '../../public/src/games.json'
import { Slider } from './Slider'

const SBase = styled.div`
box-sizing: border-box;
& * {
  box-sizing: border-box;
  user-select: none;
}
width: 100%;
height: 100%;
min-width: 354px;
`

const STitle = styled.div`
text-align: center;
`

const App = () => {
  return <React.Fragment>
    <STitle className="h2 travel">Les expériences proposées</STitle>
    <SBase>
      <Slider />
    </SBase>
  </React.Fragment>
}

export default hot(App)