import React from "react"
import styled from "styled-components"

import { IconContext } from "react-icons"
import { IoIosSunny, IoIosMoon } from "react-icons/io"

const Container = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    position: fixed;
    right: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        cursor: pointer;
    }
`

const ThemeSwitcher = ({ toogleTheme, theme }) => {
    return (
        <IconContext.Provider value={{ size: "2.5rem" }}>
            <Container>
                {theme.name === "light" ? (
                    <IoIosMoon onClick={() => toogleTheme()} color="#2b2b2b" />
                ) : (
                    <IoIosSunny onClick={() => toogleTheme()} color="#fff" />
                )}
            </Container>
        </IconContext.Provider>
    )
}

export default ThemeSwitcher
