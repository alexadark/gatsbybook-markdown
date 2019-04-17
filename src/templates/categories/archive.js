import React from "react"
import Layout from "../../components/Layout"
import LastPosts from "../../components/LastPosts"
import { FlexWrapper, Main, Aside } from "../../styles"
import { graphql } from "gatsby"
import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/Pagination"

const Category = props => {
  const { currentPage, numPages } = props.pageContext
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <FlexWrapper>
        <Main>
          {posts.map(post => (
            <PostEntry key={post.node.id} location="blog" post={post} />
          ))}
          <Pagination
            currentPage={currentPage}
            numPages={numPages}
            pathPrefix="blog/"
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
  query catPageQuery($cat: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $cat } } }
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
