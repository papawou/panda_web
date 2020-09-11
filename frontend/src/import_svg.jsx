import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const SNextButton = styled.svg`
    opacity: ${props => props.is_disabled ? '0' : '1'};
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    transform: scaleX(${props => props.is_left ? '1' : '-1'});
    cursor: ${props => props.is_disabled ? 'default' : 'pointer'};
    transition: opacity 0.3s ease-out;

    circle {
        fill: rgba(232, 165, 57, 0.4);
    }
    path {
        fill: rgba(0,0,0,0.4);
    }
    circle, path {
        transition: fill 0.3s ease-out;
        pointer-events: fill;
    }
    
    &:hover {
        circle {
            fill: rgba(232, 165, 57, 0.8);
        }
        path {
            fill: rgba(0,0,0,0.8);
        }
    }
    &:active {
        path {
            fill: rgba(0,0,0,0.4);
        }
        circle {
            fill: rgba(232, 165, 57, 0.4);
        }
    }
`
export const NextButton = (props) => <SNextButton {...props} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" />
    <path d="M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1zm3.66 6.82l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z" />
</SNextButton >