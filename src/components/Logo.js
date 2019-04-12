import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImage from "../images/gatsby-icon.png"

const Logo = ({ siteTitle, siteDescription }) => (
  <>
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        <img src={LogoImage} alt={`logo for ${siteTitle}`} />
      </Link>
    </h1>
    <h5>{siteDescription}</h5>
  </>
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
