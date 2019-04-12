import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SiteTitle = styled.h1`
  font-size: 42px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;

  a {
    color: #222;
    text-decoration: none;
  }
`

const Logo = ({ siteTitle }) => (
  <HeaderLeft>
    <SiteTitle>
      <Link to="/">{siteTitle}</Link>
    </SiteTitle>
  </HeaderLeft>
)

Logo.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Logo.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Logo
