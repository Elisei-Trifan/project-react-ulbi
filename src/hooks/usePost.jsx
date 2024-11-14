import { useMemo } from 'react'

export function useSortedPost(posts, sort) {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    } else {
      return posts
    }
  }, [sort, posts])

  return sortedPosts
}

export function usePost(posts, sort, query) {
  const sortedPosts = useSortedPost(posts, sort)

  const sortedAndSearchadPost = useMemo(() => {
    return sortedPosts.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, sortedPosts])

  return sortedAndSearchadPost
}
