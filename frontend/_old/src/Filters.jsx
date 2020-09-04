import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import * as svgs from './import_svg'

const SFilters = styled.div`
backdrop-filter: blur(10px);
background-color: rgba(255,255,255,0.5);
position: absolute;
top: 0;
left: 0;
height: 55px;
z-index: 10;
vertical-overflow: hidden;
width: 100%;

display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items:center;
`

const SWrapSVG = styled.div`
flex: 1 1 auto;
overflow: hidden;
height: 100%;
`

const Filters = ({ reset, resetFilters, isMap, setMap, filters, handleFilters }) => {

    const handleClick = (e) => {
        e.preventDefault()
        setMap(!isMap)
    }

    const toggleFullscreen = (e) => {
        e.preventDefault()
        document.documentElement.webkitRequestFullScreen();
    }
    return <SFilters>
        <Hamb setMap={handleClick} isMap={isMap} />
        {
            !document.fullscreenElement ? <button onClick={toggleFullscreen}>FULLSCREEN</button> : ""
        }
        <svgs.Adventure onClick={(e) => handleFilters(e, 'adventure')} status={filters.adventure} />
        <svgs.Zombie onClick={(e) => handleFilters(e, 'zombie')} status={filters.zombie} />
        <svgs.Sports onClick={(e) => handleFilters(e, 'sports')} status={filters.sports} />
        <SWrapSVG><svgs.Reset onClick={resetFilters} reset={reset} /></SWrapSVG>
    </SFilters>
}

const SHamb = styled.div`
width: 60px;
height: 45px;
position: relative;
cursor: pointer;
margin: 5px 15px 5px 10px;
  
transform: rotate(0deg);
transition: .5s ease-in-out;

-webkit-tap-highlight-color: transparent;

& > span {
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: ${props => props.isMap ? 'rgb(205,92,92)' : 'rgb(185, 129, 76)'};
  border-radius: 9px;
  opacity: 1;
  left: 0;
  
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}
& span:nth-child(1) {
    ${props => props.isMap ?
        css`
        top: 18px;
        width: 0%;
        left: 50%;`
        : css`
        top: 0px;`}
}
& span:nth-child(2) {
    top: 18px;
    ${props => props.isMap ? css`transform: rotate(45deg);` : ''}
}
& span:nth-child(3) {
    top: 18px;
    ${props => props.isMap ? css`transform: rotate(-45deg);` : ''}
}
& span:nth-child(4) {
    ${props => props.isMap ?
        css`
        top: 18px;
        width: 0%;
        left: 50%;`
        : css`
        top: 36px;`}
}
`

const Hamb = ({ isMap, setMap }) =>
    <SHamb isMap={isMap} onClick={setMap} >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </SHamb>

export default Filters