import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="welcome">
        <h1 className="welcome__title">Game of K-03</h1>
        <h2 className="welcome__sub-title">Dari k3, untuk k3</h2>
        <div className="welcome__link-button">
          <Link to="/bingo">Play Bingo</Link>
          <Link to="/this-or-that">Play This or That</Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
