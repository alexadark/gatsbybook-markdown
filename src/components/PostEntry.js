import React from "react"
import Date from "./Date"
import PostEntryTitle from "./PostEntryTitle"
import PostEntryMedia from "./PostEntryMedia"
import PostEntryContent from "./PostEntryContent"
import PostEntryMeta from "./PostEntryMeta"

const PostEntry = ({ post, location }) => {
  const { frontmatter } = location === "single" ? post : post.node
  return (
    <article>
      <PostEntryMedia location={location} post={post} />
      <PostEntryTitle location={location} post={post} />
      <Date date={frontmatter.date} />
      <PostEntryContent location={location} post={post} />
      <PostEntryMeta location={location} post={post} />
    </article>
  )
}

export default PostEntry
