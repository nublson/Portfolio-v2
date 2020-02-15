import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        outline: 0;
    }
    html{
        font-size: 62.5%;
    }
    
    body{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.7;
        background: #fff;
        --text: ${props => props.theme.colors.text};
        --text-highlight: ${props => props.theme.colors.text_highlight};
        --text-grey: ${props => props.theme.colors.text_grey};
        --inactive-star: ${props => props.theme.colors.inactive_star};
        --background: ${props => props.theme.colors.background};
        --white: #fff;
        --radius: 2rem;
        background-color: var(--background);
        color: var(--text)
    }
    h1, h2, h3, h4{
        line-height: 1.1;
    }
`
