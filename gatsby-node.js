const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return await graphql(`
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
            }
          }
        }
      }
    }
  `).then(results => {
    results.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug, title, date, categories } = node.frontmatter
      createPage({
        path: `/posts${slug}`,
        component: path.resolve("./src/templates/posts/singlePost.js"),
        context: {
          slug,
          title,
          date,
          categories,
          content: node.html,
        },
      })
    })
  })
}
