import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import LastPosts from "../../components/LastPosts"
import PostEntry from "../../components/PostEntry"
import SEO from "../../components/Seo"

import { FlexWrapper, Main, Aside } from "../../styles"

const SinglePost = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={title} />
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
