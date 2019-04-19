import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { slugify } from "../utils"
const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cat-item {
    padding: 4px 20px;

    text-align: center;
    background-color: #f5f5f5;
    margin-right: 10px;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #999;
    border: none;
    margin-bottom: 10px;
    &:hover {
      background: #eee;
    }
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
          <Link to={`/category/${slugify(cat)}`} className="cat-item" key={cat}>
            {cat}
          </Link>
        ))}
    </Categories>
  )
}

export default PostEntryMeta
