import React from "react"
import styled from "styled-components"

const StyledButton = styled.a`
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;
    padding: 1rem 4.2rem;
    border-radius: 3rem;
    background-color: var(--text-highlight);
    color: var(--background);

    @media ${props => props.theme.mediaQueries.small} {
        width: 100%;
    }
`

const Button = ({ text, to }) => {
    return <StyledButton href={`mailto:${to}`}>{text}</StyledButton>
}

export default Button
