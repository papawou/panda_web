
import React, { Fragment, useState, useEffect, useRef } from 'react'
//CSS
import styled from 'styled-components'

import _games from '../../public/src/games.json'
import { NextButton } from './import_svg'

import Game from './Game'

const SSlider = styled.div`
position: relative;
z-index: 0;
max-width: calc(70vh * 16/9);
max-height: 70vh;
margin: auto;
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
const SGames = styled.div`
display: flex;
flex-wrap: nowrap;
scroll-snap-type: x mandatory;
scroll-behavior: smooth;
align-items: center;
background-color: pink;
overflow-x: hidden;
overflow-y: hidden;
`

export const Slider = () => {
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

    let node = useRef(null)
    useEffect(() => {
        node.current.scrollTo({ left: current_id * node.current.offsetWidth, behavior: "smooth" })
    }, [current_id])

    return <SSlider>
        <SWrapButton>
            <NextButton is_left={true} is_disabled={current_id == 0} onClick={decrId}>-1</NextButton>
            <NextButton is_disabled={current_id == (games.length - 1)} onClick={incrId}>+1</NextButton>
        </SWrapButton>
        <SGames ref={node}>
            {
                games.map(game => {
                    return <Game set_run={set_run} key={game.id} game={game} />
                })
            }
        </SGames>
    </SSlider>
}