import React from "react"
import Layout from "../components/Layout"

import About from "../sections/About"
import Skills from "../sections/Skills"
import Portfolio from "../sections/Portfolio"

const App = () => {
    return (
        <Layout>
            <About />
            <Skills />
            <Portfolio />
        </Layout>
    )
}

export default App
