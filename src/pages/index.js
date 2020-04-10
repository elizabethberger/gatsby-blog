import React from "react"
import "../styles/index.scss"
import {graphql, StaticQuery} from 'gatsby'
import Post from '../components/Post'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageTitle="My perosnal blog">
    <SEO title="Page two" />
    <h1>Home page</h1>
    <StaticQuery query={indexQuery} render={ data => {
      return (
        <div>
        {data.allMarkdownRemark.edges.map(({node}) => (
            <Post
            key={node.id}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              body={node.excerpt}
              fluid={node.frontmatter.image.childImageSharp.fluid}
              tags={node.frontmatter.tags}
            />
          ))}
        </div>
        )
        }} />
  </Layout>
)

const indexQuery = graphql `
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image{
              childImageSharp{
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
