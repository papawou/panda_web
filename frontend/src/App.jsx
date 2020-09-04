
//HOT LOADER
import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
setConfig({ logLevel: 'debug' })
import React, { Fragment, useState, useEffect } from 'react'
//CSS
import styledNormalize from 'styled-normalize'
import styled, { createGlobalStyle } from 'styled-components'


import Games from './Games'
import _games from '../../public/src/games.json'
import { NextButton } from './import_svg'

/*const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  * {
    user-select:none;
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    background-color: pink;
    height: 100%;
  }

  body {
    background-color: green;
    height: 100%;
  }

  #root_gallery {
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    height: 100%;
    background: url("./src/img/test_background.png");
    background-size: cover;
    z-index: 0;
    position: relative;
}`*/
const SRoot = styled.div`
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    z-index: 0;
    & * {
      user-select:none;
      font-family: Roboto, sans-serif;
      box-sizing: border-box;
    }
    max-width: calc(70vh * 16/9);
    max-height: 70vh;
    margin: auto;
    width: 100%;
    height: 100%;
`

const SWrapButton = styled.div`
pointer-events: none;
position: absolute;
z-index: 1;
display: flex;
width: 100%;
height: 100%;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;
`


const App = () => {
  let i_games = -1
  let games = _games.map(game => {
    return { ...game, id: i_games++ }
  })

  const [run, set_run] = useState(true)
  const [current_id, set_current_id] = useState(0)
  useEffect(() => {
    let interval
    if (!run) {
      interval = setInterval(() => {
        set_run(true)
      }, 5000)
    }
    else {
      let reverse = false
      interval = setInterval(() => {
        set_current_id(prev_id => {
          if (prev_id <= 0 || games.length - 1 <= prev_id)
            reverse = !reverse
          return reverse ? prev_id - 1 < 0 ? 0 : prev_id - 1 : prev_id + 1 > games.length - 1 ? games.length - 1 : prev_id + 1
        })
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [run])

  const decrId = () => {
    set_run(false)
    set_current_id(prev_id => prev_id - 1 < 0 ? 0 : prev_id - 1)
  }
  const incrId = () => {
    set_run(false)
    set_current_id(prev_id => prev_id + 1 > games.length - 1 ? games.length - 1 : prev_id + 1)
  }

  return <SRoot>
    <SWrapButton>
      <NextButton is_left={true} is_disabled={current_id == 0} onClick={decrId}>-1</NextButton>
      <NextButton is_disabled={current_id == (games.length - 1)} onClick={incrId}>+1</NextButton>
    </SWrapButton>
    <Games set_run={set_run} current_id={current_id} games={games} />
  </SRoot >
}

export default hot(App)