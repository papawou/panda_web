import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

const SGame = styled.div`
flex: 0 0 100%;
scroll-snap-align: center;
position: relative;
z-index: 0;
padding-left: 24px;
padding-right: 24px;
font-family: Raleway;
`

const SDiv = styled.div`
text-align: center;
color: white;
`

const STitle = styled(SDiv)`
font-size: 20px;
font-weight: bold;
`
const SDesc = styled(SDiv)`
font-size: 16px;
height: 0px;
overflow: hidden;
${SGame}:hover & {
    height: auto;
}
`

const SHover = styled.div`
top: calc(100% - 45px);
overflow: hidden;
bottom: 0;
left: 24px;
right: 24px;

padding-left: 10%;
padding-right: 10%;

backdrop-filter: blur(10px) brightness(50%);

display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
opacity: 0.7;
position: absolute;
z-index: 1;

${SGame}:hover & {
    top: 0;
    opacity: 1;
}

transition: opacity 0.7s ease-in-out, top 0.5s;
`

const SImg = styled.img`
object-fit: contain;
object-position: center center;
width: 100%;
height: 100%;
display: block;
`

const Game = ({ is_current, game, set_run }) => {
    return <SGame
        onMouseEnter={() => {
            set_run(false)
        }}>
        <SHover>
            <STitle>{game.name}</STitle>
            <SDesc>{game.desc}</SDesc>
        </SHover>
        <SImg src={is_current ? `src/img/test.gif` : `${game.thumbnail}`} />
    </SGame >
}

export default Game