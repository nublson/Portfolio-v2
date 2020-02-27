import React, { useState } from "react"
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
`

const Navbar = ({ theme, toogleTheme, isMobile }) => {
    const [menuOpened, setMenuOpened] = useState(false)

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
