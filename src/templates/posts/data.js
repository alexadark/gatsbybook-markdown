module.exports = `
{
    allMarkdownRemark {
      edges {
        node {
          html
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
