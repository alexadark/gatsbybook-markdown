import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "styled-components"
import { PageTitle } from "../styles"
import Image from "../components/Image"

const TwoColumns = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .gatsby-image-wrapper {
    flex-basis: 65%;
    img {
      padding-right: 120px;
    }
  }
  .content {
    flex-basis: 35%;
    margin-bottom: 40px;
  }
`
const AboutPage = () => (
  <Layout>
    <SEO title="Contact" />
    <TwoColumns>
      <div className="content">
        <PageTitle>About</PageTitle>
        <p>
          Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus
          ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus. Cras mattis consectetur purus sit amet
          fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat
        </p>
        <p>
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Donec id
          elit non mi porta gravida at eget metus.
        </p>
      </div>
      <Image imgName="about.jpeg" />
    </TwoColumns>
  </Layout>
)

export default AboutPage
