import React from "react"
import styled from "styled-components"

import darkLogo from "../../images/logos/logo_dark.svg"
import lightLogo from "../../images/logos/logo_light.svg"

const StyledLogo = styled.img`
    height: 8.7rem;

    @media ${props => props.theme.mediaQueries.small} {
        height: 8.5rem;
        transform: translateY(2rem);
    }
`

const Logo = ({ theme }) => {
    return (
        <>
            {theme.name === "light" ? (
                <StyledLogo src={darkLogo} alt="Light Logo" />
            ) : (
                <StyledLogo src={lightLogo} alt="Dark Logo" />
            )}
        </>
    )
}

export default Logo
