import React from "react"

import NavItems from "./navItems"

const DesktopMenu = ({ isMobile, theme, toogleTheme }) => (
    <NavItems theme={theme} toogleTheme={toogleTheme} isMobile={isMobile} />
)

export default DesktopMenu
