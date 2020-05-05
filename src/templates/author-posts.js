import React from 'react'
import Layout from '../components/layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'
import authors from '../util/authors'

const authorPosts = ({ data, pageContext }) => {
  const { totalCount } = data.allMarkdownRemark
  const author = authors.find(x => x.name === pageContext.authorName)
  const pageHeader = `${totalCount} Posts by: ${pageContext.authorName}`

}

return (
    <Layout
      pageTitle={pageHeader}
      postAuthor={author}
      authorImageFluid={data.file.childImageSharp.fluid}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
    </Layout>
  )
}
export default authorPosts