import React from "react"
import Layout from "../../components/Layout"
import LastPosts from "../../components/LastPosts"
import PostEntry from "../../components/PostEntry"

import { FlexWrapper, Main, Aside } from "../../styles"

const SinglePost = ({ data }) => {
  const {
    html,
    frontmatter: { title, date, featuredImg, categories },
  } = data.markdownRemark
  return (
    <Layout>
      <FlexWrapper>
        <Main>
          <PostLayout
            html={html}
            title={title}
            featuredImg={featuredImg}
            categories={categories}
            date={date}
          />
        </Main>
        <Aside>
          <LastPosts />
        </Aside>
      </FlexWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query singlePostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featuredImg
        categories
      }
    }
  }
`

export default SinglePost
