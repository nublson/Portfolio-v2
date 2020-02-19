import React, { useState } from "react"
import { ThemeProvider } from "styled-components"

import themes from "../../styles/themes/themes"
import GlobalStyles from "../../styles/global"
import SEO from "../utils/seo"

import Home from "../../sections/Home"
import Contacts from "../../sections/Contacts"

const Layout = ({ children }) => {
    const { light, dark } = themes.title
    const [theme, setTheme] = useState(light)

    const toogleTheme = () => {
        theme.name === "light" ? setTheme(dark) : setTheme(light)
    }

    return (
        <ThemeProvider theme={theme}>
            <SEO />
            <Home theme={theme} toogleTheme={toogleTheme} />
            {children}
            <Contacts />
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default Layout
