import styled from "styled-components"
import home from "../../images/home_web.jpeg"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
`
export const Content = styled.div`
    margin-top: 8rem;

    display: flex;
    flex-direction: column;
`

export const StyledInfo = styled.div`
    margin-bottom: 8rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & > :last-child {
        font-weight: bold;
        margin: 0;
        padding: 0;
        color: var(--text-grey);
        transform: rotate(-90deg) translateX(1.75rem) translateY(2.4rem);

        span {
            color: var(--text-highlight);
        }
    }

    img {
        height: 8.7rem;
    }

    p {
        font-size: 1.6rem;
        transform: translateY(0.7rem);
        color: var(--text-highlight);
    }
`

export const StyledImage = styled.div`
    background: url(${home});
    background-size: cover;
    background-position: center;
    border-radius: var(--radius);
    width: 100%;
    height: 48rem;

    margin-bottom: 10rem;
`
