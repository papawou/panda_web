import React, { useEffect, useRef, useState, useCallback, useLayoutEffect } from 'react'
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

const SVideo = styled.video`
width: 100%;
height: 100%;
display: block;
`

const Game = ({ nextId, need_preload, is_current, game }) => {
    const node_video = useRef(null)
    const interval_ref = useRef(null)
    useEffect(() => {
        if (need_preload) {
            node_video.current.setAttribute('src', game.video)
            node_video.current.load()
        }

        return () => {
            node_video.current.removeAttribute('src')
            node_video.current.load()
        }
    }, [need_preload])

    useEffect(() => {
        if (is_current) {
            interval_ref.current = setInterval(() => {
                node_video.current.play()
            }, 750)
        }

        return () => {
            if (interval_ref.current != null)
                clearInterval(interval_ref.current)
            node_video.current.load()
        }
    }, [is_current])

    return <SGame>
        <SHover>
            <STitle>{game.name}</STitle>
            <SDesc>{game.desc}</SDesc>
        </SHover>
        <SVideo ref={node_video} onEnded={nextId} poster={game.thumbnail} muted={true} preload="metadata" />
    </SGame >
}

export default Game