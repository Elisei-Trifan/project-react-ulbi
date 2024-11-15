import React from 'react'
import { getPagesArray } from '../../../utils/pages'

const Pagination = ({ totalPage, page, changePageMemo }) => {
  let pagesArray = getPagesArray(totalPage)
  return (
    <div className="page_wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePageMemo(p)}
          className={page === p ? 'page page_clicked' : 'page'}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default Pagination
