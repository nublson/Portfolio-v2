import React from "react"

import { Wrapper, Content, StyledInfo, StyledImage } from "./styles"
import { StyledSection, Container } from "../../components/Layout/elements"
import Header from "../../components/UI/Header"

import logo from "../../images/logo_black.svg"

const Home = () => {
    return (
        <StyledSection fullHeight>
            <Container>
                <Wrapper>
                    <Header />

                    <Content>
                        <StyledInfo>
                            <img src={logo} alt="Logo" />
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
