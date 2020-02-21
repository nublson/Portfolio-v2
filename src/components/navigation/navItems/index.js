import React from "react"
import styled from "styled-components"

import NavItem from "./navItem"
import DarkModeToggle from "../../UI/ThemeSwitcher"

const LINKS = ["Home", "About me", "Skills", "Portfolio", "Contacts"]

const StyledNav = styled.nav`
    display: flex;
    overflow: hidden;
    flex: 1;
    padding: ${({ mobile }) => (mobile ? "0" : "2rem 0")};
    border-bottom: ${({ mobile }) =>
        mobile ? null : "2px solid var(--text-grey)"};
    flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
    justify-content: space-between;
    /* justify-content: ${({ mobile }) =>
        mobile ? "flex-start" : "space-between"}; */
    align-items: ${({ mobile }) => (mobile ? "flex-start" : "center")};
    @media ${({ theme }) => theme.mediaQueries.large} {
        margin-right: ${({ mobile }) => (mobile ? "0rem" : "4rem")};
    }

    .active {
        color: var(--text-highlight);
    }
`

const NavItems = ({ mobile, clicked, isMobile, theme, toogleTheme }) => {
    return (
        <StyledNav mobile={mobile}>
            {LINKS.map((item, index) => (
                <NavItem key={index} link={item} clicked={clicked} />
            ))}
            <DarkModeToggle
                theme={theme}
                toogleTheme={toogleTheme}
                mobile
                isMobile={isMobile}
            />
        </StyledNav>
    )
}

export default NavItems
