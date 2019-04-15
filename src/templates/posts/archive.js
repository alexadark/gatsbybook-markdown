import React from "react"
import Layout from "../../components/Layout"
import Image from "../../components/Image"
import styled from "styled-components"
import LastPosts from "../../components/LastPosts"
import Date from "../../components/Date"
import { FlexWrapper, Main, Aside } from "../../styles"
import { Link, graphql } from "gatsby"
import Pagination from "../../components/Pagination"

const Blog = props => {
  const { currentPage, numPages, pathPrefix } = props.pageContext
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <FlexWrapper>
        <Main>
          {posts.map(post => {
            const { excerpt, frontmatter } = post.node
            const { title, date, featuredImg, slug, categories } = frontmatter
            return (
              <article>
                <h1>{title}</h1>
                {excerpt}
              </article>
            )
          })}
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
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
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

export default Blog
