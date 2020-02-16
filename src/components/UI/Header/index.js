import React from "react"
import { Container, StyledNav, StyledItem } from "./styles"

const Header = () => {
    const items = ["Home", "About me", "Skills", "Portfolio", "Contacts"]

    return (
        <Container>
            <StyledNav>
                {items.map((item, index) => (
                    <StyledItem key={index}>{item}</StyledItem>
                ))}
            </StyledNav>
        </Container>
    )
}

export default Header
