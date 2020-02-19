import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const StyledLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 4rem;
    color: var(--text-highlight);
`

const WrapperLink = styled(StyledLink)`
    background-color: #2b2b2b;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    box-shadow: 2px 3px 10px -1px rgba(0, 0, 0, 0.42);

    position: absolute;
    top: 1rem;
    right: 1rem;

    &:hover {
        box-shadow: 2px 3px 5px -1px rgba(0, 0, 0, 0.42);
    }
`

const LinkIcon = styled(StyledIcon)`
    font-size: 1.3rem;
    color: #fff;
`

export const SocialIcon = ({ icon, to }) => {
    return (
        <StyledLink href={to} target="_blank" rel="noopener">
            <StyledIcon icon={icon} />
        </StyledLink>
    )
}

export const VisitIcon = ({ to }) => {
    return (
        <WrapperLink href={to} target="_blank" rel="noopener">
            <LinkIcon icon={faLink} />
        </WrapperLink>
    )
}
