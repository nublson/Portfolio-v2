import React, { useState, useEffect } from "react"

import { Wrapper, Content, StyledInfo, StyledImage } from "./styles"
import { StyledSection, Container } from "../../components/Layout/elements"
import LangSwitcher from "../../components/UI/LangSwitcher"

import Header from "../../components/navigation"

import Logo from "../../components/UI/Logo"

const Home = ({ theme, toogleTheme }) => {
    const [isMobile, setisMobile] = useState(null)

    // Change navbar content accordingly
    const changeMobile = () => {
        window.matchMedia("(max-width: 37.5em)").matches
            ? setisMobile(true)
            : setisMobile(false)
    }

    useEffect(() => {
        changeMobile()
        window.addEventListener("resize", changeMobile)
        return () => window.removeEventListener("resize", changeMobile)
    }, [])

    return (
        <StyledSection id="Home">
            <Container>
                <Wrapper>
                    <Header
                        isMobile={isMobile}
                        theme={theme}
                        toogleTheme={toogleTheme}
                    />
                    <Content>
                        <StyledInfo>
                            <Logo theme={theme} />
                            <h1>
                                UX | UI Designer & <br /> Full Stack Developer
                            </h1>
                            {isMobile ? null : <LangSwitcher />}
                        </StyledInfo>

                        <StyledImage />
                    </Content>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default Home
