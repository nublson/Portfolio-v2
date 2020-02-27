import React from "react"
import styled from "styled-components"
import { animated } from "react-spring"

import NavItems from "../navItems"
import LangSwitcher from "../../UI/LangSwitcher"
import useLockBodyScroll from "../../../utils/useLockScroll"

const BackgroundWrapper = styled(animated.div)`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background: var(--background);
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    height: 100vh;
    display: flex;
    transition: background 0.2s ease-out;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 8rem 2rem 20rem;
`

const SideDrawer = ({
    setMenuOpened,
    isMobile,
    theme,
    toogleTheme,
    ...rest
}) => {
    useLockBodyScroll()
    return (
        <BackgroundWrapper {...rest}>
            <Wrapper>
                <NavItems
                    mobile
                    isMobile={isMobile}
                    theme={theme}
                    toogleTheme={toogleTheme}
                    clicked={() => setMenuOpened(false)}
                />

                <LangSwitcher invert="true" />
            </Wrapper>
        </BackgroundWrapper>
    )
}

export default SideDrawer
