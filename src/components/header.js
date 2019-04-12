import PropTypes from "prop-types"
import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import styled from "styled-components"
import { Container } from "../styles"

const StyledHeader = styled.header`
  div {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    height: 250px;
  }
  height: 150px;
`

const Header = ({ siteTitle, siteDescription }) => (
  <StyledHeader>
    <Container>
      <Logo siteTitle={siteTitle} siteDescription={siteDescription} />
      <Menu />
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
