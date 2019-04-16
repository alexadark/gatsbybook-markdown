import React from "react"
import Image from "./Image"
import Date from "./Date"
import PostEntryTitle from "./PostEntryTitle"
import styled from "styled-components"
const Content = styled.div`
  columns: 2;
  column-gap: 30px;
  margin: 40px 0;
`

const PostEntry = ({
  featuredImg,
  title,
  html,
  categories,
  date,
  location,
}) => (
  <article>
    <div className="imageWrap" style={{ marginBottom: 60 }}>
      <Image imgName={featuredImg} />
    </div>
    {/* <PostEntryTitle location={location} title={title} /> */}
    <Date date={date} />
    <Content dangerouslySetInnerHTML={{ __html: html }} />
    <div className="categories">
      {categories &&
        categories.map(cat => (
          <div className="cat-item" key={cat}>
            {cat}
          </div>
        ))}
    </div>
  </article>
)

export default PostEntry
