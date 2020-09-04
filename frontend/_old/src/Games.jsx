import React, { useState, useEffect, useRef } from 'react'
import Game from './Game'
import styled from 'styled-components'

const SGames = styled.div`
padding-top: 55px;
height: 100%;
display: flex;
flex-wrap: nowrap;

overflow-x: scroll;
scroll-snap-type: x mandatory;
scroll-behavior: smooth;

position: relative;
z-index: 0;
`

const Games = ({ games, isMap, id_games }) => {
    const [selected_position, setPosition] = useState(0)
    let timer
    const handleScroll = (e) => {
        e.stopPropagation()
        const target = e.target
        clearTimeout(timer)
        timer = setTimeout(() => {
            setPosition(~~((target.scrollLeft + (target.offsetWidth / 2)) / target.offsetWidth))
        }, 100)
    }

    const getGames = () => {
        return games.map(game => {
            console.log(id_games)
            let id_position = id_games.indexOf(game.id)
            return <Game key={game.id} inFilter={id_position != -1} isSelected={!isMap && selected_position == id_position} game={game} />
        })
    }

    return <SGames onScroll={handleScroll}>
        {
            getGames()
        }
    </SGames>
}

export default Games