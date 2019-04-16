import React from "react"
import Layout from "../../components/Layout"
import LastPosts from "../../components/LastPosts"
import PostEntry from "../../components/PostEntry"

import { FlexWrapper, Main, Aside } from "../../styles"

const SinglePost = ({ data }) => {
  return (
    <Layout>
      <FlexWrapper>
        <Main>
          <PostEntry location="single" post={data.markdownRemark} />
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
        date(formatString: "DD MMMM, YYYY")
        featuredImg
        categories
        slug
      }
    }
  }
`

export default SinglePost
