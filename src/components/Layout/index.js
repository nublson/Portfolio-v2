import React from "react"
import { ThemeProvider } from "styled-components"

import themes from "../../styles/themes/themes"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
    const { light } = themes.title

    return (
        <ThemeProvider theme={light}>
            {children}
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default Layout
