import React from "react"

import { SmallWrapper, Content, SkillsGroup } from "./styles"

import figma from "../../images/logos/figma.png"
import node from "../../images/logos/node.png"
import react from "../../images/logos/react.png"
import reactn from "../../images/logos/reactn.png"

import {
    StyledSection,
    Container,
    Wrapper,
} from "../../components/Layout/elements"
import Heading from "../../components/UI/Heading"
import { SkillCard } from "../../components/UI/Cards"

const Skills = () => {
    return (
        <StyledSection>
            <Container>
                <Wrapper>
                    <SmallWrapper>
                        <Heading title="Skills" />

                        <Content>
                            <SkillsGroup>
                                <SkillCard
                                    logo={figma}
                                    tool="Figma"
                                    rol="UX | UI Design"
                                />

                                <SkillCard
                                    logo={node}
                                    tool="NodeJS"
                                    rol="Backend Development"
                                />

                                <SkillCard
                                    logo={react}
                                    tool="ReactJS"
                                    rol="Web Development"
                                />

                                <SkillCard
                                    logo={reactn}
                                    tool="React Native"
                                    rol="Mobile Development"
                                />
                            </SkillsGroup>
                        </Content>
                    </SmallWrapper>
                </Wrapper>
            </Container>
        </StyledSection>
    )
}

export default Skills
