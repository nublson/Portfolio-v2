import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"

import themes from "../../styles/themes/themes"
import GlobalStyles from "../../styles/global"
import SEO from "../utils/seo"

import { loadState, saveState } from "../../utils/localStorage"

import Home from "../../sections/Home"
import Contacts from "../../sections/Contacts"

const Layout = ({ children }) => {
    const { light, dark } = themes.title
    const [theme, setTheme] = useState(loadState(light))

    const toogleTheme = () => {
        setTheme(theme.name === "light" ? dark : light)
    }

    useEffect(() => {
        saveState(theme)
    }, [theme])

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
