import React from "react"
import { ThemeProvider } from "styled-components"

import themes from "../../styles/themes/themes"
import GlobalStyles from "../../styles/global"
import SEO from "../utils/seo"

import Home from "../../sections/Home"
import Contacts from "../../sections/Contacts"

const Layout = ({ children }) => {
    const { light } = themes.title

    return (
        <ThemeProvider theme={light}>
            <SEO />
            <Home theme={light} />
            {children}
            <Contacts />
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default Layout
