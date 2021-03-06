import React from "react"
import Layout from "../../components/Layout"
import LastPosts from "../../components/LastPosts"
import { FlexWrapper, Main, Aside } from "../../styles"
import { graphql } from "gatsby"
import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/Pagination"
import SEO from "../../components/Seo"

const Category = props => {
  const { currentPage, numPages, cat, catSlug } = props.pageContext
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title={` ${cat} category`} />
      <FlexWrapper>
        <Main>
          {posts.map(post => (
            <PostEntry key={post.node.id} location="blog" post={post} />
          ))}
          <Pagination
            currentPage={currentPage}
            numPages={numPages}
            pathPrefix={`category/${catSlug}/`}
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
  query catPageQuery($cat: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $cat } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImg
            slug
            categories
          }
        }
      }
    }
  }
`

export default Category
