import React, { Fragment, useState, useEffect } from 'react'
//HOT LOADER
import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
setConfig({ logLevel: 'debug' })
//CSS
import styledNormalize from 'styled-normalize'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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

  #root {
    position: relative;
    height: 100%;
    background: url("./src/img/test_background.png");
    background-size: cover;
    z-index: 0;
}`

import Games from './Games'
import Filters from './Filters'
import { filter } from './scripts/filters'
import GamesMap from './GamesMap'
import _games from '../../public/src/games.json'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const _filters = { adventure: 'pending', zombie: 'pending', sports: 'pending' }
  let i = 0
  let _id_games = []
  let games = _games.map(game => {
    _id_games.push(i)
    return { ...game, id: i++ }
  })

  const [reset, setReset] = useState(false)
  const [isMap, setMap] = useState(true)
  const [filters, setFilters] = useState(_filters)
  const [id_games, setGames] = useState(_id_games)

  const handleFilters = (e, name) => {
    e.preventDefault()
    if (filters[name] != 'disabled') {
      let new_filters = { ...filters, [name]: filters[name] == 'selected' ? 'pending' : 'selected' }
      filter(games, _id_games, new_filters, _filters, setGames, setFilters, setReset)
      setMap(true)
    }
  }

  const resetFilters = (e) => {
    e.preventDefault()
    setReset(false)
    setFilters(_filters)
    setMap(true)
    setGames(_id_games)
  }
  return <Fragment>
    <BrowserRouter>
      <GlobalStyle />
      <Filters resetFilters={resetFilters} handleFilters={handleFilters} reset={reset} filters={filters} isMap={isMap} setMap={setMap} />
      <GamesMap isMap={isMap} setMap={setMap} games={games} id_games={id_games} />
      <Games isMap={isMap} games={games} id_games={id_games} />
    </BrowserRouter>
  </Fragment>
}

export default hot(App)