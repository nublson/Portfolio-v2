import styled from "styled-components"

export const Content = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > :first-child {
        font-size: 1.6rem;
        margin-bottom: 3.5rem;
    }

    & > :last-child {
        font-size: 1.5rem;
        margin-top: 4rem;
        color: var(--text-grey);
    }
`

export const SocialGroup = styled.div`
    margin-top: 8rem;

    display: flex;
    justify-content: center;
    align-items: center;

    & > :not(:last-child) {
        margin-right: 6rem;
    }
`
