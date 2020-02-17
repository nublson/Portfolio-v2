import React from "react"
import Layout from "../components/Layout"

import Home from "../sections/Home"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Portfolio from "../sections/Portfolio"
import Contacts from "../sections/Contacts"

const App = () => {
    return (
        <Layout>
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contacts />
        </Layout>
    )
}

export default App
