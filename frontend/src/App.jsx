
//HOT LOADER
import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
setConfig({ logLevel: 'debug' })
import React, { Fragment, useState, useEffect } from 'react'
//CSS
import styled, { createGlobalStyle } from 'styled-components'
import _games from '../../public/src/games.json'
import { Slider } from './Slider'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`

const SBase = styled.div`
box-sizing: border-box;
& * {
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
`

const STitle = styled.div`
padding: 5px 0px 5px 0px;
text-align: center;
font-size: 24px;
`

const App = () => {
  return <React.Fragment>
    <GlobalStyle />
    <SBase>
      <STitle>Découvrez nos jeux...</STitle>
      <Slider />
    </SBase>
  </React.Fragment>
}

export default hot(App)