import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web developer based in Portsmouth.</p>
        </div>
        <GatsbyImage image={image} style={{ borderRadius: "50%" }} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Ian {
    file(relativePath: { eq: "ian.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
// src="../images/ian.jpg" style={{ borderRadius: "50%" }}
