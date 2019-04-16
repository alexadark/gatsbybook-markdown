import React from "react"
import styled from "styled-components"
import Date from "./Date"
import PostEntryTitle from "./PostEntryTitle"
import PostEntryMedia from "./PostEntryMedia"
import PostEntryContent from "./PostEntryContent"
import PostEntryMeta from "./PostEntryMeta"

const EntryFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  padding-right: 50px;
`

const ReadMore = styled.a`
  border: 1px solid #ccc;
  padding: 2px 20px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #555;
  font-weight: 400;
  &:hover {
    background: #222;
    color: #fff;
  }
`

const PostEntry = ({ post, location }) => {
  const { frontmatter } = location === "single" ? post : post.node
  return (
    <article>
      <PostEntryMedia location={location} post={post} />
      <PostEntryTitle location={location} post={post} />
      <Date date={frontmatter.date} />
      <PostEntryContent location={location} post={post} />
      <EntryFooter>
        <PostEntryMeta location={location} post={post} />
        {location !== "single" && (
          <ReadMore href={`posts${frontmatter.slug}`}>Read More</ReadMore>
        )}
      </EntryFooter>
    </article>
  )
}

export default PostEntry
