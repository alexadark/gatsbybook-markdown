import React from "react"
import styled from "styled-components"
const Content = styled.div`
  margin: 40px 0;
`

const PostEntryContent = ({ post, location }) => {
  const content = location === "single" ? post.html : post.node.excerpt
  return <Content dangerouslySetInnerHTML={{ __html: content }} />
}

export default PostEntryContent
