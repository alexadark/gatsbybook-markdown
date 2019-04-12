import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const HeaderMenu = styled.nav`
  ul {
    display: flex;
    justify-content: flex-end;
    > li {
      padding-right: 20px;

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #999999;
        font-size: 13px;

        &:hover,
        &:active {
          color: #111;
        }
      }
    }
  }
`

const Menu = () => (
  <HeaderMenu>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </HeaderMenu>
)

export default Menu
