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
    const cats = posts.reduce((cats, post) => {
      const postCats = post.node.frontmatter.categories || []
      postCats.map(c => {
        const cat = cats.find(({ name }) => name === c) || { name: c, count: 0 }
        cats = [
          ...cats.filter(({ name }) => name !== c),
          { ...cat, count: cat.count + 1 },
        ]
      })
      return cats
    }, [])

    //Create blog archive with pagination
    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage)
    const blogPath = i => (i === 0 ? "/" : `/blog/${i + 1}`)

    // Create archive pages
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

    // Create category archive pages
    cats.map(({ name, count }) => {
      const catSlug = name.replace(" ", "_").toLowerCase()
      const numPages = Math.ceil(count / postsPerPage)

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `category/${catSlug}${(i && `/${i + 1}`) || ""}`,
          component: catTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            cat: name,
          },
        })
      })
    })

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
    })
  })
}
