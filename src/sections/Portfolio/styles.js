import styled from "styled-components"

export const Content = styled.div`
    text-align: center;
`

export const ProjectSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > :last-child {
        font-size: 2rem;
        font-weight: bold;
        text-decoration: underline;
        color: var(--text-highlight);
    }
`
