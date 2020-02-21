import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    flex: 1;
`
export const Content = styled.div`
    margin-top: 8rem;

    display: flex;
    flex-direction: column;

    @media ${props => props.theme.mediaQueries.small} {
        margin-top: 6rem;
    }
`

export const StyledInfo = styled.div`
    margin-bottom: 8rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    p {
        font-size: 1.6rem;
        transform: translateY(0.7rem);
        color: var(--text-highlight);
    }

    @media ${props => props.theme.mediaQueries.small} {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 4rem;

        p {
            margin-top: 8rem;
            font-size: 2rem;
        }
    }
`

export const StyledImage = styled.div`
    border-radius: var(--radius);
    border: 2px solid var(--text-highlight);
    width: 100%;
    height: 48rem;

    margin-bottom: 10rem;

    @media ${props => props.theme.mediaQueries.small} {
        height: 60rem;
    }
`
