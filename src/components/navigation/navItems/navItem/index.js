import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const StyledLink = styled(Link)`
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--text-grey);
    cursor: pointer;
    transition: color 0.2s ease-out;
    &:hover {
        color: var(--text-highlight);
    }

    @media ${({ theme }) => theme.mediaQueries.small} {
        font-size: 3.5rem;
    }

    @media ${({ theme }) => theme.mediaQueries.smaller} {
        font-size: 3rem;
    }

    @media ${({ theme }) => theme.mediaQueries.smallest} {
        font-size: 3.3rem;
    }
`

const NavItem = ({ link, clicked }) => (
    <StyledLink onClick={clicked} to={link} spy={true} smooth={true}>
        {link}
    </StyledLink>
)

export default NavItem
