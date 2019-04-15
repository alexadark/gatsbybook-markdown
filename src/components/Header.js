import PropTypes from "prop-types"
import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import styled from "styled-components"
import { Container } from "../styles"

const StyledHeader = styled.header`
  div {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    padding: 80px 0;
  }
  padding: 40px 0;
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
