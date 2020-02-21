import styled from "styled-components"

export const Content = styled.div`
    text-align: center;
    width: 75%;

    @media ${props => props.theme.mediaQueries.small} {
        width: 85%;
    }

    @media ${props => props.theme.mediaQueries.smaller} {
        width: 90%;
    }
`

export const ProjectSection = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`
