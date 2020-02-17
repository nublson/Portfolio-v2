import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 4rem;
    color: var(--text-highlight);
`

export const SocialIcon = ({ icon, to }) => {
    return (
        <StyledLink href={to} target="_blank" rel="noopener">
            <StyledIcon icon={icon} />
        </StyledLink>
    )
}
