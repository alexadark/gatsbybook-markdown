import React from "react"
import { Link } from "gatsby"
import Image from "./Image"

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
    <div className="entry-media bottom-spacer center-align">
      <WithLink location={location} post={post}>
        <div className="imageWrap" style={{ marginBottom: 60 }}>
          <Image imgName={featuredImg} />
        </div>
      </WithLink>
    </div>
  )
}

export default PostEntryMedia
