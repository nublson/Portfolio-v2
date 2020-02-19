import React from "react"
import { Container, StyledNav, StyledItem } from "./styles"

import ThemeSwitcher from "../ThemeSwitcher"

const Header = ({ toogleTheme, theme }) => {
    const items = ["Home", "About me", "Skills", "Portfolio", "Contacts"]

    return (
        <Container>
            <StyledNav>
                {items.map((item, index) => (
                    <StyledItem to={item} spy={true} smooth={true} key={index}>
                        {item}
                    </StyledItem>
                ))}
            </StyledNav>

            <ThemeSwitcher theme={theme} toogleTheme={toogleTheme} />
        </Container>
    )
}

export default Header
