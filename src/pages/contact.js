import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ContactForm from "../components/ContactForm"
import { PageTitle } from "../styles"
import styled from "styled-components"
import Image from "../components/Image"

const TwoCols = styled.div`
  @media (min-width: 768px) {
    display: flex;
    div {
      flex-basis: 50%;
      padding-right: 40px;
    }
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact page" />
    <PageTitle>Contact Page</PageTitle>
    <TwoCols>
      <div>
        <Image imgName="paris.jpeg" />
        <p style={{ marginTop: 40 }}>
          Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus
          ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus. Cras mattis consectetur purus sit amet
          fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus
        </p>
      </div>

      <ContactForm />
    </TwoCols>
  </Layout>
)

export default ContactPage
