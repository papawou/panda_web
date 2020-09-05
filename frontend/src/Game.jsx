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
`

const Game = ({ game, set_run }) => {
    const [is_hover, set_hover] = useState(false)
    return <SGame
        onMouseEnter={() => {
            set_run(false)
            set_hover(true)
        }}
        onMouseLeave={() => {
            set_hover(false)
        }}>
        {/*<SHover>
            <STitle>{game.name}</STitle>
            {
                is_hover ? <SDesc>{game.desc}</SDesc> : null
            }
        </SHover>*/}
        <SImg src={`.${game.thumbnail}`} />
    </SGame >
}

export default Game