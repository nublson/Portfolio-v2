import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Content, ProjectSection } from "./styles"

import {
    StyledSection,
    Container,
    Wrapper,
} from "../../components/Layout/elements"
import Heading from "../../components/UI/Heading"
import PortfolioItem from "../../templates/PortfolioItem"

const Portfolio = () => {
    const { allFile: items } = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    sourceInstanceName: { eq: "content" }
                    extension: { eq: "md" }
                    relativeDirectory: { regex: "/portfolio/" }
                }
                sort: { fields: [dir], order: DESC }
            ) {
                edges {
                    node {
                        id
                        childMarkdownRemark {
                            frontmatter {
                                title
                                live
                                repo
                                image {
                                    childImageSharp {
                                        fluid(maxWidth: 1200, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <StyledSection id="Portfolio" background>
            <Container>
                <Wrapper>
                    <Content>
                        <Heading
                            title="Portfolio"
                            subtitle="Theory always ends, sooner or later, murdered by practice."
                        />

                        <ProjectSection>
                            {items.edges.map(item => {
                                const {
                                    title,
                                    live,
                                    repo,
                                    image,
                                } = item.node.childMarkdownRemark.frontmatter

                                return (
                                    <PortfolioItem
                                        key={item.node.id}
                                        thumbnail={image}
                                        title={title}
                                        live={live}
                                        repo={repo}
                                    />
                                )
                            })}
                        </ProjectSection>
                    </Content>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default Portfolio
