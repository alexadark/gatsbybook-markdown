const path = require("path")
const postData = require("./src/templates/posts/data")
const postTemplate = path.resolve("./src/templates/posts/singlePost.js")
const blogTemplate = path.resolve("./src/templates/posts/archive.js")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return await graphql(postData).then(results => {
    const posts = results.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      const { slug, title, date, categories, featuredImg } = node.frontmatter

      //Create Single posts
      createPage({
        path: `/posts${slug}`,
        component: postTemplate,
        context: {
          slug,
          title,
          date,
          categories,
          content: node.html,
          featuredImg,
        },
      })

      //Create blog archive with pagination
      const postsPerPage = 2
      const numPagess = Math.ceil(posts.length / postsPerPage)
      const blogPath = i => (i === 0 ? "/" : `/blog/${i + 1}`)

      Array.from({ length: numPagess }).forEach((_, i) => {
        createPage({
          path: blogPath(i),
          component: blogTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPagess,
            currentPage: i + 1,
          },
        })
      })
    })
  })
}
