import React from "react"
import styled from "styled-components"
const Categories = styled.div`
  display: flex;
  .cat-item {
    padding: 2px 20px;
    background-color: #f5f5f5;
    margin-right: 10px;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #999;
  }
`

const PostEntryMeta = ({ post, location }) => {
  const categories =
    location === "single"
      ? post.frontmatter.categories
      : post.node.frontmatter.categories
  return (
    <Categories>
      {categories &&
        categories.map(cat => (
          <div className="cat-item" key={cat}>
            {cat}
          </div>
        ))}
    </Categories>
  )
}

export default PostEntryMeta
