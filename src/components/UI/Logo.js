import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

import darkLogo from "../../images/logos/logo_dark.svg"
import lightLogo from "../../images/logos/logo_light.svg"

const Container = styled.div``

const StyledLogo = styled.img`
    height: 8.7rem;
`

const Logo = ({ theme }) => {
    return (
        <Container>
            <GatsbyLink to="/">
                {theme.name === "light" ? (
                    <StyledLogo src={darkLogo} alt="Light Logo" />
                ) : (
                    <StyledLogo src={lightLogo} alt="Dark Logo" />
                )}
            </GatsbyLink>
        </Container>
    )
}

export default Logo
