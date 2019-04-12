import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"

const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <Logo siteTitle={siteTitle} siteDescription={siteDescription} />
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
