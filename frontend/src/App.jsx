import React, { useState } from 'react'
//CSS
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
#games_slider {
  flex-direction: column !important;
  align-items: center !important;
  
  & * {
    box-sizing: border-box;
    user-select: none;
  }
}

.games_slider-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.games_slider-roller div {
  animation: games_slider-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.games_slider-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #432a19;
  margin: -4px 0 0 -4px;
}
.games_slider-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.games_slider-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.games_slider-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.games_slider-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.games_slider-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.games_slider-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.games_slider-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.games_slider-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.games_slider-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.games_slider-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.games_slider-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.games_slider-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.games_slider-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.games_slider-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.games_slider-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.games_slider-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes games_slider-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`
//components
import Loading from './Loading'
import Slider from './Slider'

const SBase = styled.div`
width: 100%;
height: 100%;
min-width: 368px;

@media only screen and (max-width: 500px) and (orientation: portrait) {
    margin-bottom: 50px;
}
`

const STitle = styled.div`
text-align: center !important;
`

const App = () => {
  const [load_slider, set_slider] = useState(false)

  window.onload = () => {
    set_slider(true)
  }

  return <React.Fragment>
    <GlobalStyle />
    <STitle className="h2 travel">Les expériences proposées</STitle>
    <SBase>
      {
        load_slider ?
          <Slider /> : <Loading />
      }
    </SBase>
  </React.Fragment>
}

export default App