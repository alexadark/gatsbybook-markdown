import React from "react"
import { Link } from "gatsby"

const PostEntryTitle = ({ post, location }) => {
  const { title, slug } =
    location === "single" ? post.frontmatter : post.node.frontmatter
  return (
    <>
      {location === "single" ? (
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
      ) : (
        <h2>
          <Link
            to={`/posts${slug}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </h2>
      )}
    </>
  )
}

export default PostEntryTitle
