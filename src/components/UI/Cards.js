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
