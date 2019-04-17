module.exports = `
{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            categories
          }
        }
      }
    }
  }
`
