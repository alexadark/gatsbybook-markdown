import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImage from "../images/gatsby-icon.png"
import styled from "styled-components"

const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const StyledLogo = styled.img`
  max-width: 30px;
  padding-right: 10px;
`

const SiteTitle = styled.h1`
  font-size: 42px;
  text-transform: uppercase;
  a {
    color: #111;
    text-decoration: none;
  }
`

const Logo = ({ siteTitle, siteDescription }) => (
  <HeaderLeft>
    <StyledLogo src={LogoImage} alt={`logo for ${siteTitle}`} />
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
