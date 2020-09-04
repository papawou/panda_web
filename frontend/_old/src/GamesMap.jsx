import React from 'react'
import styled from 'styled-components'

const SGamesMap = styled.div`
position: absolute;
left: 0;
right: 0;
left: 0;

z-index: 2;

visibility: ${props => props.isMap ? "visible" : "hidden"};
height: 100%;
padding-top: 55px;

display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-auto-rows: 40%;

overflow: scroll;
scroll-snap-type: y mandatory;
scroll-padding: calc(65px + 10%);

&::after {
    content:"";
    height: 10px;
}

opacity: ${props => props.isMap ? "1" : "0"};
transition: opacity 0.8s, visibility 0.8s;


background-color: RGBA(255,224,178,0.8);
`

const SItemMap = styled.a`
text-decoration: none;
display: ${props => props.inFilter ? 'flex' : 'none'};
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 1em;
font-weight: bold;
padding: 5px 10px 5px 10px;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

&:active, &:visited {
    color: black;
}

& > img {
    flex: 0 1 auto;
    max-width: 100%;
    max-height: calc(100% - 1.2em);
    object-fit: contain;
}

scroll-snap-align: start;


background-position: center;
transition: background 0.8s;

&:active {
    background-color: rgba(0,0,0,0.3);
    background-size: 100%;
    transition: background 0s;
}
  
`


const GamesMap = ({ games, isMap, setMap, id_games }) => {
    const handleClick = (e) => {
        setMap(false)
    }

    const getGallery = () => games.map(game => {
        console.log(id_games)
        let id_position = id_games.indexOf(game.id)
        return <SItemMap inFilter={id_position != -1} key={game.id} onClick={handleClick} href={`#game_${game.id}`}>
            {game.name}
            <img src={game.thumbnail ? `.${game.thumbnail}` : "./src/img/background.jpg"} />
        </ SItemMap>
    })


    return <SGamesMap isMap={isMap}>
        {getGallery()}
    </SGamesMap>
}

export default GamesMap