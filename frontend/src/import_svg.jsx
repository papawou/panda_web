import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const SNextButton = styled.svg`
    border-radius: 100%;
    background-color: rgba(232, 165, 57, 0.4);
    border: 0;
    opacity: ${props => props.is_disabled ? '0' : '1'};
    fill: rgba(0,0,0,0.4);
    pointer-events: all;
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    transition: opacity 0.3s ease-out, visiblity 0.3s, fill 0.3s ease-out, background-color 0.3s ease-out;
    &:hover {
        fill: rgba(0, 0, 0, 0.8);
        background-color: rgba(232, 165, 57, 0.8);;
    }
    &:active {
        fill: rgba(0,0,0,0.4);
    }
    transform: scaleX(${props => props.is_left ? '1' : '-1'});
    cursor: ${props => props.is_disabled ? 'default' : 'pointer'};
`
export const NextButton = (props) => <SNextButton {...props} viewBox="0 0 24 24">
    <path d="M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1zm3.66 6.82l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z" />
</SNextButton >