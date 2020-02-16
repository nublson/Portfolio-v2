import styled from "styled-components"

export const SmallWrapper = styled.div`
    text-align: center;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    & > :first-child {
        font-size: 1.8rem;
        color: var(--text-highlight);

        margin-bottom: 4rem;
    }
`

export const SkillsGroup = styled.div`
    display: flex;
    justify-content: space-between;
`
