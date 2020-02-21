import React from "react"
import rehypeReact from "rehype-react"
import { useStaticQuery, graphql } from "gatsby"
import { Content, StyledText } from "./styles"

import {
    StyledSection,
    Container,
    Wrapper,
} from "../../components/Layout/elements"
import Heading from "../../components/UI/Heading"

const renderCustom = new rehypeReact({
    createElement: React.createElement,
}).Compiler

const About = () => {
    const { aboutMe } = useStaticQuery(graphql`
        query {
            aboutMe: file(relativePath: { eq: "aboutMe.md" }) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `)

    return (
        <StyledSection id="About me" background>
            <Container>
                <Wrapper>
                    <Content>
                        <Heading
                            title="About me"
                            subtitle="Investing in knowledge always yields the best profits."
                        />

                        <StyledText>
                            {renderCustom(aboutMe.childMarkdownRemark.htmlAst)}
                        </StyledText>
                    </Content>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default About
