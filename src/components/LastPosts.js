import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Date from "./Date"
import styled from "styled-components"

const PostList = styled.ul`
  margin: 0;
  li {
    list-style-type: none;
    margin-bottom: 40px;
  }
  h3 {
    margin-bottom: 0;
  }
  a {
    border: none;
    color: #737373;
    &:hover {
      color: #111;
    }
  }
`

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
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
        <h2 style={{ marginBottom: 50 }}>Latest Posts</h2>
        <PostList>
          {allMarkdownRemark.edges.map(edge => {
            const post = edge.node.frontmatter
            return (
              <li key={post.slug}>
                <h3>
                  {" "}
                  <Link to={`/posts${post.slug}`}>{post.title}</Link>
                </h3>
                <Date date={post.date} />
              </li>
            )
          })}
        </PostList>
      </aside>
    )}
  />
)

export default LastPosts
