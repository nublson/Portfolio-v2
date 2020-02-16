import React from "react"
import { Content, StyledText } from "./styles"

import {
    StyledSection,
    Container,
    Wrapper,
} from "../../components/Layout/elements"
import Heading from "../../components/UI/Heading"

const About = () => {
    return (
        <StyledSection>
            <Container>
                <Wrapper>
                    <Content>
                        <Heading
                            title="About me"
                            subtitle="Investing in knowledge always yields the best profits."
                        />

                        <StyledText>
                            <p>
                                I'm Nubelson , a self-taught 22-year old
                                Full-Stack Developer, born in Angola and
                                currently living in Portugal who loves to design
                                and build things for Web and Mobile devices. I
                                build websites and applications with exceptional
                                performance and interface with efficient and
                                modern backends.
                            </p>
                            <p>
                                I have been programming with JavaScript since
                                2016 and since then I have learned and been
                                involved with the best technologies that
                                surround it, thus creating memorable and
                                interesting products that in addition to
                                providing users with a pleasant Interface and
                                Experience, were also written with scalable
                                code, thus allowing developers to be able to
                                understand and maintain easily.
                            </p>
                            <p>
                                I am motivated by the challenges I encounter
                                daily and motivated even more by the
                                satisfaction of knowing that, with focus,
                                determination and coffee, I can always overcome
                                them.
                            </p>
                        </StyledText>
                    </Content>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default About
