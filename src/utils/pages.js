export function getPageCount(totalCount, limit) {
  return Math.ceil(totalCount / limit)
}

export function getPagesArray(totalPage) {
  let result = []
  for (let i = 0; i < totalPage; i++) {
    result.push(i + 1)
  }
  return result
}
