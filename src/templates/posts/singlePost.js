import React from "react"
import Layout from "../../components/Layout"
import Image from "../../components/Image"

const SinglePost = ({ pageContext, location }) => {
  const { content, categories, date, slug, title, featuredImg } = pageContext
  return (
    <Layout>
      <Image imgName={featuredImg} />
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
    </Layout>
  )
}

export default SinglePost
