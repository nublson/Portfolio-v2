import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"

import themes from "../../styles/themes/themes"
import GlobalStyles from "../../styles/global"
import SEO from "../utils/seo"

import { loadState, saveState } from "../../utils/localStorage"

import Home from "../../sections/Home"
import Contacts from "../../sections/Contacts"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background: var(--background);
    color: var(--text);
    transition: color 0.2s ease-out, background 0.2s ease-out;
`

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
`

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
            <Wrapper>
                <SEO />
                <Home theme={theme} toogleTheme={toogleTheme} />
                <StyledMain>{children}</StyledMain>
                <Contacts />
                <GlobalStyles />
            </Wrapper>
        </ThemeProvider>
    )
}

export default Layout
