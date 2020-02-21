import React from "react"
import styled from "styled-components"

const Container = styled.div`
    transform: rotate(-90deg) translateX(1.9rem) translateY(1.79rem);

    p {
        font-weight: bold;
        color: var(--text-grey);
        span {
            color: var(--text-highlight);
        }
    }

    @media ${props => props.theme.mediaQueries.small} {
        align-self: flex-end;
        transform: rotate(90deg) translateX(0rem) translateY(0rem);

        position: absolute;
        bottom: 4rem;
        right: 0rem;

        p {
            font-size: 2rem;
        }
    }
`

const LangSwitcher = () => {
    return (
        <Container>
            <p>
                PT | <span>ENG</span>
            </p>
        </Container>
    )
}

export default LangSwitcher
