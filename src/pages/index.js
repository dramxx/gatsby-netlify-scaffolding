import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  const content = data.content.frontmatter
  const backgroundImage = data.backgroundImage.edges[0].node.fixed.src

  return (
    <Layout>
      <SEO title="landing page" />
      <h2>{content.landing_page_heading}</h2>
      <p style={{ maxWidth: "960px" }}>{content.landing_page_subheading}</p>
      <img src={backgroundImage} />
    </Layout>
  )
}

export default Index

// TODO: better image handling

export const pageQuery = graphql`
  query {
    backgroundImage: allImageSharp(
      filter: {
        fluid: { src: { regex: "/(.*photo-1494253109108-2e30c049369b.jpg*)/" } }
      }
    ) {
      edges {
        node {
          fixed {
            src
          }
        }
      }
    }
    benefitsImages: allImageSharp(
      filter: { fluid: { src: { regex: "/(.*dma.jpg*)/" } } }
    ) {
      edges {
        node {
          fluid {
            src
          }
        }
      }
    }
    content: markdownRemark(fields: { slug: { eq: "/landing/" } }) {
      frontmatter {
        landing_page_heading
        landing_page_subheading
        landing_page_background_image {
          relativePath
        }
        benefits {
          landing_page_benefit {
            landing_page_benefit_name
            landing_page_benefit_description
            landing_page_benefit_image {
              relativePath
            }
          }
        }
      }
    }
  }
`
