import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
    faGithub,
    faLinkedinIn,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import { Content, SocialGroup } from "./styles"

import Heading from "../../components/UI/Heading"
import {
    StyledSection,
    Container,
    Wrapper,
} from "../../components/Layout/elements"

import Button from "../../components/UI/Button"
import { SocialIcon } from "../../components/UI/Icons"

const Contacts = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    social {
                        username
                        email
                    }
                }
            }
        }
    `)

    const { username, email } = site.siteMetadata.social

    return (
        <StyledSection id="Contacts">
            <Container>
                <Wrapper>
                    <Heading
                        title="Contacts"
                        subtitle="It is better to hire an enthusiastic man than a man who knows everything."
                    />
                    <Content>
                        <p>
                            Want to talk about a project, job opportunity or
                            just chat? <br /> You are welcome!
                        </p>

                        <Button to={email} text="Send message" />

                        <SocialGroup>
                            <SocialIcon
                                to={`https://github.com/${username}`}
                                icon={faGithub}
                            />
                            <SocialIcon
                                to={`https://www.linkedin.com/in/${username}`}
                                icon={faLinkedinIn}
                            />
                            <SocialIcon
                                to={`https://www.instagram.com/${username}`}
                                icon={faInstagram}
                            />
                            <SocialIcon
                                to={`https://twitter.com/${username}`}
                                icon={faTwitter}
                            />
                        </SocialGroup>

                        <p>
                            Like, follow or add me on <br /> Github, Linkedin,
                            Instagram, Twitter{" "}
                        </p>
                    </Content>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default Contacts
