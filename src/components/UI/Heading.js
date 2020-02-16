import React from "react"
import styled from "styled-components"

const StyledHeading = styled.div`
    text-align: center;
    margin-bottom: 6rem;
`
const Title = styled.h2`
    font-size: 2.8rem;
    font-weight: bold;
    color: var(--text-highlight);
`
const Subtitle = styled.p`
    font-size: 1.8rem;
    color: var(--text-grey);
`

const Heading = ({ title, subtitle }) => {
    return (
        <StyledHeading>
            <Title>{title}</Title>
            {subtitle ? <Subtitle>"{subtitle}"</Subtitle> : null}
        </StyledHeading>
    )
}

export default Heading
