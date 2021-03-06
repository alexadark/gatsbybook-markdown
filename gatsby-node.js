const path = require("path")

const postData = require("./src/templates/posts/data")
const postTemplate = path.resolve("./src/templates/posts/singlePost.js")
const blogTemplate = path.resolve("./src/templates/posts/archive.js")
const catTemplate = path.resolve("./src/templates/categories/archive.js")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug2",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return await graphql(postData).then(results => {
    const posts = results.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      //Create Single posts
      const { slug } = node.frontmatter

      createPage({
        path: `/posts${slug}`,
        component: postTemplate,
        context: {
          slug,
        },
      })

      //Create blog archive with pagination
      const postsPerPage = 2
      const numPages = Math.ceil(posts.length / postsPerPage)
      const blogPath = i => (i === 0 ? "/" : `/blog/${i + 1}`)

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: blogPath(i),
          component: blogTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })

      //Categories

      const cats = []
      posts.forEach(post =>
        post.node.frontmatter.categories.forEach(cat => cats.push(cat))
      )

      //count number of items by category
      const counts = {}
      cats.forEach(cat => (counts[cat] = (counts[cat] || 0) + 1))

      const uniqCats = Object.keys(counts)

      // creating a page for each categorie

      const catsPerPage = 2
      uniqCats.forEach(cat => {
        Array.from({ length: counts[cat] }).forEach((_, i) => {
          const catSlug = cat.replace(" ", "_").toLowerCase()
          const numPages = Math.ceil(counts[cat] / catsPerPage)
          const categoryPath = i =>
            i === 0 ? `/category/${catSlug}` : `/category/${catSlug}/${i + 1}`

          createPage({
            path: categoryPath(i),
            component: catTemplate,
            context: {
              limit: catsPerPage,
              skip: i * catsPerPage,
              currentPage: i + 1,
              numPages,
              catSlug,
              cat,
            },
          })
        })
      })
    })
  })
}
