import PropTypes from "prop-types"
import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 250px;
  }
  height: 150px;
`

const Header = ({ siteTitle, siteDescription }) => (
  <StyledHeader>
    <Logo siteTitle={siteTitle} siteDescription={siteDescription} />
    <Menu />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
