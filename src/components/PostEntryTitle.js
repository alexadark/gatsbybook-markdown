import React from "react"
import { Link } from "gatsby"

const PostEntryTitle = ({ title, location, slug }) => (
  <>
    {location === "single" ? (
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
    ) : (
      <h2>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
    )}
  </>
)

export default PostEntryTitle
