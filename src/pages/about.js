import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo
      title="About this site"
      description="Information about the site."
      image="/logo.png"
      pathname="/"
    />
    <section>
      <h1>About this site</h1>
      <figure>
        <img src="images/gatsby-icon.png" width="400" height="400" />
      </figure>
      <div>
        <p>This is the first page I've created by using Gatsby!</p>
        <p>
          It was originally based on the Index page, but now it's totally
          unique!
        </p>
      </div>
    </section>
  </Layout>
)

export default AboutPage
