import React from "react"
import styled from "styled-components"

const PostEntryMeta = ({ post, location }) => {
  const categories =
    location === "single"
      ? post.frontmatter.categories
      : post.node.frontmatter.categories
  return (
    <div className="categories">
      {categories &&
        categories.map(cat => (
          <div className="cat-item" key={cat}>
            {cat}
          </div>
        ))}
    </div>
  )
}

export default PostEntryMeta
