module.exports = `
{
    allMarkdownRemark {
      edges {
        node {
          html
          excerpt(pruneLength: 300)
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            categories
            featuredImg
          }
        }
      }
    }
  }
`
