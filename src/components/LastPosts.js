import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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

const LASTS_POSTS_QUERY = graphql`
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

const LastPosts = () => {
  const data = useStaticQuery(LASTS_POSTS_QUERY)

  return (
    <aside>
      <h2 style={{ marginBottom: 50 }}>Latest Posts</h2>
      <PostList>
        {data.allMarkdownRemark.edges.map(edge => {
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
  )
}

export default LastPosts
