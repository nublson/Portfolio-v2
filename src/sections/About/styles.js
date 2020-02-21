import styled from "styled-components"

export const Content = styled.div`
    text-align: center;
`

export const StyledText = styled.div`
    max-width: 100rem;
    margin: 0 auto;
    font-size: 1.7rem;
    font-weight: 300;

    p {
        margin-bottom: 2rem;
    }

    @media ${props => props.theme.mediaQueries.small} {
        p {
            margin-bottom: 3rem;
        }
    }
`
