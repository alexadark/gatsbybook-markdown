import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding-right: 50px;
  margin-bottom: 40px;
  .mutted {
    color: #bbb;
  }
`

const PageNumbers = styled.div`
  a {
    padding: 5px 10px;
    background: #f5f5f5;
    border: none;
    margin-right: 5px;
    &:hover {
      background-color: #222;
      color: #fff;
    }
  }
`

const PrevNextLinks = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  a {
    padding-bottom: 5px;
  }
`

const Pagination = ({ currentPage, numPages, pathPrefix, firstIsHome }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? firstIsHome
        ? "/"
        : pathPrefix
      : `${pathPrefix}/${(currentPage - 1).toString()}`
  const nextPage = `${pathPrefix}${(currentPage + 1).toString()}`

  return (
    <>
      <StyledPagination>
        <PrevNextLinks>
          {!isFirst ? (
            <Link to={prevPage} rel="prev">
              ← Prev
            </Link>
          ) : (
            <div className="mutted">← Prev</div>
          )}
        </PrevNextLinks>

        <PageNumbers>
          {Array.from({ length: numPages }, (_, i) => (
            <Link
              key={`pagination-number${i + 1}`}
              to={
                i === 0
                  ? firstIsHome
                    ? ""
                    : pathPrefix
                  : `${pathPrefix}${i + 1}`
              }
            >
              {i + 1}
            </Link>
          ))}
        </PageNumbers>
        <PrevNextLinks>
          {!isLast ? (
            <Link to={nextPage} rel="prev">
              Next →
            </Link>
          ) : (
            <div className="mutted">Next →</div>
          )}
        </PrevNextLinks>
      </StyledPagination>
    </>
  )
}

Pagination.propTypes = {
  pathPrefix: PropTypes.string,
  numPages: PropTypes.number,
  currentPage: PropTypes.number,
  firstIsHome: PropTypes.bool,
}

Pagination.defaultProps = {
  pathPrefix: ``,
  firstIsHome: false,
}

export default Pagination
