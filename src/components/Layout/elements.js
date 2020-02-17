import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    max-width: 130rem;
    z-index: 2;
    padding: 0 4rem;
    margin: 0 auto;
    width: 100%;
`

export const StyledSection = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    justify-content: center;
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
`
