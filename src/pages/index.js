import React from "react"
import Layout from "../components/Layout"

import Home from "../sections/Home"
import About from "../sections/About"
import Skills from "../sections/Skills"

const App = () => {
    return (
        <Layout>
            <Home />
            <About />
            <Skills />
        </Layout>
    )
}

export default App
