import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const EntryTitle = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  a {
    border: none;
    color: #222;
    &:hover {
      color: #000;
    }
  }
`

const PostEntryTitle = ({ post, location }) => {
  const { title, slug } =
    location === "single" ? post.frontmatter : post.node.frontmatter
  return (
    <>
      {location === "single" ? (
        <EntryTitle dangerouslySetInnerHTML={{ __html: title }} />
      ) : (
        <EntryTitle as="h2">
          <Link
            to={`/posts${slug}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </EntryTitle>
      )}
    </>
  )
}

export default PostEntryTitle
