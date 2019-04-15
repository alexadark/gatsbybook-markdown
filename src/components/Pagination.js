import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Pagination = ({ currentPage, numPages, pathPrefix }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? "/"
      : `${pathPrefix}/${(currentPage - 1).toString()}`
  const nextPage = `${pathPrefix}${(currentPage + 1).toString()}`

  return (
    <>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={i === 0 ? "" : `${pathPrefix}${i + 1}`}
        >
          {i + 1}
        </Link>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="prev">
          Next Page →
        </Link>
      )}
    </>
  )
}

Pagination.propTypes = {
  pathPrefix: PropTypes.string,
  numPages: PropTypes.number,
  currentPage: PropTypes.number,
}

Pagination.defaultProps = {
  pathPrefix: ``,
}

export default Pagination
