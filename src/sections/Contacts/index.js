import React from "react"
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
    return (
        <StyledSection>
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

                        <Button to="#" text="Send message" />

                        <SocialGroup>
                            <SocialIcon to="#" icon={faGithub} />
                            <SocialIcon to="#" icon={faLinkedinIn} />
                            <SocialIcon to="#" icon={faInstagram} />
                            <SocialIcon to="#" icon={faTwitter} />
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
