import React, { useState, useCallback } from 'react'

import styled from 'styled-components'

const SGame = styled.div`
display: ${props => props.inFilter ? 'block': 'none'};
position: relative;
flex: 0 0 100%;
scroll-snap-align: center;

z-index: 1;
`

const SDiv = styled.div`
text-align: center;
`

const STitle = styled(SDiv)`
font-size: 2em;
font-weight: bold;
`
const SDesc = styled(SDiv)`
font-size: 1.3em;
max-width: 40em;
`

const STop = styled.div`
height: 20%;
backdrop-filter: blur(5px);

display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
`

const SBottom = styled.div`
height: 80%;

overflow-x: scroll;
scroll-snap-type: x mandatory;

display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
`

const SImg = styled.img`
flex: 0 0 auto;
width: 100%;
height: 100%;

object-fit: contain;
scroll-snap-align: center;
`

const SVideo = styled.video`
background-image: ${props => `.${props.thumbnail}`};
bakcground-size: contain;

flex: 0 0 auto;
width: 100%;
height: 100%;

object-fit: contain;
scroll-snap-align: center;
`


const Game = ({ game, isSelected, inFilter }) => {
    const [selected_position, setPosition] = useState(0)
    let timer
    const handleScroll = (e) => {
        e.stopPropagation()
        const target = e.target
        clearTimeout(timer)
        timer = setTimeout(() => {
            setPosition(~~((target.scrollLeft + (target.offsetWidth / 2)) / target.offsetWidth))
        }, 350)
    }

    const getGallery = () => {
        let i = -1
        return game.gallery.map(url => {
            i += 1
            url = `.${url}`
            return /\.(mp4|webm)$/i.test(url) ? <Video key={i} thumbnail={game.video_thumbnail} url={url} isSelected={isSelected ? selected_position == i : false} /> : <SImg src={`.${url}`} />
        })
    }

    return <SGame inFilter={inFilter} id={`game_${game.id}`}>
        <STop>
            <STitle>{game.name}</STitle>
            <SDesc>{game.desc}</SDesc>
        </STop>
        <SBottom onScroll={handleScroll}>
            {
                getGallery()
            }
        </SBottom>
    </SGame >
}

const Video = ({ url, isSelected, thumbnail }) => {
    const ref = React.createRef()
    let timer
    React.useEffect(() => {
        const toggleVideo = () => {
            if (!isSelected) {
                clearTimeout(timer)
            }
            else
                timer = setTimeout(() => {
                    ref.current.play()
                }, 500)
        }
        if (ref.current != null)
            toggleVideo()
    }, [isSelected])

    return isSelected ? <SVideo ref={ref} thumbnail={thumbnail} poster={`.${thumbnail}`} src={url} muted loop /> : <SImg src={`.${thumbnail}`} />
}

export default Game