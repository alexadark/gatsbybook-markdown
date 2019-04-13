import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Container } from "../styles"
import Layout from "./Layout"

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { categories: { eq: "photo" } } }
    ) {
      totalCount
      edges {
        node {
          html
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            categories
          }
        }
      }
    }
  }
`

const LastPosts = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <aside>
        <h3>Last Photo Posts</h3>
        <ul>
          {allMarkdownRemark.edges.map(edge => {
            const post = edge.node.frontmatter
            return (
              <li key={post.slug}>
                <Link to={`/posts${post.slug}`}>{post.title}</Link>
              </li>
            )
          })}
        </ul>
      </aside>
    )}
  />
)

export default LastPosts
