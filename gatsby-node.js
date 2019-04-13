const path = require("path")
const postData = require("./src/templates/posts/data")
const postTemplate = path.resolve("./src/templates/posts/singlePost.js")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return await graphql(postData).then(results => {
    results.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug, title, date, categories } = node.frontmatter
      createPage({
        path: `/posts${slug}`,
        component: postTemplate,
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
