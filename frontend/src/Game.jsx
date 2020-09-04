import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

const SGame = styled.div`
flex: 0 0 100%;
scroll-snap-align: center;
position: relative;
z-index: 0;
padding-left: 24px;
padding-right: 24px;
`

const SDiv = styled.div`
text-align: center;
color: white;
`

const STitle = styled(SDiv)`
font-size: 24px;
font-weight: bold;
`
const SDesc = styled(SDiv)`
font-size: 20px;
`

const SHover = styled.div`
left: 24px;
right: 24px;
top: 0;
bottom: 0;
padding-left: 10%;
padding-right: 10%;

backdrop-filter: blur(10px) brightness(50%);

display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
opacity: 0;
position: absolute;
z-index: 1;

${SGame}:hover & {
    opacity: 1;
}
transition: backdrop-filter 0.5s, opacity 0.5s;
`

const SImg = styled.img`
object-fit: contain;
object-position: center center;
width: 100%;
height: 100%;
`

const Game = ({ game, set_run }) => {
    return <SGame onMouseEnter={() => set_run(false)}>
        <SHover>
            <STitle>{game.name}</STitle>
            <SDesc>{game.desc}</SDesc>
        </SHover>
        <SImg src={`.${game.thumbnail}`} />
    </SGame >
}

export default Game