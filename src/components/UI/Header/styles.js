import styled from "styled-components"
import { Link } from "react-scroll"

export const Container = styled.div`
    padding: 3rem 0;
    border-bottom: 2px solid #828282;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledNav = styled.nav`
    width: 100%;

    display: flex;
    justify-content: space-between;

    .active {
        color: var(--text-highlight);
    }
`

export const StyledItem = styled(Link)`
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--text-grey);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        color: var(--text-highlight);
    }
`
