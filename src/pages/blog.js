import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  const noBlogPosts = (
    <Layout>
      <SEO title="All posts" />
      <p>No blog posts found.</p>
    </Layout>
  )

  const blogList = (
    <Layout>
      <SEO title="All posts" />
      <ol className="blog-layout">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <li key={post.fields.slug}>
              <article>
                <header>
                  <h2>
                    <Link to={post.fields.slug}>
                      <span>{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )

  return posts.length === 0 ? noBlogPosts : blogList
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
