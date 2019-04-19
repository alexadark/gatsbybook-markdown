import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Date from "./Date"
import PostEntryTitle from "./PostEntryTitle"
import PostEntryMedia from "./PostEntryMedia"
import PostEntryContent from "./PostEntryContent"
import PostEntryMeta from "./PostEntryMeta"

const EntryFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
`

const ReadMore = styled.div`
  border: 1px solid #ccc;
  padding: 2px 20px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #555;
  font-weight: 400;
  transition: all 0.4s ease-in-out;
  flex-basis: 200px;
  &:hover {
    background: #222;
    color: #fff;
  }
  a & {
    border-bottom: none;
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
          <Link to={`posts${frontmatter.slug}`}>
            <ReadMore>Read More</ReadMore>
          </Link>
        )}
      </EntryFooter>
    </article>
  )
}

export default PostEntry
