import React from "react"

import { Content, ProjectSection } from "./styles"

import neardev from "../../content/portfolio/neardev.png"
import tindev from "../../content/portfolio/tindev.png"

import {
    StyledSection,
    Container,
    Wrapper,
} from "../../components/Layout/elements"
import Heading from "../../components/UI/Heading"
import PortfolioItem from "../../templates/PortfolioItem"

const Portfolio = () => {
    return (
        <StyledSection>
            <Container>
                <Wrapper>
                    <Content>
                        <Heading
                            title="Portfolio"
                            subtitle="Theory always ends, sooner or later, murdered by practice."
                        />

                        <ProjectSection>
                            <PortfolioItem
                                thumbnail={neardev}
                                title="Neardev"
                            />

                            <PortfolioItem thumbnail={tindev} title="Tindev" />

                            <p>more</p>
                        </ProjectSection>
                    </Content>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default Portfolio
