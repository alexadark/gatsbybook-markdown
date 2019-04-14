import React from "react"
import styled from "styled-components"
const StyledDate = styled.div`
  font-size: 15px;
  color: #aaa;
  /* font-weight: 400; */
`
const Date = ({ date }) => <StyledDate>{date}</StyledDate>

export default Date
