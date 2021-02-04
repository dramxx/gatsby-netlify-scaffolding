import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Img } from "gatsby-image"

const Index = ({ data }) => {
  const content = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title="landing page" />
      <h2>{content.landing_page_heading}</h2>
      <p style={{ maxWidth: "960px" }}>{content.landing_page_subheading}</p>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  {
    markdownRemark(fields: { slug: { eq: "/landing/" } }) {
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
