import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { VisitIcon } from "../components/UI/Icons"

const Wrapper = styled.div`
    margin-bottom: 8rem;
    width: 100%;
    position: relative;

    p {
        color: var(--text-highlight);
        font-size: 2rem;
        text-decoration: underline;
        transition: all 0.2s;

        &:hover {
            text-decoration: underline transparent;
        }
    }
`

const Image = styled(Img)`
    width: 100%;
    border-radius: var(--radius);
`

const Link = styled.a`
    color: var(--text-highlight);
    font-size: 2rem;
    transition: all 0.2s;

    &:hover {
        text-decoration: underline transparent;
    }
`

const PortfolioItem = ({ thumbnail, title, live, repo }) => {
    return (
        <Wrapper>
            <Image fluid={thumbnail.childImageSharp.fluid} />
            {live ? (
                <Link href={live} target="_blank" rel="noopener">
                    {title} - Homepage
                </Link>
            ) : (
                <p> {title} </p>
            )}
            {repo ? <VisitIcon repo={repo} /> : null}
        </Wrapper>
    )
}

export default PortfolioItem
