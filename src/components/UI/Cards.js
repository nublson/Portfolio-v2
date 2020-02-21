import React from "react"
import styled from "styled-components"

const Container = styled.div`
    text-align: center;
    color: var(--text-grey);
    font-size: 1.5rem;

    img {
        margin-bottom: 1rem;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${props => props.theme.mediaQueries.small} {
        font-size: 2rem;
        margin-bottom: 4rem;
    }

    @media ${props => props.theme.mediaQueries.smaller} {
        margin-bottom: 6rem;
    }

    @media ${props => props.theme.mediaQueries.smaller} {
        margin-bottom: 8rem;
    }
`

export const SkillCard = ({ logo, tool, rol }) => {
    return (
        <Container>
            <img src={logo} alt="Skill Logo" />
            <p>{tool}</p>
            <p>{rol}</p>
        </Container>
    )
}
