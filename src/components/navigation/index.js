import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import DesktopMenu from "./desktopMenu"
import MobileMenu from "./mobileMenu/mobileMenu"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    overflow-x: hidden;
    justify-content: space-between;
    transition: all 0.2s ease-out;
    user-select: none;
    /* height: ${({ isMobile }) => (isMobile ? "6rem" : "auto")}; */
    /* @media ${({ theme }) => theme.mediaQueries.small} {
        position: relative;
    } */
`

const Navbar = ({ theme, toogleTheme }) => {
    const [isMobile, setisMobile] = useState(null)
    const [menuOpened, setMenuOpened] = useState(false)

    // Animation

    // Change navbar content accordingly
    const changeMobile = () => {
        window.matchMedia("(max-width: 37.5em)").matches
            ? setisMobile(true)
            : setisMobile(false)
    }

    // Event listener on resize, so when it change we check o remove desktop menu/mobile menu
    // Better than CSS media query because we dont keep both DOM nodes
    useEffect(() => {
        changeMobile()
        window.addEventListener("resize", changeMobile)
        return () => window.removeEventListener("resize", changeMobile)
    }, [])

    return (
        <Wrapper isMobile={isMobile}>
            {isMobile ? (
                <MobileMenu
                    menuOpened={menuOpened}
                    setMenuOpened={setMenuOpened}
                    isMobile={isMobile}
                    theme={theme}
                    toogleTheme={toogleTheme}
                />
            ) : (
                <DesktopMenu
                    isMobile={isMobile}
                    theme={theme}
                    toogleTheme={toogleTheme}
                />
            )}
        </Wrapper>
    )
}

Navbar.propTypes = {
    siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
    siteTitle: ``,
}

export default Navbar
