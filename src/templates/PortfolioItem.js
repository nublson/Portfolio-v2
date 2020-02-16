import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    margin-bottom: 5rem;

    img {
        border-radius: var(--radius);
    }

    p {
        font-size: 1.8rem;
        text-decoration: underline;
    }
`

const PortfolioItem = ({ thumbnail, title }) => {
    return (
        <Wrapper>
            <img src={thumbnail} alt="Thumbnail" />
            <p>{title} - Homepage</p>
        </Wrapper>
    )
}

export default PortfolioItem
