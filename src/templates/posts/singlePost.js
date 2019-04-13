import React from "react"
import Layout from "../../components/Layout"

const SinglePost = ({ pageContext }) => {
  const { content, categories, date, slug, title } = pageContext
  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
}

export default SinglePost
