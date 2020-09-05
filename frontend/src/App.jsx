
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
overflow-x: hidden;
overflow-y: hidden;
& * {
  user-select:none;
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
}

max-width: calc(70vh * 16/9);
max-height: 70vh;
width: 100%;
height: 100%;
margin: auto;
`

const STitle = styled.div`
padding: 5px 0px 5px 0px;
text-align: center;
font-size: 24px;
`

const App = () => {
  return <SBase>
    <STitle>Découvrez nos jeux</STitle>
    <Slider />
  </SBase>
}

export default hot(App)