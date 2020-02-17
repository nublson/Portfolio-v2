import React from "react"
import Layout from "../components/Layout"

import Home from "../sections/Home"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Portfolio from "../sections/Portfolio"

const App = () => {
    return (
        <Layout>
            <Home />
            <About />
            <Skills />
            <Portfolio />
        </Layout>
    )
}

export default App
