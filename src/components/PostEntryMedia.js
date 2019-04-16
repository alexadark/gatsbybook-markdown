import React from "react"
import { Link } from "gatsby"
import Image from "./Image"
import styled from "styled-components"

const ImageWrap = styled.div`
  margin-bottom: 60px;
`

const WithLink = ({ post, location, children }) =>
  location === "single" ? (
    children
  ) : (
    <Link to={`/posts/${post.node.frontmatter.slug}`}>{children}</Link>
  )

const PostEntryMedia = ({ post, location }) => {
  const { featuredImg } =
    location === "single" ? post.frontmatter : post.node.frontmatter
  return (
    <WithLink location={location} post={post}>
      <ImageWrap>
        <Image imgName={featuredImg} />
      </ImageWrap>
    </WithLink>
  )
}

export default PostEntryMedia
