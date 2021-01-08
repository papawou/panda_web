import React from 'react'
import styled from 'styled-components'

const SLoading = styled.div`
text-align: center;
`

const Loading = () => {
    return <SLoading>
        <div className="games_slider-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </SLoading>
}

export default Loading