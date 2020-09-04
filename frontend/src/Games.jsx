import React, { useState, useEffect, useRef, useCallback } from 'react'
import Game from './Game'
import styled from 'styled-components'

export const SGames = styled.div`
display: flex;
flex-wrap: nowrap;
overflow-x: hidden;
overflow-y: hidden;
scroll-snap-type: x mandatory;
scroll-behavior: smooth;
position: relative;
z-index: 0;
align-items: stretch;
height: 100%;
`

const Games = ({ games, current_id, set_run }) => {
    const getGames = () => {
        return games.map(game => {
            return <Game set_run={set_run} key={game.id} game={game} />
        })
    }

    let node = useRef(null)
    useEffect(() => {
        node.current.scrollTo({ left: current_id * node.current.offsetWidth, behavior: "smooth" })
    }, [current_id])
    return <SGames ref={node}>
        {
            getGames()
        }
    </SGames>
}

export default Games