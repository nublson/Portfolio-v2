import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    max-width: 130rem;
    padding: 0 4rem;
    margin: 0 auto;
    width: 100%;

    display: flex;
    flex-direction: column;
    flex: 1;

    @media ${props => props.theme.mediaQueries.small} {
        padding: 0 3rem;
    }
    @media ${props => props.theme.mediaQueries.smaller} {
        padding: 0 2rem;
    }
`

export const StyledSection = styled.section`
    position: relative;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ background }) =>
        background ? "var(--background-sec)" : null};
    width: 100%;
    min-height: ${({ fullHeight }) => (fullHeight ? "100vh" : "auto")};
    min-height: ${({ fullHeight }) =>
        fullHeight ? "calc(var(--vh, 1vh) * 100)" : "auto"};
`

export const Wrapper = styled.div`
    padding: 6rem 0rem;
    margin-top: 7rem;
    color: var(--text);
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    transition: color 0.2s ease-out;

    @media ${({ theme }) => theme.mediaQueries.small} {
        margin-top: 6rem;
        padding: 4rem 0rem;
    }
    @media ${({ theme }) => theme.mediaQueries.smaller} {
        padding: 3rem 0rem;
    }
`
