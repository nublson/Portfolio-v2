import React from "react"

import { Wrapper, Content, StyledInfo, StyledImage } from "./styles"
import { StyledSection, Container } from "../../components/Layout/elements"
import Header from "../../components/UI/Header"

import Logo from "../../components/UI/Logo"

const Home = ({ theme }) => {
    return (
        <StyledSection id="Home" fullHeight>
            <Container>
                <Wrapper>
                    <Header />

                    <Content>
                        <StyledInfo>
                            <Logo theme={theme} />
                            <p>
                                UX | UI Designer & <br /> Full Stack Developer
                            </p>
                            <p>
                                {" "}
                                PT | <span>ENG</span>
                            </p>
                        </StyledInfo>

                        <StyledImage />
                    </Content>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default Home
