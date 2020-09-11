
//HOT LOADER
import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
setConfig({ logLevel: 'debug' })
import React, { Fragment, useState, useEffect } from 'react'
//CSS
import styled, { createGlobalStyle } from 'styled-components'
import { Slider } from './Slider'

const GlobalStyle = createGlobalStyle`
#root_gallery {
  flex-direction: column !important;
  align-items: center !important;
  
  & * {
    box-sizing: border-box;
    user-select: none;
  }
}
`

const SBase = styled.div`
width: 100%;
height: 100%;
min-width: 368px;

@media only screen and (max-width: 500px) and (orientation: portrait) {
    margin-bottom: 50px;
}
`

const STitle = styled.div`
text-align: center !important;
`

const App = () => {
  return <React.Fragment>
    <GlobalStyle />
    <STitle className="h2 travel">Les expériences proposées</STitle>
    <SBase>
      <Slider />
    </SBase>
  </React.Fragment>
}

export default hot(App)