import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`

export const FlexWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`
export const Main = styled.main`
  flex-basis: ${props => props.width || "80%"};
  @media (min-width: 768px) {
    padding-right: 60px;
  }
`

export const Aside = styled.aside`
  flex-basis: ${props => props.width || "20%"};
`
