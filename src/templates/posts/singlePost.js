import React from "react"
import Layout from "../../components/Layout"
import Image from "../../components/Image"
import styled from "styled-components"
import LastPosts from "../../components/LastPosts"
import Date from "../../components/Date"
import { FlexWrapper, Main, Aside } from "../../styles"

const Content = styled.div`
  columns: 2;
  column-gap: 30px;
  margin: 40px 0;
`

const SinglePost = ({ pageContext }) => {
  const { content, categories, date, title, featuredImg } = pageContext
  return (
    <Layout>
      <FlexWrapper>
        <Main>
          <div className="imageWrap" style={{ marginBottom: 60 }}>
            <Image imgName={featuredImg} />
          </div>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <Date date={date} />
          <Content dangerouslySetInnerHTML={{ __html: content }} />
          <div className="categories">
            {categories &&
              categories.map(cat => (
                <div className="cat-item" key={cat}>
                  {cat}
                </div>
              ))}
          </div>
        </Main>
        <Aside>
          <LastPosts />
        </Aside>
      </FlexWrapper>
    </Layout>
  )
}

export default SinglePost
